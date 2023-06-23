<template>
    <div>
        <FirstForm v-if="Page === 1" />
        <ChildForm v-else />
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ChildForm from "@/components/childForm/ChildForm.vue";
import FirstForm from "@/components/firstForm/FirstForm.vue";
const store = useStore();

const Page = computed(() => store.state.page);
</script>

<style>
.p-progressbar .p-progressbar-value {
    background:#F59E0B;

  }
</style>