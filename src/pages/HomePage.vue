<template>
    <div>
        <FirstForm v-if="Page === 1" />
        <ChildForm v-else />
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ChildForm from "@/components/childform/ChildForm.vue";
import FirstForm from "@/components/firstform/FirstForm.vue";
const store = useStore();

const Page = computed(() => store.state.page);
</script>
