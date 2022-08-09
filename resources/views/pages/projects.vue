<template>
    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>
    <Header />
    <Subheader
        subheaderTitle="Projects"
        :subheaderBg="subheaderBg"
        bc="Home"
        bcSecond="Projects"
    />
    <main class="detail-page">
        <section class="section section--pt0">
            <div class="container container--fluid">
                <div class="row g-4 g-md-5">
                    <div
                        class="col-12 col-sm-6 col-lg-4"
                        v-for="item in projects"
                        :key="item"
                    >
                        <a href="#0" class="index-projects__slider-card">
                            <div class="index-projects__slider-card__bg">
                                <img :src="item.img" alt="" />
                            </div>
                            <div class="index-projects__slider-card__content">
                                <div
                                    class="index-projects__slider-card__title txt txt--px28 txt--font500 txt--poppins c-white"
                                >
                                    {{ item.title }}
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
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<script>
import Header from "@/views/common/Header.vue";
import Subheader from "@/views/common/Subheader.vue";
import Footer from "@/views/common/Footer.vue";

// Images
import SubheaderBgImg from "@/images/hero-bg.jpg";
import projectSliderImg1 from "@/images/project-slider-img-1.jpg";
import projectSliderImg2 from "@/images/project-slider-img-2.jpg";
import projectSliderImg3 from "@/images/project-slider-img-3.jpg";

export default {
    components: {
        Header,
        Subheader,
        Footer,
    },
    data() {
        return {
            subheaderBg: SubheaderBgImg,
            projects: [
                {
                    img: projectSliderImg1,
                    title: "Rixos Elysium Suits",
                },
                {
                    img: projectSliderImg2,
                    title: "Rixos Elysium Suits",
                },
                {
                    img: projectSliderImg3,
                    title: "Rixos Elysium Suits",
                },
                {
                    img: projectSliderImg1,
                    title: "Rixos Elysium Suits",
                },
                {
                    img: projectSliderImg2,
                    title: "Rixos Elysium Suits",
                },
                {
                    img: projectSliderImg3,
                    title: "Rixos Elysium Suits",
                },
                {
                    img: projectSliderImg1,
                    title: "Rixos Elysium Suits",
                },
                {
                    img: projectSliderImg2,
                    title: "Rixos Elysium Suits",
                },
                {
                    img: projectSliderImg3,
                    title: "Rixos Elysium Suits",
                },
            ],
        };
    },
};
</script>
