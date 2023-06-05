const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const resolve = (...file) => path.resolve(__dirname, ...file);
const log = (message) => console.log(chalk.green(`${message}`));
const successLog = (message) => console.log(chalk.blue(`${message}`));
const errorLog = (error) => console.log(chalk.red(`${error}`));

// 导入模板
const { componentTemplate1 } = require("./template/comp.t.cjs");
const { entryTemplate1 } = require("./template/entry.t.cjs");
const { testTemplate1 } = require("./template/test.t.cjs");
const { typeTemplate1 } = require("./template/type.t.cjs");

// 生成文件
const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`);
    return;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, "utf8", (err) => {
      if (err) {
        errorLog(err.message);
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};
log(
  "请输入要生成的组件类型:组件名称，例: Basic:Test1 模版组件会生成在components目录下"
);

process.stdin.on("data", async (chunk) => {
  const inputName = String(chunk).trim().toString().split(":")[1];
  let pathName = String(chunk).trim().toString().split(":")[0];

  // 组件目录
  const componentPath = resolve(`../components/${pathName}`, `M${inputName}`);
  // 入口文件
  const entryFile = resolve(`../components/${pathName}`, `M${inputName}`, "index.ts");
  // vue文件
  const vueFile = resolve(componentPath, "src", "index.vue");
  // 类型文件
  const typeFile = resolve(componentPath, "src", "props.ts");
  // 测试文件
  const testFile = resolve(componentPath, "__test__", `M${inputName}.spec.ts`);

  // 判断组件文件夹是否存在
  const hasComponentExists = fs.existsSync(componentPath);
  if (hasComponentExists) {
    errorLog(`${inputName}组件已存在，创建失败，请重新输入`);
    return;
  } else {
    log(`🔸正在生成组件目录 ✅✅✅ ${componentPath}`);
    await dotExistDirectoryCreate(componentPath);
    log(`🔸正在生成组件所需子目录 ✅✅✅`);
    await fs.mkdir(`${componentPath}/__test__`, (err) => {
      err && log(err);
    });
    await fs.mkdir(`${componentPath}/src`, (err) => {
      err && log(err);
    });
    try {
      log(`🔸正在生成组件模版 ✅✅✅`);
      await generateFile(vueFile, componentTemplate1(`${inputName}`));
      log(`🔸正在生成主入口文件 ✅✅✅`);
      await generateFile(entryFile, entryTemplate1(`M${inputName}`));
      log(`🔸正在生成单元测试文件 ✅✅✅`);
      await generateFile(testFile, testTemplate1(`M${inputName}`));
      log(`🔸正在生成类型约束文件 ✅✅✅`);
      await generateFile(typeFile, typeTemplate1(`M${inputName}`));
      successLog("创建成功 ✨✨✨");
    } catch (e) {
      errorLog(e.message);
    }
    process.stdin.emit("end");
  }
});
process.stdin.on("end", () => {
  process.exit();
});

function dotExistDirectoryCreate(directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true);
    });
  });
}

// 递归创建目录
function mkdirs(directory, callback) {
  var exists = fs.existsSync(directory);
  if (exists) {
    callback();
  } else {
    mkdirs(path.dirname(directory), function () {
      fs.mkdirSync(directory);
      callback();
    });
  }
}
