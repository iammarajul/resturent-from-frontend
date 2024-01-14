<template>
    <div v-if="mainLoader" class="card flex justify-content-center">
        <ProgressSpinner aria-label="Loading" />
    </div>

    <div v-else>
        <FirstForm v-if="Page === 1" />
        <ChildForm v-else />
    </div>
    <SubmitModal
        :visible="alreadysubmitted"
        @update:visible="onHideandGotoHome"
    />
</template>

<script setup>
import ChildForm from "@/components/childForm/ChildForm.vue";
import FirstForm from "@/components/firstForm/FirstForm.vue";
import ProgressSpinner from "primevue/progressspinner";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { getFormById } from "../services/formService";

import SubmitModal from "../components/common/SubmitModal.vue";
const store = useStore();

const Page = computed(() => store.state.page);

function getQueryParameters(url) {
    const searchParams = new URLSearchParams(url.split("?")[1]);
    const queryParams = {};

    for (const [key, value] of searchParams) {
        queryParams[key] = value;
    }

    return queryParams;
}

const queryParams = getQueryParameters(window.location.href);

const mainLoader = ref(false);
const alreadysubmitted = ref(false);
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
                alreadysubmitted.value = true;
            }
        }
        // store.dispatch("getFormWithId", queryParams.id);
        mainLoader.value = false;
    }
};

const onHideandGotoHome = (value) => {
    alreadysubmitted.value = value;
    window.location.href = "/";
};

checkIfSaved();
</script>

<style>
.p-progressbar .p-progressbar-value {
    background: #f59e0b;
}
</style>
