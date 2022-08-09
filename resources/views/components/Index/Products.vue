<template>
    <div class="section index-products">
        <div class="container container--fluid">
            <div class="section__top">
                <div class="section__top__title">
                    {{ products.title }}
                </div>
                <div class="section__top__text">
                    {{ products.text }}
                </div>
            </div>
        </div>
        <div class="index-products__slider swiper-buttons">
            <div class="container container--fluid">
                <swiper
                    @swiper="swiper"
                    :slides-per-view="4"
                    :space-between="40"
                    :loop="true"
                    :speed="800"
                >
                    <swiper-slide v-for="slide in products.slides" :key="slide">
                        <div class="index-products__slider-card">
                            <div class="index-products__slider-card__image">
                                <img :src="slide.image" alt="" />
                                <div
                                    class="index-products__slider-card__image-preview"
                                >
                                    <img :src="slide.image" alt="" />
                                </div>
                            </div>
                            <div class="index-products__slider-card__content">
                                <div
                                    class="index-products__slider-card__content-title txt txt--px42 txt--font500 txt--poppins c-primary"
                                >
                                    {{ slide.title }}
                                </div>
                                <div
                                    class="index-products__slider-card__content-text txt txt--px20 txt--font400 txt--poppins c-secondary"
                                >
                                    {{ slide.text }}
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="swiper-buttons-prev" @click="prevEl">
                <icon name="iconArrow" />
            </div>
            <div class="swiper-buttons-next" @click="nextEl">
                <icon name="iconArrow" />
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";

import productOnyxImg from "@/images/products-onyx-img.jpg";
import prodcutMarbleImg from "@/images/products-marble-img.jpg";
import productGraniteImg from "@/images/products-granite-img.jpg";
import productTravertineImg from "@/images/products-travertine-img.jpg";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            productSwiper: null,
            products: {
                title: "PRODUCTS",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim risus. Purus ac netus aliquet massa, convallis ultricies vulputate ultrices. Gravida et gravida scelerisque eu.",
                slides: [
                    {
                        title: "Onyx",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                        image: productOnyxImg,
                    },
                    {
                        title: "Marble",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                        image: prodcutMarbleImg,
                    },
                    {
                        title: "Granite",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                        image: productGraniteImg,
                    },
                    {
                        title: "Travertine",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim.",
                        image: productTravertineImg,
                    },
                ],
            },
        };
    },
    methods: {
        swiper(swiper) {
            this.productSwiper = swiper;
        },
        nextEl() {
            this.productSwiper.slideNext();
        },
        prevEl() {
            this.productSwiper.slidePrev();
        },
    },
};
</script>
