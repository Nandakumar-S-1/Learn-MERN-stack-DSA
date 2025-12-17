const fs = require("fs/promises");
async function readFile() {
  const data = await fs.readFile("file1.txt", "utf-8");
  console.log(data);
}
readFile();

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
