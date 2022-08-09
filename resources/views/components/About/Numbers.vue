<template>
    <section class="section about__numbers">
        <div class="container container--fluid">
            <div class="row g-4 g-md-5">
                <div
                    class="col-12 col-sm-6 col-lg-3"
                    v-for="item in numbers"
                    :key="item"
                >
                    <div class="about__numbers-item">
                        <div
                            class="about__numbers-item__value txt txt--font500 c-primary"
                        >
                            {{ item.value }}
                        </div>
                        <div
                            class="about__numbers-item__title txt txt--px28 txt--font500 c-primary"
                        >
                            {{ item.title }}
                        </div>
                        <div
                            class="about__numbers-item__desc txt txt--px24 txt--font400 c-primary"
                        >
                            {{ item.desc }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            numbers: [
                {
                    value: 18,
                    title: "Lorem Ipsum",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est.",
                },
                {
                    value: 21,
                    title: "Lorem Ipsum",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est.",
                },
                {
                    value: 130,
                    title: "Lorem Ipsum",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est.",
                },
                {
                    value: 310,
                    title: "Lorem Ipsum",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est.",
                },
            ],
        };
    },
};
</script>
