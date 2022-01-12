const os = require('os');
const path = require('path');
const fs = require('fs');


const cpuInfo = os.cpus()
// console.log(cpuInfo);

const osType = os.type()
// console.log(osType);

const osHomeDir = os.homedir()
// console.log(osHomeDir);

// console.log(__dirname)
// console.log(__filename)

fs.writeFile("cpu.json", JSON.stringify(cpuInfo), (err) => {
    if (err) throw err;
})