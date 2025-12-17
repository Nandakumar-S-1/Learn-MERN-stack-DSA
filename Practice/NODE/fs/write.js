const fs=require('fs/promises')
async function writeFile() {
    await fs.writeFile('fileWrite.txt','write message')
    console.log('written');
}

writeFile()