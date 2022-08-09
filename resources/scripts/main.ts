import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { resolvePageComponent } from "vite-plugin-laravel/inertia";
import { ZiggyVue } from "ziggy-js/src/js/vue.js";
import { Ziggy } from "../js/ziggy.js";
import vButton from "../views/components/v-button.vue";
import Icon from "../views/components/Icon.vue";
import "../sass/app.scss";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(name, import.meta.glob("../views/pages/**/*.vue")),

    setup({ el, app, props, plugin }) {
        createApp({
            render: () => h(app, props),
        })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component("Link", Link)
            .component("Head", Head)
            .component("vButton", vButton)
            .component("Icon", Icon)
            .mount(el);
    },
});

// .mixin({ methods: { route } })
