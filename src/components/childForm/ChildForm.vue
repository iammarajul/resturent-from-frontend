<template>
  <form class="container" @submit.prevent="submitForm">
    <SingleItem v-for="index in range" :itemNumber="index"/>

    <ChildFormFooter :saveAndContinueLater="saveAndContinueLater" :onClickBack="onClickBack" :saveAndAddAnotherItem="saveAndAddAnotherItem"/>
  </form>
  <SaveModal :showModal="showModal" @update:showModal="updateShowModal"/>
</template>

<script setup>
// import ProgressBar from "primevue/progressbar";
import SaveModal from "@/components/common/SaveModal.vue";
import SingleItem from "@/components/childform/SingleItem.vue";
import ChildFormFooter from "./ChildFormFooter.vue";
import {computed, ref} from "vue";
import _ from "lodash";
import {useStore} from "vuex";

const store = useStore();


const currentPage = computed(() => store.state.page);
const range = computed(()=>_.range((currentPage.value-1) * 10 - 9, (currentPage.value-1) * 10 + 1));
console.log("range", range);
const submitForm = () => {
  console.log("submit");
};

const onClickBack = () => {
  store.commit("decrementPageNumber");
  window.scrollTo(0,0);
};


const showModal = ref(false);
const saveAndContinueLater = () => {
  console.log("saveAndContinueLater");
  showModal.value = true;
};

const saveAndAddAnotherItem = () => {
  console.log("saveAndAddAnotherItem");
  store.commit("incrementPageNumber");
  window.scrollTo(0,0);
};

const updateShowModal = (value) => {
  showModal.value = value;
};

</script>
<style scoped>
@import "../../assets/childForm.css";
</style>
