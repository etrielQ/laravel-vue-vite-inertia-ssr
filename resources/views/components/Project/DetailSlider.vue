<template>
    <section class="section about__slider swiper-buttons">
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
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";
import galleryItem1 from "@/images/project-detail-img-1.jpg";
import galleryItem2 from "@/images/project-detail-img-2.jpg";
import galleryItem3 from "@/images/project-detail-img-3.jpg";

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
                { img: galleryItem3 },
                { img: galleryItem1 },
                { img: galleryItem2 },
                { img: galleryItem3 },
            ],
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
