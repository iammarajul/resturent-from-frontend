<template>
    <div>
        <FirstForm v-if="Page == 1" />
        <ChildForm v-else />
    </div>
</template>

<script setup>
import ChildForm from "src/components/childform/ChildForm.vue";
import FirstForm from "src/components/firstform/FirstForm.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const Page = computed(() => store.state.page);
</script>
