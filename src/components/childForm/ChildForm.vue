<template>
    <form class="container" @submit.prevent="submitForm">
        <ChildFormHeader />
        <ChildFormBody />
        <ChildFormFooter />
    </form>
</template>

<script setup>
import ChildFormBody from "./ChildFormBody.vue";
import ChildFormFooter from "./ChildFormFooter.vue";
import ChildFormHeader from "./ChildFormHeader.vue";

const submitForm = () => {
    console.log("submit");
};
</script>
<style scoped>
@import "../../assets/childForm.css";
</style>
