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
                    <swiper-slide v-for="n in 6" :key="n">
                        <div class="index-references__item">asdas</div>
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
SwiperCore.use({ Autoplay });
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay],
        };
    },
    methods: {},
};
</script>
