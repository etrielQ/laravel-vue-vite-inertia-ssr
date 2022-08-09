<template>
    <div class="hero-tools">
        <div ref="heroProgress" class="hero__progress">
            <div
                role="progressbar"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
                style="--value: 65"
            ></div>
        </div>
        <div class="hero__scroll">
            <div class="hero__scroll-icon"></div>
        </div>
        <div class="hero__count">
            <p
                class="hero__count-active txt txt--px28 txt--font400 txt--poppins c-white"
            >
                {{ sliderCount }}
            </p>
            <div class="hero__count-hr">
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <p
                class="hero__count-total txt txt--px18 txt--font400 txt--poppins c-white"
            >
                {{ sliderCountLength }}
            </p>
        </div>
    </div>
    <div class="swiper-buttons-prev" @click="prevSlide">
        <icon name="iconArrow" />
    </div>
    <div class="swiper-buttons-next" @click="nextSlide">
        <icon name="iconArrow" />
    </div>
</template>
<script>
export default {
    props: ["sliderCount", "sliderCountLength"],
    inject: ["nextSlide", "prevSlide"],
};
</script>
