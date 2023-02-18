const esbuild = require("esbuild");

esbuild.build({
    color: true,
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outdir: "dist",
    sourcemap: true,
    format: "esm",
    logLevel: "debug",
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
})
.catch(() => process.exit(1));