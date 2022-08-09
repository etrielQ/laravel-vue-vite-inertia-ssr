<template>
    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>
    <Header />
    <Subheader
        subheaderTitle="Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı"
        :subheaderBg="subheaderBg"
        bc="Home"
        bcSecond="Blog"
        bcThird="Merinos Kültür Merkezi Zemini Teknotaş’la Yeniden Canlandı"
    />
    <main class="detail-page">
        <section class="section section--pt0">
            <div class="container container--fluid">
                <CkEditor :text="ckContent" />
            </div>
        </section>
        <section class="section">
            <GallerySlider />
            <div class="container container--fluid">
                <div class="blog-detail__share">
                    <div class="blog-detail__share-social">
                        <div class="blog-detail__share-social__title me-3">
                            Share Now:
                        </div>
                        <div class="blog-detail__share-social__icons">
                            <a href="#0">
                                <Icon name="iconFacebook" />
                            </a>
                            <a href="#0">
                                <Icon name="iconInstagram" />
                            </a>
                            <a href="#0">
                                <Icon name="iconLinkedin" />
                            </a>
                            <a href="#0">
                                <Icon name="iconTwitter" />
                            </a>
                            <a href="#0">
                                <Icon name="iconWhatsapp" />
                            </a>
                        </div>
                    </div>
                    <div
                        class="blog-detail__share-date txt txt--px24 txt--font400"
                    >
                        16/03/2014
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
import CkEditor from "../components/CkEditor.vue";
import GallerySlider from "../components/Product/GallerySlider.vue";

// Images
import SubheaderBgImg from "@/images/hero-bg.jpg";
import Icon from "../components/Icon.vue";

export default {
    components: {
        Header,
        Subheader,
        Footer,
        CkEditor,
        GallerySlider,
        Icon,
    },
    data() {
        return {
            subheaderBg: SubheaderBgImg,
            ckContent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue penatibus ut nascetur lectus sed egestas nunc aenean. Facilisis dolor, tortor amet et, lacus, risus. Sollicitudin vitae non gravida pulvinar. Duis non mauris dolor ornare pretium ultrices placerat sit. Consectetur elit sagittis sed velit. Dui at ipsum nam tortor amet eget elementum quam sed. Praesent tincidunt tortor eu ut vitae. Eget diam dui dignissim quam eget egestas viverra vitae. Ultrices lobortis sit laoreet pellentesque suscipit dignissim neque, vulputate augue. Molestie ut dictumst felis, sed posuere.Felis eget eleifend est arcu, venenatis quisque velit tempor. Erat cursus maecenas eget risus dictumst. Eget erat curabitur ac metus ultrices lacus quisque. Ullamcorper tellus ipsum velit ultricies vitae eu turpis tellus. Tincidunt massa faucibus at mattis nibh faucibus pulvinar. Ullamcorper eu orci, placerat at feugiat bibendum. Lectus neque nunc platea risus, cursus. Neque, dignissim augue nam at varius venenatis dolor. Urna ut tincidunt lobortis suscipit integer turpis ut nisl cursus.",
        };
    },
};
</script>
