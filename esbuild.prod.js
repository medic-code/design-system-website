import esbuild from 'esbuild';
import { globPlugin } from 'esbuild-plugin-glob';

esbuild.build({
    color: true,
    entryPoints: ["./src/index.ts", "src/components/**/index.ts"],
    bundle: true,
    minify: true,
    splitting: true,
    outdir: "dist",
    sourcemap: true,
    format: "esm",
    logLevel: "debug",
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
    plugins: [globPlugin()]
})
.catch(() => process.exit(1));