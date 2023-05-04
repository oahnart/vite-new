import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import process from "process";
import svgr from "vite-plugin-svgr";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import tsconfigPaths from "vite-tsconfig-paths";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     legacy({
//       targets: ["defaults", "not IE 11"],
//     }),
//   ],
// });

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    // resolve: {
    //   alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    // },
    plugins: [
      react(),
      svgr(),
      viteCommonjs(),
      tsconfigPaths(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
  };
});
