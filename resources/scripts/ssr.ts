import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { resolvePageComponent } from "vite-plugin-laravel/inertia";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import createServer from "@inertiajs/server";
import { ZiggyVue } from "../../node_modules/ziggy-js/src/js/vue.js";
import { Ziggy } from "../js/ziggy.js";
import vButton from "../views/components/v-button.vue";
import Icon from "../views/components/Icon.vue";

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) =>
            resolvePageComponent(
                name,
                import.meta.globEager("../views/pages/**/*.vue")
            ),
        setup: ({ app, props, plugin: inertia }) => {
            return createSSRApp({ render: () => h(app, props) })
                .use(ZiggyVue, Ziggy)
                .component("Link", Link)
                .component("Head", Head)
                .component("vButton", vButton)
                .component("Icon", Icon)
                .use(inertia);
        },
    })
);
