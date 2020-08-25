const fs = require('fs')
const time = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
const append = `\n <!-- Packing time is ${time}  / ${new Date().getTime()} --> \n`

fs.appendFile('dist/index.html', append, 'utf-8', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('\033[42;30m DONE \033[40;32m package info successfully writed in index.html\033[0m')
})