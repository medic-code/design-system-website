const esbuild = require('esbuild');
const { globPlugin } = require('esbuild-plugin-glob');

const sharedConfig = {
    loader: {
        '.tsx': 'tsx',
        '.ts':'ts',
    },
    outbase: './src',
    bundle: true,
    minify: true,
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
    target: ['esnext'],
    logLevel: 'debug',
}

esbuild.build({
    ...sharedConfig,
    entryPoints: ['./src/index.ts'],
    outdir: 'dist/cjs',
    format: 'cjs',

}).catch(() => process.exit(1));

esbuild.build({
    ...sharedConfig,
    color: true,
    entryPoints: ["./src/index.ts", "src/components/**/index.ts"],
    splitting: true,
    outdir: "dist/esm",
    sourcemap: true,
    format: "esm",
    plugins: [globPlugin()]
})
.catch(() => process.exit(1));