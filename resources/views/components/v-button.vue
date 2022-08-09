<template>
    <button
        v-if="type == 'button'"
        class="btn"
        :class="[
            color === 'white' ? 'btn--white' : '',
            color === 'primary' ? 'btn--primary' : '',
            color === 'secondary' ? 'btn--secondary' : '',
            color === 'secondaryLight' ? 'btn--secondary-light' : '',
            type === 'icon' ? 'btn--only-icon' : '',
            center == true ? 'btn--centered' : '',
        ]"
    >
        <span
            class="btn-icon"
            :class="iconPosition === 'right' ? 'ml-1' : 'mr-1'"
        >
            <icon :name="icon"></icon>
        </span>
        <span class="btn-txt">{{ text }}</span>
    </button>
    <a
        :href="href"
        v-else
        class="btn"
        :class="[
            color === 'white' ? 'btn--white' : '',
            color === 'primary' ? 'btn--primary' : '',
            color === 'secondary' ? 'btn--secondary' : '',
            color === 'secondaryLight' ? 'btn--secondary-light' : '',
            type === 'icon' ? 'btn--only-icon' : '',
            center == 'true' ? 'btn--centered' : '',
        ]"
    >
        <span
            class="btn-icon"
            :class="iconPosition === 'right' ? 'ml-1' : 'mr-1'"
        >
            <icon :name="icon"></icon>
        </span>
        <span class="btn-txt">{{ text }}</span>
    </a>
</template>

<script>
export default {
    name: "vButton",
    props: ["text", "icon", "color", "type", "href", "iconPosition", "center"],
};
</script>
