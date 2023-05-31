<template>
    <form class="container">
        <FormHeader />
        <FormBody />
        <FormFooter />
    </form>
</template>

<script setup>

import FormHeader from "./FormHeader.vue";
import FormBody from "./FormBody.vue";
import FormFooter from "./FormFooter.vue";
    
</script>
<style scoped>
.container {
    max-width: 775px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5%;
    background: transparent;
    border: solid 1px #d7d8e1;
    border-top: none;
    border-bottom: none;
}





</style>
