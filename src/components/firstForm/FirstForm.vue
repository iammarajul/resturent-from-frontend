<template>

    <FormBody :formData="restaurant" @update:formData="updateFormData" />
</template>

<script setup>
import { ref } from "vue";
import FormBody from "./FormBody.vue";

const restaurant = ref({});
const updateFormData = (value) => {
    restaurant.value = value;
    console.log(restaurant);
};

const onSubmit = (values) => {
    console.log(values);
};
</script>
<style scoped>

</style>
