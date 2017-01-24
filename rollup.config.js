import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
// import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  format: 'es',
  sourceMap: 'inline',
  plugins: [
    nodeResolve({ jsnext: true }),  // npmモジュールを`node_modules`から
    commonjs(),  // CommonJSモジュールをES6に変換
    buble({
      target: {
        chrome: 49,
        node: 4,
        firefox: 45,
        safari: 9,
        edge: 12,
        ie: 11
      }
    })
    // babel({ exclude: 'node_modules/**' })  // ES5に変換
  ]
};
