const { exec } = require('child_process')

module.exports = (consoleInstance, scriptName) => {
  exec(`npm run ${scriptName}`, (error, stdout, stderr) => {
    process.stdout.write('\n')
    if (error) {
      console.error(`exec error: ${error}`)
      process.stdout.write('\n')
      consoleInstance.stop()
      return process.exit(-1)
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
    process.stdout.write('\n')
    consoleInstance.log('>> Done!')
    consoleInstance.stop()
  })
}