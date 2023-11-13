<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import HomePage from "./pages/HomePage.vue";
import { getFormById } from "./services/formService";

import ConfirmDialog from "primevue/confirmdialog";
import ProgressSpinner from "primevue/progressspinner";
import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();

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

const mainLoader = ref(false);

const checkIfSaved = async () => {
    if (queryParams.id) {
        store.commit("setShareLink", queryParams.id);
        mainLoader.value = true;
        const restaurentData = await getFormById(queryParams.id);
        if (restaurentData.status === "success") {
            store.commit("updateState", restaurentData.data);
        } else if (restaurentData.status === "error") {
            if (restaurentData.message === "Form already submitted") {
                console.log("Form already submitted");
                SubmitSuccess();
            }
        }
        // store.dispatch("getFormWithId", queryParams.id);
        mainLoader.value = false;
    }
};

const SubmitSuccess = () => {
    confirm.require({
        message: "Form Already Submited!",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
            window.location.href = "http://localhost:8080/";
        },
    });
};

checkIfSaved();
</script>
<template>
    <div>
        <div v-if="mainLoader" class="card flex justify-content-center">
            <ProgressSpinner aria-label="Loading" />
        </div>
        <HomePage v-else />
        <ConfirmDialog />
    </div>
</template>
