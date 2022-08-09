<template>
    <div class="section index-about">
        <div class="index-about__bg">
            <img src="@/images/about-marble-2.png" alt="" />
        </div>
        <div class="container container--fluid">
            <div class="index-about__content">
                <div class="row g-4 g-md-5 align-items-center">
                    <div class="col-12 col-lg-5">
                        <div class="index-about__content-image">
                            <img src="@/images/about-marble.png" alt="" />
                        </div>
                    </div>
                    <div class="col-12 col-lg-7">
                        <div
                            class="index-about__content-title txt txt--px28 txt--font400 txt--eurostar"
                        >
                            {{ about.title }}
                        </div>
                        <div
                            class="index-about__content-text txt txt--px24 txt--font400 txt--poppins mt-5"
                        >
                            {{ about.text }}
                        </div>
                        <div class="index-about__content-button mt-5">
                            <vButton
                                icon="iconArrowAlt"
                                text="View All"
                                color="primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            about: {
                title: "CORPORATE",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim risus. Purus ac netus aliquet massa, convallis ultricies vulputate ultrices. Vulputate sollicitudin ,fravida et gravida scelerisque eu in malesuada netus. Id imperdiet semper volutpat urna lacinia congue egestas. Vulputate sollicitudin gravida hac sit volutpat. Est molestie arcu leo hac sapien ornare eleifend amet nisl. Platea elementum luctus dapibus senectus mattis tincidunt fermentum. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean ante id enim risus. Purus ac netus aliquet massa, vulputate sollicitudin.",
            },
        };
    },
};
</script>
