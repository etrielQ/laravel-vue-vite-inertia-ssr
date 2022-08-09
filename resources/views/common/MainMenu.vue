<template>
    <div class="main-menu">
        <div class="main-menu__layers">
            <span class="main-menu__line"></span>
            <span class="main-menu__line"></span>
            <span class="main-menu__line"></span>
            <span class="main-menu__line"></span>
        </div>
        <div class="container">
            <div class="main-menu__wrapper row">
                <div class="main-menu__nav col-lg-7">
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('homepage')">Homepage</Link>
                    </div>
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('about')">About</Link>
                    </div>
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('production')">Production</Link>
                    </div>
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('product')">Products</Link>
                    </div>
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('product-detail')"
                            >Product Detail</Link
                        >
                    </div>
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('projects')">Projects</Link>
                    </div>
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('project-detail')"
                            >Project Detail</Link
                        >
                    </div>
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('blog')">Blog</Link>
                    </div>
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('blog-detail')">Blog Detail</Link>
                    </div>
                    <div
                        class="main-menu__nav-item txt txt--px60 txt--font400 txt--poppins c-primary"
                    >
                        <Link :href="route('contact')">Contact</Link>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="main-menu__project">
                        <div
                            class="main-menu__project-title txt txt--px48 txt--font400 txt--poppins c-primary"
                        >
                            New Project?
                        </div>
                        <div class="main-menu__project-button">
                            <vButton
                                icon="iconArrowAlt"
                                text="get a quote"
                                color="primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<!-- <style lang="scss">
.main-menu {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 4;
    opacity: 0;
    transition: var(--transition);
    pointer-events: none;
    visibility: hidden;

    &__layers {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    &__line {
        width: 25%;
        height: 100%;
        transition: var(--transition);
        overflow: hidden;
        position: relative;
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: #efefef;
            transform: translateX(-100%);
            transition: var(--transition-slow);
        }
    }
    &.opened {
        opacity: 1;
        pointer-events: all;
        visibility: visible;

        .main-menu {
            &__line {
                &:after {
                    transform: translateX(0);
                }
            }
        }
        .header {
            &__language {
                color: var(--c-primary) !important;
            }
            &__menu {
                &__button {
                    & > .line {
                        background-color: var(--c-primary);
                    }
                }
            }
        }
    }
    &__wrapper {
        height: 100vh;
        align-items: center;
    }
    &__nav {
        &-item {
            margin: 1rem 0;
        }
    }
}
</style> -->
