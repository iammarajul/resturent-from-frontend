<script setup>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { getShareableLink, setFormById } from "../../services/formService";
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
        shareLink.value = null;
        emits("update:showModal", value);
    },
});

const SendEmail = ref(store.state.first_page.contact_email);

watch(
    () => store.state.first_page.contact_email,
    (newValue, oldValue) => {
        SendEmail.value = newValue;
    },
    { deep: true }
);

const sendButtonLoading = ref(false);
const sendData = async () => {
    sendButtonLoading.value = true;
    const data = store.getters.getRequestData;
    const userId = store.getters.getShareLink;
    const responseData = await setFormById(userId, data);
    if (responseData.status === "success") {
        toast.add({
            severity: "success",
            summary: "Success",
            detail: "Email sent successfully",
            life: 5000,
        });
    } else {
        toast.add({
            severity: "error",
            summary: "Error",
            detail: responseData.message || `Something went wrong`,
            life: 5000,
        });
    }
    sendButtonLoading.value = false;
};

const shareButtonLoading = ref(false);
const shareLink = ref(null);
const handleGetShareableLink = async () => {
    shareButtonLoading.value = true;
    const data = store.getters.getRequestData;
    const userId = store.getters.getShareLink;
    const responseData = await getShareableLink(userId, data);
    if (responseData.status === "success") {
        // console.log(responseData.data);
        shareLink.value = responseData.data.shareLink;
        toast.add({
            severity: "success",
            summary: "Success",
            detail: "Link copied to clipboard",
            life: 5000,
        });
    } else {
        toast.add({
            severity: "error",
            summary: "Error",
            detail: responseData.message || `Something went wrong`,
            life: 5000,
        });
    }
    shareButtonLoading.value = false;
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
                    <img
                        src="./logo71.png"
                        alt=""
                        style="width: 100px; height: 100px"
                    />
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

                <div class="m-1 flex w-full justify-content-center">
                    <Button
                        size="small"
                        label="Get Shareable Link"
                        icon="pi pi-link"
                        color="black"
                        style="border: 1px solid #c3cad8"
                        :loading="shareButtonLoading"
                        @click="handleGetShareableLink"
                    />
                </div>
                <input
                    id="copyInput"
                    v-if="shareLink !== null"
                    style="width: 100%"
                    type="text"
                    :value="shareLink"
                />
            </div>
        </div>
    </Dialog>
    <Toast />
</template>
