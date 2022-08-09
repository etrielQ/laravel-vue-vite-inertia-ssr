<template>
    <div class="section index-references">
        <div class="container container--fluid">
            <div class="index-references__wrapper">
                <swiper
                    :loop="true"
                    :slides-per-view="8"
                    :space-between="20"
                    :modules="modules"
                    :speed="800"
                    :autoplay="{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }"
                >
                    <swiper-slide v-for="image in references" :key="image">
                        <div class="index-references__item">
                            <img :src="image.img" alt="" />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";
import SwiperCore, { Autoplay } from "swiper";

import referenceLogo1 from "@/images/reference-logo-1.png";
import projectSliderImage2 from "@/images/project-slider-img-2.jpg";
SwiperCore.use({ Autoplay });
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay],
            references: [
                { img: referenceLogo1 },
                {
                    img: projectSliderImage2,
                },
                { img: referenceLogo1 },
                {
                    img: projectSliderImage2,
                },
                { img: referenceLogo1 },
                {
                    img: projectSliderImage2,
                },
            ],
        };
    },
    methods: {},
};
</script>
