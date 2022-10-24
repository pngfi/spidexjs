
import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import ts from 'rollup-plugin-typescript2'
import json from "@rollup/plugin-json";
import { terser } from 'rollup-plugin-terser'

// plugins基础配置
const plugins =[
    commonjs(),
    json(),
    ts(
      {
        exclude: 'node_modules/**',
      }
    ),
    terser
]

// 需要导出的模块类型
const output =function(fileName){
  return [
    {
      file: fileName ? `dist/${fileName}/index.js` :pkg.main, // 通用模块
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: fileName ? `dist/${fileName}/index.esm.js` :pkg.module, // es6模块
      format: 'es',
      exports: 'named',
      sourcemap: true,
    }
  ]
}


export default [
  {
    input: 'src/index.ts',
    output: output(),
    plugins:plugins
  }
]
