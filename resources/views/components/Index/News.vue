<template>
    <div class="section index-news">
        <div class="container container--fluid">
            <div class="row g-4 g-md-5">
                <div class="col-12 col-lg-4" v-for="card in news" :key="card">
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
                            <div class="index-news__card-content__button mt-4">
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
    </div>
</template>

<script>
import vButton from "../v-button.vue";
import newsImage1 from "@/images/news-img-1.jpg";
import newsImage2 from "@/images/news-img-2.jpg";
import newsImage3 from "@/images/news-img-3.jpg";

export default {
    components: { vButton },
    data() {
        return {
            news: [
                {
                    date: "09.04.2021",
                    title: "Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı",
                    image: newsImage1,
                },
                {
                    date: "03.04.2021",
                    title: "Teknotaş’la Yeniden Canlandı",
                    image: newsImage2,
                },
                {
                    date: "27.07.2021",
                    title: "Merinos Kültür Merkezi Zemini ",
                    image: newsImage3,
                },
            ],
        };
    },
};
</script>
