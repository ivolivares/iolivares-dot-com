#! /usr/bin/env node

const replace = require('replace')
const { access, readFile, copyFile, unlink, constants } = require('fs')
const { promisify } = require('util')
const publish = require('./helper/publish')
const ConsoleSpinner = require('./helper/console.spinner')

const _console = new ConsoleSpinner()

const { F_OK, R_OK } = constants

const setTimeoutPromise = promisify(setTimeout)

const swFileBase = './service-worker.js'
const swFileNew = '../public/sw.js'

let intents = 5
let timeout = null

const createSW = () => {
  _console.log('>> Waiting BUILDING')
  timeout = setTimeoutPromise(5000).then(() => {
    --intents
    if (intents > 0) {
      _console.log('>> Trying to create new service worker...')

      copyFile(swFileBase, swFileNew, (err) => {
        if (err) throw err

        _console.log('>> Searching BUILD_ID hash')
        readFile('./next/BUILD_ID', 'utf8', (err, build_id) => {
          if (err) {
            _console.log(`>> Build isn't ready, retrying...(${intents} trys left)`)
            clearTimeout(timeout)
            return initBuild()
          }

          _console.log(`>> Adding BUILD_ID info (${build_id})`)
          replace({
            regex: '{{BUILD_ID}}',
            replacement: build_id,
            paths: [swFileNew],
            recursive: true,
            silent: true
          })
          _console.log('>> Service Worker Ready!')
          finishBuild()
        })
      })
    } else {
      clearTimeout(timeout)
      _console.log('>> Timeout (tried 5 times) when creating new service worker.')
      _console.stop()
      process.exit(-1)
    }
  })
}

const finishBuild = () => {
  _console.log('>> Initiating script to publish on git...')
  publish(_console, 'update-sw')
}

const initBuild = () => {
  access(swFileNew, R_OK | F_OK, (err) => {
    if (!err) {
      return unlink(swFileNew, (err) => {
        if (err) throw err
        _console.log('>> Successfully deleted existent service worker.')
        createSW()
      })
    }
    return createSW()
  })
}

initBuild()

process.on('SIGINT', () => {
  _console.stop()
  console.log('>> Ok, I stop! Bye :)')
  clearTimeout(timeout)
  process.exit(-1)
})