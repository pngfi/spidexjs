import pkg from './package.json'
import ts from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import json from "@rollup/plugin-json";
import {terser} from 'rollup-plugin-terser';
import babel from "rollup-plugin-babel";
import resolve from '@rollup/plugin-node-resolve';

const plugins = [
  json(),
  resolve(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    runtimeHelpers: true,
  }),
  ts(
    {
      exclude: 'node_modules/**',
    }
  ),
  commonjs(),
  terser(),


]


const output = function (fileName) {
  return [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      exports: 'named',
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
