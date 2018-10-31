const Fontmin = require('fontmin')
const path = require('path')
const chalk = require('chalk')

/**
 * 字体压缩相关配置：
 * rawFontPath - 字体源文件路径
 * distFontPath - 字体压缩后的保存路径
 * text - 需提取的字体
 */
const config = {
    rawFontPath: path.resolve(__dirname, './src/assets/font/raw/*.ttf'),
    distFontPath: path.resolve(__dirname, './src/assets/font/'),
    text: "123456"
}

new Fontmin()
    .src(config.rawFontPath)
    .use(Fontmin.glyph({
        text: config.text,
        hinting: false
    }))
    .use(Fontmin.ttf2eot())
    .use(Fontmin.ttf2woff({
        deflate: true
    }))
    // fontcion class 开启
    // .use(Fontmin.css({
    //     iconPrefix: 'ui-icon',
    //     fontFamily: 'ui-font',
    // }))
    .dest(config.distFontPath)
    .run((err, files, stram) => {
        if (err) {
            console.log(chalk.red(err))
        }

        console.log()
        console.log(chalk.green('fontmin success'))
        console.log()
    })