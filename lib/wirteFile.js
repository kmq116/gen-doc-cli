const fs = require("fs");
const path = require("path");

async function genDir(content, target) {

  return new Promise((resolve, reject) => {
    // 判断 node_modules
    let node_modules = path.join(process.cwd(), "node_modules");
    isFileExists(node_modules)
      .then((res) => {
        let types = path.join(node_modules, "@types");
        isFileExists(types).then((res) => {
          let targetPath = path.join(types, target);
          isFileExists(targetPath).then((res) => {
            writeFile(content, path.join(targetPath, "index.d.ts"));
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

// 创建目录
function spawnDir(dirPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, (err, data) => {
      if (err) return reject(err);
      resolve(dirPath);
    });
  });
}

function isFileExists(fPath) {
  return new Promise((resolve, reject) => {
    // fs.stat(fPath, (err, stats) => {
    //   if (err) return reject(err);
    //   console.log(stats.isDirectory());
    //   if (stats.isDirectory()) {
    //     resolve();
    //   } else {
    //     spawnDir(fPath).then(() => resolve(fPath));
    //   }
    // });

    fs.exists(fPath, (exists) => {
      if (exists) return resolve(fPath);
      else spawnDir(fPath).then(() => resolve(fPath));
    });
  });
}

function writeFile(content, fPath) {
  fs.writeFile(fPath, content, (data, err) => {
    if (err) return console.log(err);
    console.log("写入文件成功");
  });
}

module.exports = {
  genDir,
};
