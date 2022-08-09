<template>
    <div class="subheader">
        <div class="subheader__bg">
            <img :src="subheaderBg" alt="" />
        </div>
        <div class="subheader__wrapper">
            <div class="subheader__title">
                <h3>{{ subheaderTitle }}</h3>
            </div>
            <div class="breadcrumb">
                <a href="#0" class="breadcrumb__item">{{ bc }}</a>
                <Icon name="iconArrow" v-if="!bcSecond == ''" />
                <a href="#0" class="breadcrumb__item" v-if="!bcSecond == ''">{{
                    bcSecond
                }}</a>
                <Icon name="iconAngle" v-if="!bcThird == ''" />
                <a href="#0" class="breadcrumb__item" v-if="!bcThird == ''">{{
                    bcThird
                }}</a>
            </div>
        </div>
    </div>
</template>
<script>
import Icon from "../components/Icon.vue";
export default {
    components: { Icon },
    props: ["subheaderTitle", "subheaderBg", "bc", "bcSecond", "bcThird"],
};
</script>
