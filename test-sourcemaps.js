const validate = require('sourcemap-validator')
const fs = require('fs');

fs.readdir('build/static/js', (err, files) => {
    console.log(files);
    let minFilename = files[0];
    let mapFilename = files[1];
    let min = fs.readFileSync(`build/static/js/${minFilename}`, 'utf-8')
    if (mapFilename) {
        let map = fs.readFileSync(`build/static/js/${mapFilename}`, 'utf-8');
        validate(min, map);
    } else {
        validate(min);
    }
});
