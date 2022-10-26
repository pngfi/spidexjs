import pkg from './package.json'
import ts from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import json from "@rollup/plugin-json";
import {terser} from 'rollup-plugin-terser';
import babel from "rollup-plugin-babel";
import nodeResolve from 'rollup-plugin-node-resolve';
// import uglify from 'rollup-plugin-uglify'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
const isProd = process.env.NODE_ENV === 'production';

const plugins = [
  peerDepsExternal({ includeDependencies: !isProd }),
  nodeResolve({ preferBuiltins: false }),
  commonjs(),
  babel({
    exclude: "**/node_modules/**",
    runtimeHelpers: true,
  }),
  ts(
    {
      exclude: 'node_modules/**',
    }
  ),
  terser(),
  json(),

]


const output = function (fileName) {
  return [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
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
