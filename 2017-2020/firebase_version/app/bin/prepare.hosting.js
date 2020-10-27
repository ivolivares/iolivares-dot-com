const { copy, remove } = require('fs-extra')
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

const initPreparation = () => {
  log('>> Preparing the hosting directory...')
  copy('../public', './hosting', (err) => {
    if (err) throw err
    
    log('>> Removing the next temp directory')
    remove('./next', (err) => {
      if (err) throw err
      log('>> We are ready!')
      spinner.stop()
    })
  })
}

initPreparation()

process.on('SIGINT', () => {
  process.stdout.write('\n')
  console.log('>> Ok, I stop! Bye :)')
  process.exit(-1)
})