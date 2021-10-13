#!/usr/bin/env node

const { program } = require("commander");
const genTypes = require("../lib/gen");

// 命令 <参数> [可选参数]
program
  .command("g")
  .description("log 一下")
  .action((log) => {
    genTypes();
  });

program.parse();
