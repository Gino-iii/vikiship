import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.es.js',
    format: 'es',
    sourcemap: true
  },
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      tsconfig: 'tsconfig.build.json'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    excludeDependenciesFromBundle()
  ]
} 
