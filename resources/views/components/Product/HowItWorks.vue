<template>
    <section class="section how-it-works">
        <div class="container container--fluid">
            <div class="section__top">
                <div class="section__top__title">
                    {{ contentTitle }}
                </div>
            </div>
            <CkEditor :text="contentText" />
            <div class="how-it-works__content">
                <div
                    class="how-it-works__item"
                    v-for="item in cards"
                    :key="item"
                    :class="{ active: itemActive }"
                    ref="hiwItem"
                >
                    <div class="how-it-works__item-image">
                        <img :src="item.img" alt="" />
                    </div>
                    <div
                        class="how-it-works__item-content__title-alt txt txt--px28 txt--font300 c-white"
                    >
                        {{ item.title }}
                    </div>
                    <div class="how-it-works__item-content">
                        <div
                            class="how-it-works__item-content__title txt txt--px28 txt--font300 c-white"
                        >
                            {{ item.title }}
                        </div>
                        <div
                            class="how-it-works__item-content__text txt txt--px20 txt--font400 c-white"
                        >
                            {{ item.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CkEditor from "../CkEditor.vue";
import factoryImage1 from "@/images/factory-img-1.jpg";
import factoryImage2 from "@/images/factory-img-2.jpg";
import newsImg1 from "@/images/news-img-1.jpg";
import newsImg2 from "@/images/news-img-2.jpg";
import newsImg3 from "@/images/news-img-3.jpg";
import projectSliderImage1 from "@/images/project-slider-img-1.jpg";

export default {
    props: ["contentTitle", "contentText"],
    components: { CkEditor },
    data() {
        return {
            itemActive: false,
            cards: [
                {
                    img: factoryImage1,
                    title: "ARRIVAL OF MATERIAL",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Augue penatibus ut nascetur lectus sed .",
                },
                {
                    img: factoryImage2,
                    title: "PROCESSING OF MATERIAL",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Augue penatibus ut nascetur lectus sed .",
                },
                {
                    img: newsImg1,
                    title: "ARRIVAL OF MATERIAL",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Augue penatibus ut nascetur lectus sed .",
                },
                {
                    img: newsImg2,
                    title: "PROCESSING OF MATERIAL",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Augue penatibus ut nascetur lectus sed .",
                },
                {
                    img: newsImg3,
                    title: "ARRIVAL OF MATERIAL",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Augue penatibus ut nascetur lectus sed .",
                },
                {
                    img: projectSliderImage1,
                    title: "PROCESSING OF MATERIAL",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Augue penatibus ut nascetur lectus sed .",
                },
            ],
        };
    },
    methods: {
        asd(e) {
            console.log(e);
        },
    },
    mounted() {},
};
</script>
