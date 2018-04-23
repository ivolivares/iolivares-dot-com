const { ensureFile, copy } = require('fs-extra')
const { readFile, unlink } = require('fs')
const replace = require("replace")
const promisify = require('util-promisify')
const { exec } = require('child_process')
const { Spinner } = require('cli-spinner')

let spinner = null

const log = (text) => {
  if (spinner) {
    spinner.stop()
    process.stdout.write('\n')
  }
  spinner = new Spinner(`${text}`)
  spinner.setSpinnerString(8)
  spinner.start()
}

const setTimeoutPromise = promisify(setTimeout)

const swFileBase = './service-worker.js'
const swFileNew = '../public/sw.js'

let intents = 5
let timeout = null

const createSW = () => {
  log('>> Waiting BUILDING')
  timeout = setTimeoutPromise(5000).then(() => {
    --intents
    if (intents > 0) {
      log('>> Trying to create new service worker...')

      copy(swFileBase, swFileNew, (err) => {
        if (err) throw err

        log('>> Searching BUILD_ID hash')
        readFile('./next/BUILD_ID', 'utf8', (err, build_id) => {
          if (err) {
            log(`>> Build isn't ready, retrying...(${intents} trys left)`)
            clearTimeout(timeout)
            return initBuild()
          }

          log(`>> Adding BUILD_ID info (${build_id})`)
          replace({
            regex: '{{BUILD_ID}}',
            replacement: build_id,
            paths: [swFileNew],
            recursive: true,
            silent: true
          })
          log('>> Service Worker Ready!')
          finishBuild()
        })
      })
    } else {
      clearTimeout(timeout)
      log('>> Timeout (tried 5 times) when creating new service worker.')
      spinner.stop()
      process.exit(-1)
    }
  })
}

const finishBuild = () => {
  if (process.env.NODE_ENV === 'production') {
    log('>> Publishing on GIT the new service-worker...')
    exec('npm run update-sw', (error, stdout, stderr) => {
      process.stdout.write('\n')
      if (error) {
        console.error(`exec error: ${error}`)
        process.stdout.write('\n')
        spinner.stop()
        return process.exit(-1)
      }
      console.log(`stdout: ${stdout}`)
      console.log(`stderr: ${stderr}`)
      process.stdout.write('\n')
      log('>> Done!')
      spinner.stop()
    })
  } else {
    log('>> Done!')
    spinner.stop()
  }
}

const initBuild = () => {
  ensureFile(swFileNew, (err) => {
    if (!err) {
      return unlink(swFileNew, (err) => {
        if (err) throw err
        log('>> Successfully deleted existent service worker.')
        createSW()
      })
    }
    return createSW()
  })
}

initBuild()