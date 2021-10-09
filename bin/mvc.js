#!/usr/bin/env node

const { program } = require("commander");
const read = require("../lib/genAst");



// 命令 <参数> [可选参数]
program
  .command("read")
  .description("log 一下")
  .action((log) => {
    read()
    // console.log(log, "log 的参数");
  });

program.parse();
