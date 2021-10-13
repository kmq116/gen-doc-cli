let sameFnName = "";
function codeGenerator(node, parent) {
  switch (node.type) {
    case "File":
      return codeGenerator(node.program);
    case "Program":
      // 遍历 body 属性
      return node.body.map(codeGenerator).join("\n");
    // 导出声明
    case "ExportNamedDeclaration":
      return codeGenerator(node.declaration);

    // 默认声明不处理
    case "ExportDefaultDeclaration":
      return "";

    case "VariableDeclaration":
      return node.declarations.map(codeGenerator);

    case "VariableDeclarator":
      sameFnName = node.id.name;
      return (
        `declare const ${node.id.name}: ${node.id.name}; ` +
        "\n" +
        codeGenerator(node.init, parent)
      );

    case "CallExpression":
      return `${codeGenerator(
        node.callee
      )}\ninterface ${sameFnName}{${node.arguments.map(codeGenerator)}\n}\n`;

    case "Identifier":
      return "";

    case "ObjectExpression":
      return node.properties.map(codeGenerator).join("; ");

    case "ObjectProperty":
      return `\n  ${node.key.name}:[${codeGenerator(node.value)}]`;

    case "ArrayExpression":
      return node.elements.map(codeGenerator);

    case "NumericLiteral":
      return node.value;

    case "StringLiteral":
      return `'${node.value}'`;

    default:
      // return "123";
      throw new TypeError(node.type);
  }
}

module.exports = {
  codeGenerator,
};
