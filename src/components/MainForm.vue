<template>
    <form class="container">
        <FormHeader />
        <FormBody />
        <FormFooter />
    </form>
</template>

<script setup>
import FormBody from "./FormBody.vue";
import FormFooter from "./FormFooter.vue";
import FormHeader from "./FormHeader.vue";
</script>
<style scoped>
.container {
    max-width: 775px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    background: transparent;
    border: solid 1px #d7d8e1;
    border-top: none;
    border-bottom: none;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
}
</style>
