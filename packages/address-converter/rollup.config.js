import pkg from './package.json'
import ts from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import json from "@rollup/plugin-json";
import {terser} from 'rollup-plugin-terser';
import babel from "rollup-plugin-babel";
import nodeResolve from 'rollup-plugin-node-resolve';

const plugins = [

  nodeResolve({ preferBuiltins: false }),
  commonjs(),
  babel({exclude: "**/node_modules/**", runtimeHelpers: true}),
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
