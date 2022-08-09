<template>
    <div class="container container--fluid">
        <div class="section__top">
            <div class="section__top__title c-secondary-light">
                {{ projectDetail.title }}
            </div>
            <div
                v-if="projectDetail.text"
                class="section__top__text c-secondary-light"
            >
                {{ projectDetail.text }}
            </div>
        </div>
    </div>
    <div class="gallery__wrapper about__slider swiper-buttons">
        <div class="container container--fluid">
            <swiper
                @swiper="swiper"
                :slides-per-view="2"
                :speed="800"
                :loop="true"
                :space-between="40"
            >
                <swiper-slide v-for="item in slides" :key="item">
                    <a
                        href="#0"
                        class="about__slider-item"
                        data-fancybox="gallery"
                    >
                        <img :src="item.img" alt="" />
                    </a>
                </swiper-slide>
            </swiper>
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

// Images
import galleryItem1 from "@/images/project-slider-img-1.jpg";
import galleryItem2 from "@/images/project-slider-img-2.jpg";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            slides: [
                { img: galleryItem1 },
                { img: galleryItem2 },
                { img: galleryItem1 },
                { img: galleryItem2 },
            ],
            projectDetail: {
                title: "Photo Gallery",
                text: "",
            },
        };
    },
    methods: {
        swiper(swiper) {
            this.projectSwiper = swiper;
        },
        nextEl() {
            this.projectSwiper.slideNext();
        },
        prevEl() {
            this.projectSwiper.slidePrev();
        },
    },
};
</script>
