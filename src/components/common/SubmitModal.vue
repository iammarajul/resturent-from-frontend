<template>
    <Dialog
        v-model:visible="visible"
        modal
        header="Header"
        :style="{ width: '30rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <template #header>
            <h2>
                {{
                    isSuccess
                        ? "Form Submission Successful"
                        : "Form Already Submitted"
                }}
                <i v-if="!isSuccess" class="pi pi-exclamation-triangle" style="color: #d61d3c; margin-left: 0.5rem;"></i>

            </h2>
        </template>
        <p class="m-0" v-if="isSuccess">Thank you for submitting the form!</p>
        <p class="m-0" v-else>
            You have already submitted the form with this link. you can submit
            the form only once.
            <p>Please Submit the form again with a new email.</p>
        </p>
        

        <template #footer>
            <Button
                label="Ok"
                icon="pi pi-check"
                @click="visible = false"
                autofocus
            />
        </template>
    </Dialog>
</template>

<script setup>
import Button from "primevue/button";

import Dialog from "primevue/dialog";
import { computed } from "vue";

const props = defineProps({
    visible: {
        type: Boolean,
        required: true,
    },
    isSuccess: {
        type: Boolean,
        required: false,
    },
});
const emit = defineEmits();
const visible = computed({
    get: () => props.visible,
    set: (value) => emit("update:visible", value),
});
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
