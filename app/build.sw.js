const fs = require('fs')
const replace = require("replace")
const util = require('util')

const setTimeoutPromise = util.promisify(setTimeout)

const { COPYFILE_EXCL, R_OK, W_OK } = fs.constants;

const swFileBase = './service-worker.js'
const swFileNew = './static/sw.js'

let intents = 5
let timeout = null

const createSW = () => {
  console.log('>> Waiting BUILDING')
  timeout = setTimeoutPromise(3000).then(() => {
    --intents
    if (intents > 0) {
      console.log('>> Trying to create new service worker...')

      // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
      fs.copyFile(swFileBase, swFileNew, COPYFILE_EXCL, (err) => {
        if (err) throw err

        console.log('>> Searching BUILD_ID hash')
        fs.readFile('./next/BUILD_ID', 'utf8', (err, build_id) => {
          if (err) {
            console.log(`>> Build isn't ready, retrying...(${intents} trys left)`)
            clearTimeout(timeout)
            return initBuild()
          }

          console.log(`>> Adding BUILD_ID info (${build_id})`)
          replace({
            regex: '{{BUILD_ID}}',
            replacement: build_id,
            paths: [swFileNew],
            recursive: true,
            silent: true
          })
          console.log('>> Done!')
        })
      })
    } else {
      clearTimeout(timeout)
      console.log('>> Timeout (tried 3 times) when creating new service worker.')
    }
  })
}

const initBuild = () => {
  fs.access(swFileNew, R_OK | W_OK, (err) => {
    if (!err) {
      return fs.unlink(swFileNew, (err) => {
        if (err) throw err
        console.log('>> Successfully deleted existent service worker.')
        createSW()
      })
    }
    return createSW()
  })
}

initBuild()