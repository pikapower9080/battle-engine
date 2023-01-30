const fs = require('fs')
const path = require('path')

if (!fs.existsSync('build')) {
    fs.mkdirSync("build")
} else {
    fs.rmSync("build", {recursive: true})
    fs.mkdirSync("build")
}
fs.readdirSync("public").forEach((file) => {
    fs.cpSync(path.resolve("public", file), path.resolve('build', file), {recursive: true})
})
fs.cpSync(path.resolve("dist", "main.js"), path.resolve("build", "main.js"))