import pkg from './package.json'
import ts from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import json from "@rollup/plugin-json";
import {terser} from 'rollup-plugin-terser';
import babel from "rollup-plugin-babel";
import resolve from '@rollup/plugin-node-resolve';
// import uglify from 'rollup-plugin-uglify'

// plugins基础配置
const plugins = [
  commonjs(),
  json(),
  babel({exclude: "**/node_modules/**", runtimeHelpers: true}),
  ts(
    {
      exclude: 'node_modules/**',
    }
  ),
  terser(),
  resolve(),
]

// 需要导出的模块类型
const output = function (fileName) {
  return [
    {
      file: pkg.main, // 通用模块
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.main,// es6模块
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    }
  ]
}


export default [
  {
    input: 'index.ts',
    output: output(),
    plugins: plugins,
  }
]
