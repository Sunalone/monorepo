import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VitePluginDTS from "vite-plugin-dts";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
    build: {
        emptyOutDir: false,
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            formats: ["es"],
            name: "UiLib",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    Vue: "vue",
                },
            },
        },
    },
    plugins: [
        vue(),
        VitePluginDTS(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
});
