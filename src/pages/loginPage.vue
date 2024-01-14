<template>
    <div class="login-page">
        <Card style="width: 40em">
            <template #title> Login </template>
            <template #content>
                <form @submit.prevent="login">
                    <div class="flex flex-column gap-2 m-2">
                        <label for="Email">Email</label>
                        <InputText
                            type="email"
                            id="username"
                            v-model="email"
                            aria-describedby="username-help"
                        />
                    </div>
                    <div class="flex flex-column gap-2 m-2">
                        <label for="password">Password</label>
                        <InputText
                            id="password"
                            type="password"
                            v-model="password"
                            aria-describedby="password-help"
                            autocomplete="on"
                        />
                    </div>
                    <div class="flex flex-column gap-2 mt-4 m-2">
                        <Button
                            label="Login"
                            class="w-100"
                            :disabled="!email || !password"
                            type="submit"
                        />
                    </div>
                </form>
            </template>
        </Card>
    </div>
</template>

<script setup>
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import { onMounted, ref } from "vue";

const email = ref("");
const password = ref("");

const login = () => {
    if (email.value === "esaayamini@gmail.com" && password.value === "admin") {
        const token = {
            email: email.value,
            password: password.value,
            expiresIn: Date.now() + 1000 * 60 * 60 * 24 * 7,
        };

        localStorage.setItem("loggedintoken", JSON.stringify(token));
        window.location.href = "/admin";
    } else {
        alert("Invalid Credentials");
    }
};

onMounted(() => {
    const token = localStorage.getItem("loggedintoken");
    if (token) {
        const parsedToken = JSON.parse(token);
        if (parsedToken.expiresIn > Date.now()) {
            window.location.href = "/admin";
        }
    }
});
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
