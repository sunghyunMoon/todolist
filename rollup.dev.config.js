import rollupCommonConfig from "./rollup.common.config";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const config = {...rollupCommonConfig};

config.watch = {
    inclue: 'src/**'
};

config.plugins = [
    ...config.plugins,
    serve({
        host: 'localhost',
        port: 8080,
        open: true,
        contentBase: 'docs',
    }),
    livereload('docs'),
]
export default config;