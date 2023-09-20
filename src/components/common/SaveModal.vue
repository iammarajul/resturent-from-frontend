<script setup>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { resendEmail } from "../../services/formService";
import saveIcon from "./saveIcon.vue";
const toast = useToast();

const props = defineProps({
    showModal: Boolean,
});

// get first_page.contact_email from store

const store = useStore();

const emits = defineEmits(["update:showModal"]);

const modalValue = computed({
    get: () => props.showModal,
    set: (value) => {
        store.commit("clearErrorMessage");
        emits("update:showModal", value);
    },
});

const SendEmail = ref(store.state.first_page.contact_email);

const errorMessage = ref(store.state.errorMessage);

watch(
    () => store.state.errorMessage,
    (newValue, oldValue) => {
        errorMessage.value = newValue;
    },
    { deep: true }
);

watch(
    () => store.state.first_page.contact_email,
    (newValue, oldValue) => {
        SendEmail.value = newValue;
    },
    { deep: true }
);

watch(
    () => store.state.sendButtonLoading,
    (newValue, oldValue) => {
        sendButtonLoading.value = newValue;
    }
);

const sendButtonLoading = ref(false);
const sendData = () => {
    store.state.shareLink !== ""
        ? store.dispatch("setFormByID")
        : store.dispatch("setFormByEmail");
};

const resendEmailLoading = ref(false);
const handleResendEmail = async () => {
    try {
        resendEmailLoading.value = true;
        const result = await resendEmail(store.state.first_page.contact_email);
        console.log(result);
        if (result.status === "success") {
            console.log("success");
            toast.add({
                severity: "success",
                summary: "Success",
                detail: "Email sent successfully",
                life: 3000,
            });
        }
        resendEmailLoading.value = false;
    } catch (err) {
        console.log(err);
        resendEmailLoading.value = false;
    }
};
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
                            style="color: rgb(1, 1, 1)"
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
                            @click="sendData"
                            :loading="sendButtonLoading"
                        />
                    </div>
                </div>

                <small class="p-error" id="text-error" v-if="errorMessage != ''"
                    >This Email already have data please check email to continue
                </small>

                <div class="m-1 flex w-full justify-content-center">
                    <Button
                        size="small"
                        label="Get Shareable Link"
                        icon="pi pi-link"
                        color="black"
                        style="border: 1px solid #c3cad8"
                        v-if="errorMessage == ''"
                    />
                    <Button
                        v-else
                        size="small"
                        severity="warning"
                        label="Resend Link"
                        icon="pi pi-link"
                        color="black"
                        :loading="resendEmailLoading"
                        style="border: 1px solid #c3cad8"
                        @click="handleResendEmail"
                    />
                </div>
            </div>
        </div>
    </Dialog>
    <Toast />
</template>
