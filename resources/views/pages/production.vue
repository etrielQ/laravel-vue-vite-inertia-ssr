<template>
    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>
    <Header />
    <Subheader
        subheaderTitle="Corporate"
        :subheaderBg="subheaderBg"
        bc="Home"
        bcSecond="Corporate"
    />
    <main class="detail-page">
        <div class="container container--fluid">
            <CkEditor :text="ckContent" />
        </div>
        <Slider />
        <HowItWorks
            contentTitle="EXPORT ALL OVER THE WORLD"
            :contentText="ckContent2"
        />
    </main>
    <Footer />
</template>
<script>
import Header from "@/views/common/Header.vue";
import Subheader from "@/views/common/Subheader.vue";
import Footer from "@/views/common/Footer.vue";
import CkEditor from "@/views/components/CkEditor.vue";
import Slider from "@/views/components/Product/Slider.vue";
import HowItWorks from "@/views/components/Product/HowItWorks.vue";
import SubheaderBgImg from "@/images/hero-bg.jpg";

export default {
    components: {
        Header,
        Subheader,
        Footer,
        CkEditor,
        Slider,
        HowItWorks,
    },
    data() {
        return {
            contentTitle: "How it Works",
            ckContent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue penatibus ut nascetur lectus sed egestas nunc aenean. Facilisis dolor, tortor amet et, lacus, risus. Sollicitudin vitae non gravida pulvinar. Duis non mauris dolor ornare pretium ultrices placerat sit. Consectetur elit sagittis sed velit. Dui at ipsum nam tortor amet eget elementum quam sed. Praesent tincidunt tortor eu ut vitae. Eget diam dui dignissim quam eget egestas viverra vitae. Ultrices lobortis sit laoreet pellentesque suscipit dignissim neque, vulputate augue. Molestie ut dictumst felis, sed posuere. Felis eget eleifend est arcu, venenatis quisque velit tempor. Erat cursus maecenas eget risus dictumst. Eget erat curabitur ac metus ultrices lacus quisque. Ullamcorper tellus ipsum velit ultricies vitae eu turpis tellus. Tincidunt massa faucibus at mattis nibh faucibus pulvinar. Ullamcorper eu orci, placerat at feugiat bibendum. Lectus neque nunc platea risus, cursus. Neque, dignissim augue nam at varius venenatis dolor. Urna ut tincidunt lobortis suscipit integer turpis ut nisl cursus.",
            ckContent2:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue penatibus ut nascetur lectus sed egestas nunc aenean. Facilisis dolor, tortor amet et, lacus, risus. Sollicitudin vitae non gravida pulvinar. Duis non mauris dolor ornare pretium ultrices placerat sit. Consectetur elit sagittis sed velit. Dui at ipsum nam tortor amet eget elementum quam sed. Praesent tincidunt tortor eu ut vitae. Eget diam dui dignissim quam eget egestas viverra vitae. Ultrices lobortis sit ",
            subheaderBg: SubheaderBgImg,
        };
    },
};
</script>
