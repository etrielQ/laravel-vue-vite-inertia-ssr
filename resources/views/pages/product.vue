<template>
    <Header />
    <Subheader
        subheaderTitle="Product"
        :subheaderBg="subheaderBg"
        bc="Home"
        bcSecond="Product"
    />
    <main class="detail-page">
        <div class="container container--fluid">
            <div class="row g-4 g-md-5">
                <div
                    class="col-12 col-sm-4 col-lg-3"
                    v-for="item in products"
                    :key="item"
                >
                    <div class="index-products__slider-card">
                        <div class="index-products__slider-card__image">
                            <img :src="item.image" alt="" />
                            <div
                                class="index-products__slider-card__image-preview"
                            >
                                <img :src="item.image" alt="" />
                            </div>
                        </div>
                        <div class="index-products__slider-card__content">
                            <div
                                class="index-products__slider-card__content-title txt txt--px42 txt--font500 txt--poppins c-primary"
                            >
                                {{ item.title }}
                            </div>
                            <div
                                class="index-products__slider-card__content-text txt txt--px20 txt--font400 txt--poppins c-secondary"
                            >
                                {{ item.text }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>

<script>
import Header from "@/views/common/Header.vue";
import Subheader from "@/views/common/Subheader.vue";
import Footer from "@/views/common/Footer.vue";

// Images
import subheaderBgImg from "@/images/hero-bg.jpg";
import productOnyxImg from "@/images/products-onyx-img.jpg";
import prodcutMarbleImg from "@/images/products-marble-img.jpg";
import productGraniteImg from "@/images/products-granite-img.jpg";
import productTravertineImg from "@/images/products-travertine-img.jpg";
import productSemiPreciousImg from "@/images/products-semi-precious-img.jpg";

export default {
    components: {
        Header,
        Subheader,
        Footer,
    },
    data() {
        return {
            subheaderBg: subheaderBgImg,
            products: [
                {
                    image: productOnyxImg,
                    title: "ONYX",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                },
                {
                    image: prodcutMarbleImg,
                    title: "MARBLE",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                },
                {
                    image: productSemiPreciousImg,
                    title: "SEMI-PRECIOUS ",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                },
                {
                    image: productGraniteImg,
                    title: "GRANITE",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                },
                {
                    image: productTravertineImg,
                    title: "TRAVERTINE",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                },
                {
                    image: productOnyxImg,
                    title: "ONYX",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                },
                {
                    image: prodcutMarbleImg,
                    title: "MARBLE",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                },
                {
                    image: productSemiPreciousImg,
                    title: "SEMI-PRECIOUS ",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                },
            ],
        };
    },
};
</script>
