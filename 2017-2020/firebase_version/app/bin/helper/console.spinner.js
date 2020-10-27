const { Spinner } = require('cli-spinner')

let spinner = null

module.exports = class ConsoleSpinner {
  log(text) {
    if (spinner) {
      this.stop()
    }
    spinner = new Spinner(`${text}`)
    spinner.setSpinnerString(8)
    spinner.start()
  }

  stop() {
    spinner.stop()
    process.stdout.write('\n')
  }
}