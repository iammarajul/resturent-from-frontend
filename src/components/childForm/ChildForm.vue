<template>
    <form class="container" @submit.prevent="submitForm">
        <SingleItem v-for="index in range" :itemNumber="index" />
        <div class="from_progress_bar">
            <div class="card mx-6 my-3">
                <ProgressBar
                    style="height: 15px"
                    :value="progress"
                ></ProgressBar>

                <ul
                    class="flex justify-content-between flex-wrap"
                    style="list-style-type: none"
                >
                    <li v-for="index in 15" :key="index">
                        <span
                            @click="goToPage(index)"
                            :class="{
                                'active-index pagination-item':
                                    index === currentPage - 1,
                                'pagination-item': index !== currentPage - 1,
                            }"
                            >{{ index }}</span
                        >
                    </li>
                </ul>
            </div>
        </div>
        <ChildFormFooter
            :pageNb="currentPage"
            :saveAndContinueLater="saveAndContinueLater"
            :onClickBack="onClickBack"
            :saveAndAddAnotherItem="saveAndAddAnotherItem"
        />
    </form>

    <SaveModal :showModal="showModal" @update:showModal="updateShowModal" />
    <ConfirmDialog></ConfirmDialog>
    <Toast />
</template>

<script setup>
import SingleItem from "@/components/childForm/SingleItem.vue";
import SaveModal from "@/components/common/SaveModal.vue";
import _ from "lodash";
import ConfirmDialog from "primevue/confirmdialog";
import ProgressBar from "primevue/progressbar";
import Toast from "primevue/toast";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import {
    submitFormByIdService,
    submitFormService,
} from "../../services/formService";
import ChildFormFooter from "./ChildFormFooter.vue";

const confirm = useConfirm();
const toast = useToast();

const store = useStore();

const progress = computed(() => {
    return store.getters.getProgress;
});

const currentPage = computed(() => store.state.page);
const range = computed(() =>
    _.range((currentPage.value - 1) * 10 - 9, (currentPage.value - 1) * 10 + 1)
);
// console.log("range", range);
const submitForm = async () => {
    if (store.state.shareLink !== "") {
        const data = await submitFormByIdService(
            store.state.shareLink,
            store.getters.getRequestData
        );
        if (data.status !== "error") {
            SubmitSuccess();
        }
    } else {
        const data = await submitFormService(store.getters.getRequestData);
        if (data.status !== "error") {
            SubmitSuccess();
        }
    }
};

const SubmitSuccess = () => {
    confirm.require({
        message: "Form submitted successfully!",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
            window.location.href = "http://13.229.111.146:8080/";
        },
    });
};

const onClickBack = () => {
    store.commit("decrementPageNumber");
    window.scrollTo(0, 0);
};

const showModal = ref(false);
const saveAndContinueLater = () => {
    console.log("saveAndContinueLater");
    showModal.value = true;
};

const saveAndAddAnotherItem = () => {
    // console.log("saveAndAddAnotherItem");
    store.commit("incrementPageNumber");
    window.scrollTo(0, 0);
};

const updateShowModal = (value) => {
    showModal.value = value;
};

const goToPage = (page) => {
    store.commit("setPageNumber", page + 1);
    window.scrollTo(0, 0);
};
</script>
<style scoped>
@import "../../assets/childForm.css";
</style>
