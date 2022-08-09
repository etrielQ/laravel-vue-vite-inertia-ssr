<template>
    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>
    <Header />
    <Subheader
        subheaderTitle="Corporate"
        :subheaderBg="subheaderBg"
        bc="Home"
        bcSecond="Products"
        bcThird="Granite"
    />
    <main class="detail-page">
        <div class="container container--fluid">
            <div class="product-detail row g-4 g-md-5">
                <div class="col-lg-8">
                    <CkEditor :text="ckContent" />
                </div>
                <div class="col-lg-4 product-detail__img">
                    <img src="@/images/granite-img.png" alt="" />
                </div>
            </div>
        </div>
        <GallerySlider sectionTitle="Photo Gallery" />
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
import SubheaderBgImg from "@/images/subheader-granit.jpg";

export default {
    components: {
        Header,
        Subheader,
        Footer,
        CkEditor,
        GallerySlider,
    },
    data() {
        return {
            subheaderBg: SubheaderBgImg,
            ckContent:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra augue non nunc, dolor, massa. Diam feugiat vitae blandit eget sagittis gravida. A, eu, feugiat arcu, donec vitae cursus lobortis. Nisl pulvinar justo, lacus, eget tristique ultricies sed. At etiam mi phasellus at quam sit. Scelerisque tortor ut at nunc. Gravida sed tellus enim sem fermentum at placerat. Vitae sit pulvinar amet molestie vestibulum. Eget id massa nunc, feugiat sit. Pretium ac placerat aliquam eu libero lorem turpis tellus. Ac hac ullamcorper tincidunt consectetur bibendum. Nulla vitae risus malesuada tristique aenean dolor at. Netus elit risus vitae ipsum facilisis sed ut risus. Dui faucibus nisl, nisi, maecenas eu. Vitae interdum imperdiet rutrum euismod mi aliquet molestie est amet. Feugiat dui, et ut quam. Tincidunt ornare et in in eu. Cursus sit ullamcorper condimentum nisi egestas. Ullamcorper at amet libero urna neque. Commodo sapien maecenas mattis mattis interdum eu consequat vitae. Sapien sed faucibus enim integer convallis nulla auctor ",
        };
    },
};
</script>
