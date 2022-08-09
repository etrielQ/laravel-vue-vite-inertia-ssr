<template>
    <footer class="footer">
        <div class="container container--fluid">
            <div class="footer__wrapper row g-4 g-md-5">
                <div class="footer__left col-12 col-lg-5">
                    <div class="footer__logo">
                        <img src="@/images/teknotas-footer-logo.svg" alt="" />
                    </div>
                    <div
                        class="footer__quote txt txt--px24 txt--font300 txt--montserrat c-secondary"
                    >
                        an indispensable part of all modern and classic
                        structures...
                    </div>
                    <div class="footer__info">
                        <div
                            class="footer__info-item txt txt--px24 txt--font400 txt--poppins"
                        >
                            Nilüferköy Mh. Nilüferköy Cd. No:127 16370
                            Osmangazi/ BURSA
                        </div>
                        <div
                            class="footer__info-item footer__info-item-alt txt txt--px22 txt--font400 txt--poppins c-secondary"
                        >
                            T.: +90 224 244 9 244
                        </div>
                        <div
                            class="footer__info-item footer__info-item-alt txt txt--px22 txt--font400 txt--poppins c-secondary"
                        >
                            F.: +90 224 244 7 387
                        </div>
                        <div
                            class="footer__info-item footer__info-item-alt txt txt--px22 txt--font400 txt--poppins c-secondary"
                        >
                            M.: info@teknotasmarble.com
                        </div>
                    </div>
                </div>
                <div class="footer__right col-12 col-lg-7">
                    <div class="footer__nav">
                        <div class="footer__nav-item">
                            <Link
                                :href="route('homepage')"
                                class="txt--px20 txt--font400 txt--poppins me-3"
                                >Homepage</Link
                            >
                        </div>
                        <div class="footer__nav-item">
                            <Link
                                :href="route('about')"
                                class="txt--px20 txt--font400 txt--poppins me-3"
                                >About</Link
                            >
                        </div>
                        <div class="footer__nav-item">
                            <Link
                                :href="route('contact')"
                                class="txt--px20 txt--font400 txt--poppins me-3"
                                >Contact</Link
                            >
                        </div>
                        <div class="footer__nav-item">
                            <Link
                                :href="route('homepage')"
                                class="txt--px20 txt--font400 txt--poppins me-3"
                                >Homepage</Link
                            >
                        </div>
                        <div class="footer__nav-item">
                            <Link
                                :href="route('about')"
                                class="txt--px20 txt--font400 txt--poppins me-3"
                                >About</Link
                            >
                        </div>
                        <div class="footer__nav-item">
                            <Link
                                :href="route('contact')"
                                class="txt--px20 txt--font400 txt--poppins me-3"
                                >Contact</Link
                            >
                        </div>
                    </div>
                    <div class="footer__newsletter">
                        <div
                            class="footer__newsletter-title txt txt--px24 txt--font400 txt--poppins c-primary"
                        >
                            Get a New project
                        </div>
                        <div class="footer__newsletter-input">
                            <input type="text" placeholder="Email" />
                            <button
                                class="footer__newsletter-input__button txt txt--eurostar c-primary"
                            >
                                Send
                                <Icon name="iconArrowAlt" />
                            </button>
                        </div>
                        <div
                            class="footer__newsletter-checkbox txt txt--px16 txt--font400 txt--poppins c-secondary"
                        >
                            <label class="checkbox" for="cbox">
                                <input type="checkbox" name="cbox" id="cbox" />
                                <span class="checkbox__checkmark me-4"></span>
                                <span class="checkbox__text">
                                    Lorem ipsum dolor sit
                                    <a href="#0"> amet</a>, consectetur
                                    adipiscing elit.
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <div
                    class="footer__bottom__rights txt txt--font300 c-primary-light"
                >
                    © 2022 Teknotaş, tüm hakları saklıdır.
                </div>
                <div class="footer__bottom__socials">
                    <a href="#0" class="footer__bottom__socials-item">
                        <icon name="iconFacebook" />
                    </a>
                    <a href="#0" class="footer__bottom__socials-item">
                        <icon name="iconLinkedin" />
                    </a>
                    <a href="#0" class="footer__bottom__socials-item">
                        <icon name="iconInstagram" />
                    </a>
                    <a href="#0" class="footer__bottom__socials-item">
                        <icon name="iconYoutube" />
                    </a>
                </div>
                <div
                    class="footer__bottom__policy txt txt--font300 c-primary-light"
                >
                    <a href="#0" class="footer__bottom__policy-item">
                        İlgili Kişi Başvuru Formu
                    </a>
                    <a href="#0" class="footer__bottom__policy-item">
                        Gizlilik Politikası
                    </a>
                    <a href="#0" class="footer__bottom__policy-item">KVKK</a>
                    <a href="#0" class="footer__bottom__babel"
                        >web tasarım BABEL</a
                    >
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import Icon from "../components/Icon.vue";
export default { components: { Icon } };
</script>
