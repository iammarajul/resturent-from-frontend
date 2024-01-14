<template>
    <nav>
        <div class="navbar">
            <div class="navbar-item">
                <router-link
                    style="color: beige; text-decoration: none"
                    to="/admin"
                    >Home</router-link
                >
            </div>

            <button @click="logout" class="navbar-item">
                Logout {{ userName }}
            </button>
        </div>
    </nav>
</template>

<script setup>
const props = defineProps({
    userName: {
        default: "Esaa",
    },
});

const logout = () => {
    // Implement your logout logic here
    // For example, emit an event to notify the parent component

    // remove the loggedintoken from localStorage
    localStorage.removeItem("loggedintoken");
    window.location.href = "/admin";
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #333;
    color: rgb(255, 122, 33);
}

.navbar-item {
    margin: 0 10px;
    cursor: pointer;
}
</style>
