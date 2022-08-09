<template>
    <section class="hero swiper-buttons">
        <div class="hero__wrapper">
            <swiper
                @swiper="swiper"
                @slideChange="onSlideChange"
                ref="heroSwiper"
                :speed="800"
                :slides-per-view="1"
                :autoplay="{ delay: 2500 }"
                :loop="true"
            >
                <swiper-slide v-for="slide in heroSlides" :key="slide">
                    <div class="hero__bg">
                        <img src="@/images/hero-bg.jpg" alt="" />
                    </div>
                    <div class="hero__content">
                        <div
                            class="hero__content-subtitle txt txt--px20 txt--font700 c-white"
                        >
                            {{ slide.subtitle }}
                        </div>
                        <div
                            class="hero__content-title txt txt--px48 txt--font400 txt--eurostar c-white mt-4"
                        >
                            {{ slide.title }}
                        </div>
                        <div
                            class="hero__content-text txt txt--px20 txt--font300 c-white mt-2"
                        >
                            {{ slide.text }}
                        </div>
                        <div class="hero__content-button mt-4">
                            <vButton
                                type="icon"
                                color="white"
                                icon="iconArrowAlt"
                            />
                        </div>
                    </div>
                </swiper-slide>
                <hero-tools
                    :sliderCount="heroSwiperCount"
                    :sliderCountLength="heroSwiperCountLength"
                />
            </swiper>
        </div>
    </section>
</template>

<script>
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";
import HeroTools from "./HeroTools.vue";

export default {
    components: {
        Swiper,
        SwiperSlide,
        HeroTools,
    },
    data() {
        return {
            heroSwiper: null,
            heroSwiperCount: null,
            heroSwiperCountLength: null,

            heroSlides: [
                {
                    subtitle: "our projects",
                    title: "DİVAN HOTEL",
                    text: "Bursa Divan Hotel has been built environmentally-friendly on a hill by using modular system and modern technological facilities.",
                },
                {
                    subtitle: "our projects",
                    title: "DİVAN HOTEL",
                    text: "Bursa Divan Hotel has been built environmentally-friendly on a hill by using modular system and modern technological facilities.",
                },
                {
                    subtitle: "our projects",
                    title: "DİVAN HOTEL",
                    text: "Bursa Divan Hotel has been built environmentally-friendly on a hill by using modular system and modern technological facilities.",
                },
            ],
        };
    },
    methods: {
        nextEl() {
            this.heroSwiper.slideNext();
        },
        prevEl() {
            this.heroSwiper.slidePrev();
        },
        swiper(e) {
            this.heroSwiper = e;
            // Swiper Init Event
            // ***
            // Slider Count
            setTimeout(() => {
                const realIndex = e.realIndex + 1;
                const slidesLength = e.slides.length - 2;
                if (slidesLength < 10) {
                    this.heroSwiperCountLength = "0" + slidesLength;
                } else {
                    this.heroSwiperCountLength = slidesLength;
                }
                if (realIndex < 10) {
                    this.heroSwiperCount = "0" + realIndex;
                } else {
                    this.heroSwiperCount = realIndex;
                }
            }, 10);
        },
        onSlideChange(e) {
            // Slider Count
            setTimeout(() => {
                const realIndex = e.realIndex + 1;
                const slidesLength = e.slides.length - 2;
                if (slidesLength < 10) {
                    this.heroSwiperCountLength = "0" + slidesLength;
                } else {
                    this.heroSwiperCountLength = slidesLength;
                }
                if (realIndex < 10) {
                    this.heroSwiperCount = "0" + realIndex;
                } else {
                    this.heroSwiperCount = realIndex;
                }
            }, 10);
        },
    },
    mounted() {
        setTimeout(() => {
            this.heroSwiperCount = "01";
        }, 10);
    },
    provide() {
        return {
            onSlideChange: this.onSlideChange,
            nextSlide: this.nextEl,
            prevSlide: this.prevEl,
        };
    },
};
</script>
