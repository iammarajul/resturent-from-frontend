<script setup>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import { computed, ref } from "vue";
import saveIcon from "./saveIcon.vue";
const props = defineProps({
    showModal: Boolean,
});

const emits = defineEmits(["update:showModal"]);

const modalValue = computed({
    get: () => props.showModal,
    set: (value) => {
        emits("update:showModal", value);
    },
});

const SendEmail = ref("");
</script>

<template>
    <Dialog
        v-model:visible="modalValue"
        modal
        class=""
        header=" "
        :style="{ width: '50vw' }"
        :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
        <div class="mx-8 text-center">
            <div
                class="flex flex-column justify-content-center align-items-center"
            >
                <div>
                    <saveIcon />
                </div>
                <div class="m-1">
                    <h3>Your form has been saved as a draft.</h3>
                </div>
                <div class="m-1">
                    <p class="">
                        If you want to continue your form later, please enter
                        the email address you would like to send the link to:
                    </p>
                </div>
                <div class="m-1 flex w-full justify-content-center">
                    <div class="mx-1">
                        <InputText
                            class="p-inputtext-sm"
                            type="email"
                            style="color: rgb(204, 48, 48)"
                            v-model="SendEmail"
                        />
                    </div>
                    <div class="mx-2">
                        <Button
                            size="small"
                            label="Send"
                            icon="pi pi-send"
                            outlined
                            color="black"
                            style="border: 1px solid #c3cad8"
                        />
                    </div>
                </div>
                <div class="m-1 flex w-full justify-content-center">
                    <Button
                        size="small"
                        label="Get Shareable Link"
                        icon="pi pi-link"
                        color="black"
                        style="border: 1px solid #c3cad8"
                    />
                </div>
            </div>
        </div>
    </Dialog>
</template>
