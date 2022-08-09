<template>
    <header class="header">
        <MainMenu />
        <div class="container container--fluid">
            <div class="header__wrapper">
                <div
                    class="header__language txt txt--px22 txt--font700"
                    :class="headerDark ? 'c-primary' : 'c-white'"
                >
                    EN
                </div>
                <div class="header__logo">
                    <Link :href="route('homepage')">
                        <img
                            v-if="!headerDark"
                            src="@/images/teknotas-logo.svg"
                            alt=""
                            class="header--light"
                        />
                        <img
                            v-if="headerDark"
                            src="@/images/teknotas-logo-dark.svg"
                            alt=""
                            class="header--dark"
                        />
                    </Link>
                </div>
                <div class="header__menu">
                    <div class="header__menu__button" @click="mainMenuFn">
                        <div
                            class="line"
                            :class="headerDark ? 'line--dark' : 'line--light'"
                        ></div>
                        <div
                            class="line"
                            :class="headerDark ? 'line--dark' : 'line--light'"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import MainMenu from "./MainMenu.vue";
export default {
    components: { MainMenu },
    data() {
        return {
            headerDark: false,
        };
    },
    methods: {
        handleScroll() {
            const isServer = typeof window === "undefined";
            const header = document.querySelector(".header");
            if (header) {
                if (window.scrollY >= 100) {
                    header.classList.add("header--sticky");
                    this.headerDark = true;
                } else {
                    header.classList.remove("header--sticky");
                    this.headerDark = false;
                }
            }
        },
        mainMenuFn() {
            const mainMenu = document.querySelector(".main-menu");
            const mainMenuBtn = document.querySelector(".main-menu__button");
            const body = document.querySelector("body");
            if (mainMenu.classList.contains("opened")) {
                this.headerDark = false;
            } else {
                this.headerDark = true;
            }
            mainMenu.classList.toggle("opened");
        },
    },
    created() {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", this.handleScroll);
        }
    },
    destroyed() {
        if (typeof window !== "undefined") {
            window.removeEventListener("scroll", this.handleScroll);
        }
    },
};
</script>
