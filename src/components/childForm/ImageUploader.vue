<template>
    <div :style="style" class="image-uploader">
        <div v-if="!src && !baseSrc" class="add_image_button">
            <img src=".\4211763.png" height="50" width="60" />
        </div>
        <label :for="name">
            <div v-if="uploading" class="progress-overlay">
                <span>{{ progress }} %</span>
            </div>
            <div v-else-if="src" class="overlay">Change Photo</div>
        </label>
        <input
            :id="name"
            :name="name"
            type="file"
            accept="image/*"
            style="display: none"
            @change="displayFile"
        />
        <ul v-if="error" class="errors">
            <li v-for="err in normalizedErrors" :key="err">{{ err }}</li>
        </ul>
    </div>
</template>

<script setup>
import { computed, defineEmits, defineProps, ref, watch } from "vue";

const props = defineProps([
    "name",
    "baseSrc",
    "height",
    "displayName",
    "error",
    "progress",
]);

const emit = defineEmits();

const src = ref(null);

const normalizedErrors = computed(() => {
    if (typeof props.error === "string") return [props.error];
    if (Array.isArray(props.error)) return [...props.error];
    return [];
});

const uploading = computed(
    () => props.progress !== null && props.progress !== 100
);

const style = computed(() => {
    let containerStyle = {
        height: props.height,
    };
    if (src.value || props.baseSrc) {
        containerStyle.backgroundImage = `url(${src.value || props.baseSrc})`;
        containerStyle.backgroundSize = "contain"; // Adjusted this line
        containerStyle.backgroundRepeat = "no-repeat";
        containerStyle.backgroundPosition = "center center";
    }
    if (props.error) {
        containerStyle.border = "1px solid red";
    }
    return containerStyle;
});

const displayFile = (event) => {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            src.value = e.target.result;
            emit("change", event.target.files[0]);
        };
        reader.readAsDataURL(event.target.files[0]);
    }
};

watch(
    () => props.name,
    () => {
        src.value = null;
    }
);
</script>

<style scoped lang="scss">
.image-uploader {
    cursor: pointer;
    display: flex;
    // border: 1px solid #aaa;
    border-radius: 0.5rem;
    // box-shadow: 0 0 5px 1px #aaa inset;
    flex-direction: column;
    justify-content: center;
    background: white;
    position: relative;
    // border: 1px solid #aaa;

    overflow: hidden;
    label {
        cursor: pointer;
        height: 100%;
        box-sizing: border-box;
        padding-top: 4rem;
        padding-bottom: 1rem;
    }
    svg,
    p {
        display: block;
        color: #aaa;
        margin: 0 auto;
    }
    svg {
        height: calc(100% - 8rem);
    }
    svg + p {
        line-height: 8rem;
        text-align: center;
    }

    .add_image_button {
        height: 100%;
        transition: all 0.3s;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        bottom: 0;
        text-align: center;
        position: absolute;
    }

    .progress-overlay {
        height: 100%;
        transition: all 0.3s;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        color: #aaa;
        bottom: 0;
        text-align: center;
        position: absolute;
    }

    .overlay {
        opacity: 0;
        transition: all 0.3s;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 100%;
    }
    &:hover {
        box-shadow: 0 0 10px 1px #ccc inset;
        label {
            opacity: 0.5;
        }

        .overlay {
            opacity: 1;
        }
    }
    ul.errors {
        margin: 0;
        padding: 0;
        list-style: none;
        position: absolute;
        bottom: 0;
        width: 100%;
        background: red;
        li {
            color: white;
        }
    }
}
</style>
