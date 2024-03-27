// 分岐のある関数
function hello(name) {
  if (name) {
    return "Hello, " + name + "!";
  } else {
    return "Hello, World!";
  }
}

module.exports = hello;
