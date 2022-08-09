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
        <Numbers />
        <Slider />
        <div class="container container--fluid">
            <CkEditor :text="ckContent2" />
        </div>
        <Content
            contentTitle="EXPORT ALL OVER THE WORLD"
            :contentText="ckContent3"
        />
    </main>
    <Footer />
</template>

<script>
import Header from "@/views/common/Header.vue";
import Subheader from "@/views/common/Subheader.vue";
import CkEditor from "@/views/components/CkEditor.vue";
import Numbers from "@/views/components/About/Numbers.vue";
import Slider from "@/views/components/About/Slider.vue";
import Content from "@/views/components/About/Content.vue";
import Footer from "@/views/common/Footer.vue";
import SubheaderBgImg from "@/images/hero-bg.jpg";
export default {
    components: {
        Header,
        Subheader,
        CkEditor,
        Numbers,
        Slider,
        Content,
        Footer,
    },
    data() {
        return {
            ckContent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue penatibus ut nascetur lectus sed egestas nunc aenean. Facilisis dolor, tortor amet et, lacus, risus. Sollicitudin vitae non gravida pulvinar. Duis non mauris dolor ornare pretium ultrices placerat sit. Consectetur elit sagittis sed velit. Dui at ipsum nam tortor amet eget elementum quam sed. Praesent tincidunt tortor eu ut vitae. Eget diam dui dignissim quam eget egestas viverra vitae. Ultrices lobortis sit laoreet pellentesque suscipit dignissim neque, vulputate augue. Molestie ut dictumst felis, sed posuere. Felis eget eleifend est arcu, venenatis quisque velit tempor. Erat cursus maecenas eget risus dictumst. Eget erat curabitur ac metus ultrices lacus quisque. Ullamcorper tellus ipsum velit ultricies vitae eu turpis tellus. Tincidunt massa faucibus at mattis nibh faucibus pulvinar. Ullamcorper eu orci, placerat at feugiat bibendum. Lectus neque nunc platea risus, cursus. Neque, dignissim augue nam at varius venenatis dolor. Urna ut tincidunt lobortis suscipit integer turpis ut nisl cursus.",
            ckContent2:
                "Our company is established to serve construction market for manufacturing and assembling natural stones which has become indispendable in all modern and classical buildings with our experienced architect, engineer and expert staff.From the beginning of its inception, the company enlarged itself with latest technology investments. Our principle has become timely delivery with best quality in the passing years.During its development, with computer - aided design capacity, our company developed its reference list by finishing many domestic and overseas projects with praise.If you have an unsolved design with natural stone, meeting us will solve your problem. Since combining with machine and hand labor, WE GIVE LIFE TO STONE…",
            ckContent3:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue penatibus ut nascetur lectus sed egestas nunc aenean. Facilisis dolor, tortor amet et, lacus, risus. Sollicitudin vitae non gravida pulvinar. Duis non mauris dolor ornare pretium ultrices placerat sit. Consectetur elit sagittis sed velit. Dui at ipsum nam tortor amet eget elementum quam sed. Praesent tincidunt tortor eu ut vitae. Eget diam dui dignissim quam eget egestas viverra vitae.",
            subheaderBg: SubheaderBgImg,
        };
    },
};
</script>
