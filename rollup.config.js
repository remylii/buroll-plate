import vue from 'rollup-plugin-vue2';
import css from 'rollup-plugin-css-only';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import buble from 'rollup-plugin-buble';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  dest: 'public/bundle.js',
  sourceMap: true,
  format: 'es',
  plugins: [
    css(),
    nodeResolve({ browser: true, jsnext: true, main: true }),  // npmモジュールを`node_modules`から
    commonjs(),  // CommonJSモジュールをES6に変換
    vue(),
    babel()  // ES5に変換
  ]
};
