<template>
    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>
    <Header />
    <Subheader
        subheaderTitle="CONTACT"
        :subheaderBg="'/images/hero-bg.jpg'"
        bc="Home"
        bcSecond="Contact"
    />
    <main class="detail-page">
        <section class="section section--pt0">
            <div class="container container--fluid">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="contact__info-item">
                            <h2
                                class="txt txt--px28 txt--font400 txt--eurostar mb-4"
                            >
                                ADDRESS
                            </h2>
                            <p
                                class="txt txt--px24 txt--font400 txt--poppins mb-5"
                            >
                                Nilüferköy Mh. Nilüferköy Cd. No:127 16370
                                Osmangazi/ BURSA
                            </p>
                        </div>
                        <div class="contact__info-item">
                            <h2
                                class="txt txt--px28 txt--font400 txt--eurostar mb-4"
                            >
                                PHONE
                            </h2>
                            <a
                                href="#0"
                                class="txt txt--px24 txt--font400 txt--poppins mb-5"
                            >
                                +90 224 244 9 244
                            </a>
                            <a
                                href="#0"
                                class="txt txt--px24 txt--font400 txt--poppins mb-5"
                            >
                                +90 224 244 7 386
                            </a>
                        </div>
                        <div class="contact__info-item">
                            <h2
                                class="txt txt--px28 txt--font400 txt--eurostar mb-4"
                            >
                                MAIL
                            </h2>
                            <a
                                href="#0"
                                class="txt txt--px24 txt--font400 txt--poppins mb-5"
                            >
                                info@teknotasmarble.com
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="row">
                            <div class="col-lg-12 mb-5">
                                <div class="input-item">
                                    <input
                                        type="text"
                                        @focus="inputFn"
                                        @blur="inputFn"
                                    />
                                    <span class="input-item__placeholder"
                                        >Ad Soyad <strong>*</strong></span
                                    >
                                </div>
                            </div>
                            <div class="col-lg-12 mb-5">
                                <div class="input-item">
                                    <input
                                        type="text"
                                        @focus="inputFn"
                                        @blur="inputFn"
                                    />
                                    <span class="input-item__placeholder"
                                        >E-Mail <strong>*</strong></span
                                    >
                                </div>
                            </div>
                            <div class="col-lg-12 mb-5">
                                <div class="input-item input-item--textarea">
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        @focus="inputFn"
                                        @blur="inputFn"
                                    />

                                    <span class="input-item__placeholder"
                                        >Mesajınız <strong>*</strong></span
                                    >
                                </div>
                            </div>
                            <div class="col-lg-12 mb-5">
                                <label class="checkbox" for="checkbox1">
                                    <input
                                        type="checkbox"
                                        name="checkbox1"
                                        id="checkbox1"
                                    />
                                    <span class="checkbox__checkmark"></span>
                                    <span class="checkbox__txt txt--"
                                        ><a href="#0" class="c-primary"
                                            >Gizlilik sözleşmesini</a
                                        >
                                        okudum ve anladım.</span
                                    >
                                </label>
                            </div>
                            <div class="col-lg-12">
                                <button
                                    class="footer__newsletter-input__button footer__newsletter-input__button--not-abs txt txt--eurostar c-primary"
                                >
                                    Send
                                    <Icon name="iconArrowAlt" />
                                </button>
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

export default {
    components: {
        Header,
        Subheader,
        Footer,
    },
    data() {
        return {};
    },
    methods: {
        inputFn(e) {
            if (e.target.value === "") {
                e.path[1].classList.toggle("input-item--focused");
            }
        },
    },
};
</script>

<style scoped lang="scss">
.contact {
    &__info {
        &-item {
            margin-bottom: 6rem;
        }
    }
}
</style>
