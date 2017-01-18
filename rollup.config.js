import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  format: 'es',
  plugins: [
    nodeResolve({ jsnext: true }),  // npmモジュールを`node_modules`から
    commonjs(),  // CommonJSモジュールをES6に変換
    babel()  // ES5に変換
  ]
};

