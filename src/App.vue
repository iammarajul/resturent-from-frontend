<script setup>
import { useStore } from "vuex";
import HomePage from "./pages/HomePage.vue";
//get query param id from url
function getQueryParameters(url) {
    const searchParams = new URLSearchParams(url.split("?")[1]);
    const queryParams = {};

    for (const [key, value] of searchParams) {
        queryParams[key] = value;
    }

    return queryParams;
}

const queryParams = getQueryParameters(window.location.href);
const store = useStore();
if (queryParams.id) {
    store.dispatch("getFormWithId", queryParams.id);
}
</script>
<template>
    <div>
        <HomePage />
    </div>
</template>
