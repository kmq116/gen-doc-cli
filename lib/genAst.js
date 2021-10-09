const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "confirm",
    name: "isRead",
    message: "是否要读取文件",
    default: false,
  },
  {
    type: "input",
    name: "path",
    message: "输入文件路径",
  },
];
// 读取文件 转 ast

function read() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      if (answers.isRead) {
        fs.readFile(answers.path, (err, data) => {
          if (err) return console.error(err);
          console.log(data.toString());
        });
      } else {
        console.log("没有选择读取文件");
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

module.exports = read;
