const {readFileSync, writeFileSync} = require('fs')

//const fs = require('fs);    fs.readFileSync---- alternate method of calling the file system built in function

const file1 = readFileSync('./content/first.txt', 'utf8')
const file2 = readFileSync('./content/second.txt', 'utf8')
console.log(file1, file2)

writeFileSync('./content/result.txt',`Here is the result of fileWriteSync${file1}, ${file2}`)