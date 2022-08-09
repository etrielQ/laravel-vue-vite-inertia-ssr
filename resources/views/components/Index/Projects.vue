<template>
    <section class="section index-projects">
        <div class="container container--fluid">
            <div class="index-projects__wrapper">
                <div class="section__top">
                    <div class="section__top__title c-secondary-light">
                        {{ projects.title }}
                    </div>
                    <div class="section__top__text c-secondary-light">
                        {{ projects.text }}
                    </div>
                </div>
            </div>
        </div>
        <div class="index-projects__slider swiper-buttons">
            <div class="container container--fluid">
                <swiper
                    @swiper="swiper"
                    :slides-per-view="3"
                    :speed="800"
                    :loop="true"
                    :space-between="40"
                    :centered-slides="true"
                >
                    <swiper-slide v-for="slide in projects.slides" :key="slide">
                        <a href="#0" class="index-projects__slider-card">
                            <div class="index-projects__slider-card__bg">
                                <img :src="slide.img" alt="" />
                            </div>
                            <div class="index-projects__slider-card__content">
                                <div
                                    class="index-projects__slider-card__title txt txt--px28 txt--font500 txt--poppins c-white"
                                >
                                    {{ slide.title }}
                                </div>
                                <div
                                    class="index-projects__slider-card__button"
                                >
                                    <vButton
                                        color="white"
                                        type="icon"
                                        icon="iconArrowAlt"
                                    />
                                </div>
                            </div>
                        </a>
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
        <div class="index-projects__button">
            <vButton
                icon="iconArrowAlt"
                text="View All"
                color="secondaryLight"
                center="true"
            />
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";
import projectSliderImg1 from "@/images/project-slider-img-1.jpg";
import projectSliderImg2 from "@/images/project-slider-img-2.jpg";
import projectSliderImg3 from "@/images/project-slider-img-3.jpg";
export default {
    data() {
        return {
            projectSwiper: null,
            projects: {
                title: "Projects",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim risus. Purus ac netus aliquet massa, convallis ultricies vulputate ultrices. Gravida et gravida scelerisque eu.",
                slides: [
                    {
                        title: "Rixos Elysium Suits",
                        img: projectSliderImg1,
                    },
                    {
                        title: "Rixos Elysium Suits",
                        img: projectSliderImg2,
                    },
                    {
                        title: "Rixos Elysium Suits",
                        img: projectSliderImg3,
                    },
                ],
            },
        };
    },
    components: {
        Swiper,
        SwiperSlide,
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
