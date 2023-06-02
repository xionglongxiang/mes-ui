const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const entryMap = new Map([
  ['components', path.resolve(__dirname, '../components')]
])
const outputMap = new Map([
  ['lib', path.resolve(__dirname, '../../lib')],
  ['components', path.resolve(__dirname, '../../lib/components')]
])

const delDir = (path) => {
  if (path.substr(0, 1) !== '/' && path.indexOf(':') === -1) path = resolve(path);
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file) => {
      let curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  productionSourceMap: true,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router', 'element-plus'],
  output: {
    globals: {
      vue: 'Vue'
    },
    sourcemap: true,
  }
}

/**
 * 创建目录
 * @compontent
 * @name
 */
const createDir = async (dir, name, output) => {
  console.log(dir, name, output,'hh');
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(dir, name),
        name: 'index',
        fileName: 'index',
        // formats: ['es', 'umd'] // 默认就好
      },
      outDir: path.resolve(output, name)
    }
  }))
}

/**
 * 生成组件的 package.json 文件
 * @name string
 */
const createPackageJson = (name) => {
  const fileStr = `{
  "name": "${name}",
  "version": "0.0.0",
  "main": "index.umd.js",
  "module": "index.es.js",
  "style": "style.css"
}`

  fsExtra.outputFile(
    path.resolve(outputMap.get('components'), `${name}/package.json`),
    fileStr,
    'utf-8'
  )
}
// 打包组件index
const buildComponentsIndex = async () => {
  await createDir(entryMap.get('components').replace(/([/][^/]+)$/, ""), 'components', outputMap.get('lib'))
}
// 打包组件目录
const buildComponents = async () => {
  const componentsType = fs.readdirSync(entryMap.get('components'))
  .filter(name => fs.lstatSync(path.resolve(entryMap.get('components'), name)).isDirectory())
  .filter(type => type !== 'node_modules')
  const componentsFull = componentsType.map(type => {
    return (fs.readdirSync(entryMap.get('components') + '/' + type)).map(name => type + '/' + name) 
  })
  const componentsPath = componentsFull.flat().map(path => entryMap.get('components') + '/' + path)
  // buildComponents
  for (const path of componentsPath) {
    await createDir(path.replace(/([/][^/]+)$/, ""), path.match(/([^/]+)$/)[1], outputMap.get('components'))
    createPackageJson(path.match(/([^/]+)$/)[1])
  }
}
// 打包utils
const buildUtils = () => {

}

// 全量打包
const buildMes = async () => {
  // Index
  buildComponentsIndex()
  // 组件目录
  buildComponents()
  // utils
  // buildUtils()
  // hooks
  // buildHooks()
}

// clear
delDir(outputMap.get('lib'))
buildMes()

