import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  sourceMap: true,
  format: 'es',
  plugins: [
    nodeResolve({ browser: true, jsnext: true, main: true }),  // npmモジュールを`node_modules`から
    commonjs(),  // CommonJSモジュールをES6に変換
    babel(),  // ES5に変換
    uglify()
  ]
};
