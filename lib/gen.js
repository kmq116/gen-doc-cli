const fs = require("fs");
const inquirer = require("inquirer");
const { parse } = require("@babel/parser");
const { codeGenerator } = require("./generator");
const { buildFile, genDir } = require("./wirteFile");
const path = require("path");
console.log(123123);
const questions = [
  // {
  //   type: "confirm",
  //   name: "isRead",
  //   message: "是否要读取文件",
  //   default: false,
  // },
  {
    type: "input",
    name: "path",
    message: "输入文件路径",
  },
  {
    type: "input",
    name: "output",
    message: "目标文件夹",
  },
];
// 读取文件 转 ast

function genTypes() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      fs.readFile(answers.path, (err, data) => {
        if (err) return console.error(err);
        const ast = parse(data.toString(), {
          sourceType: "module",
        });
        genDir(codeGenerator(ast), answers.output);
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

module.exports = genTypes;
