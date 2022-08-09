<template>
    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>
    <Header />
    <Subheader
        subheaderTitle="Blog"
        :subheaderBg="subheaderBg"
        bc="Home"
        bcSecond="Blog"
    />
    <main class="detail-page">
        <section class="section section--pt0">
            <div class="container container--fluid">
                <div class="row g-4 g-md-5">
                    <div
                        class="col-12 col-sm-6 col-lg-4"
                        v-for="card in news"
                        :key="card"
                    >
                        <div class="index-news__card">
                            <div class="index-news__card-image">
                                <img :src="card.image" alt="" />
                            </div>
                            <div class="index-news__card-content">
                                <div
                                    class="index-news__card-content__date txt txt--px14 txt--font500 txt--poppins c-primary"
                                >
                                    {{ card.date }}
                                </div>
                                <div
                                    class="index-news__card-content__title txt txt--px24 txt--font400 txt--poppins c-primary mt-4"
                                >
                                    {{ card.title }}
                                </div>
                                <div
                                    class="index-news__card-content__button mt-4"
                                >
                                    <vButton
                                        icon="iconArrowAlt"
                                        text="View Detail"
                                        color="secondary"
                                    />
                                </div>
                            </div>
                        </div>
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
import newsImage1 from "@/images/news-img-1.jpg";
import newsImage2 from "@/images/news-img-2.jpg";
import newsImage3 from "@/images/news-img-3.jpg";

export default {
    components: {
        Header,
        Subheader,
        Footer,
    },
    data() {
        return {
            subheaderBg: SubheaderBgImg,
            news: [
                {
                    image: newsImage1,
                    date: "07.17.2022",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                },
                {
                    image: newsImage2,
                    date: "07.17.2022",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                },
                {
                    image: newsImage3,
                    date: "07.17.2022",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                },
                {
                    image: newsImage1,
                    date: "07.17.2022",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                },
                {
                    image: newsImage2,
                    date: "07.17.2022",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                },
                {
                    image: newsImage3,
                    date: "07.17.2022",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                },
                {
                    image: newsImage1,
                    date: "07.17.2022",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                },
                {
                    image: newsImage2,
                    date: "07.17.2022",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                },
                {
                    image: newsImage3,
                    date: "07.17.2022",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                },
            ],
        };
    },
};
</script>
