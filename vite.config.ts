import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import laravel from "vite-plugin-laravel";
import vue from "@vitejs/plugin-vue";
import inertia from "./resources/scripts/vite/inertia-layout";
import path from "path";
import { ZiggyVue } from "ziggy-vue";
import route from "./resources/js/ziggy.js";

export default defineConfig({
    plugins: [inertia(), vue(), laravel({})],
    resolve: {
        alias: {
            "@": path.resolve("./resources"),
            ziggy: "/vendor/tightenco/ziggy/src/js",
            "ziggy-vue": "/vendor/tightenco/ziggy/src/js/vue",
        },
    },
    ssr: {
        noExternal: ["@inertiajs/server"],
    },
    build: {
        emptyOutDir: false,
    },
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: ['@import "resources/sass/app.scss"', ""],
            },
        },
    },
});
