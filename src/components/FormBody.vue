<template>
    <div class="from_body">
        <div>
            <div class="card flex justify-content-center">
                <div class="flex flex-column gap-2">
                    <label for="username">Username</label>
                    <InputText id="username" v-model="value" aria-describedby="username-help" />
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';

const value = ref(null);
</script>

<style scoped>
.from_body {
    width: 100%;
    height: 80%;
    border: solid 1px #d7d8e1;
}
</style>