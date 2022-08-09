<template>
    <section class="section about__content">
        <div class="container container--fluid">
            <div class="about__content__wrapper">
                <div class="about__content__map">
                    <img src="@/images/about-map.png" alt="" />
                </div>
                <div class="about__content__text">
                    <div class="section__top">
                        <div class="section__top__title">
                            {{ contentTitle }}
                        </div>
                    </div>
                    <CkEditor :text="contentText" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CkEditor from "../CkEditor.vue";
export default {
    props: ["contentTitle", "contentText"],
    components: { CkEditor },
};
</script>
