const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

/**
 * 简易的 mock server
 * port 3000
 * 暂时只支持 get
 * url 不支持 param、query
 */
const PORT = 3000

fs.readdir(path.resolve(__dirname, 'mock'), (err, files) => {
    if (err) {
        console.log(err)
        return
    }

    files.forEach((item) => {
        let text = fs.readFileSync(path.resolve(__dirname, 'mock/', item), "utf-8").replace(/export default/g, '')

        if (text.trim().length === 0) {
            console.log(chalk.red('   error file: ' + item))
            console.log()
            process.exit()
        }

        let data = eval("(" + text + ")")

        app.get('/mock' + data.url, (req, res) => res.json(data.mock))
    })
})

app.listen(PORT, () => {
    console.log()
    console.log(chalk.green(`   mockserver listening on port: ${PORT}`))
    console.log()
})