<template>
    <!-- <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head> -->
    <Header />
    <Hero />
    <About />
    <Projects />
    <References />
    <Products />
    <News />
    <Footer />
</template>

<script>
import Header from "@/views/common/Header.vue";
// import Header from ".";
import Hero from "@/views/components/Index/Hero.vue";
import About from "@/views/components/Index/About.vue";
import Projects from "@/views/components/Index/Projects.vue";
import References from "@/views/components/Index/References.vue";
import Products from "@/views/components/Index/Products.vue";
import News from "@/views/components/Index/News.vue";
import Footer from "@/views/common/Footer.vue";

export default {
    components: {
        Header,
        Hero,
        About,
        Projects,
        References,
        Products,
        News,
        Footer,
    },
    data() {
        return {};
    },
    created() {},
};
</script>
