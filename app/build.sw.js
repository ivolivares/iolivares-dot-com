const fs = require('fs')
const replace = require("replace")
const util = require('util')
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

const setTimeoutPromise = util.promisify(setTimeout)

const { COPYFILE_EXCL, R_OK, W_OK } = fs.constants;

const swFileBase = './service-worker.js'
const swFileNew = '../public/sw.js'

let intents = 5
let timeout = null

const createSW = () => {
  log('>> Waiting BUILDING');
  timeout = setTimeoutPromise(5000).then(() => {
    --intents
    if (intents > 0) {
      log('>> Trying to create new service worker...')

      // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
      fs.copyFile(swFileBase, swFileNew, COPYFILE_EXCL, (err) => {
        if (err) throw err

        log('>> Searching BUILD_ID hash')
        fs.readFile('./next/BUILD_ID', 'utf8', (err, build_id) => {
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
          log('>> Done!')
          spinner.stop()
        })
      })
    } else {
      clearTimeout(timeout)
      log('>> Timeout (tried 3 times) when creating new service worker.')
    }
  })
}

const initBuild = () => {
  fs.access(swFileNew, R_OK | W_OK, (err) => {
    if (!err) {
      return fs.unlink(swFileNew, (err) => {
        if (err) throw err
        log('>> Successfully deleted existent service worker.')
        createSW()
      })
    }
    return createSW()
  })
}

initBuild()