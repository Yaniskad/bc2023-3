const fs = require('node:fs')

const fields = ['Доходи, усього', 'Витрати, усього']

fs.readFile('data.json', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    var string = '';
    var content = JSON.parse(data.toString())
    for (const record of content) {
        if (fields.includes(record.txt)) {
            string += record.txt + ':' + record.value + '\n'
        }
    }
    writeFile('output.txt', string)
}
)

function writeFile (path, data) {
    fs.writeFile(path, data, err => {
        if (err) {
            console.error(err)
            return
        }
        console.log('File has been written')
    })
}