<template>
    <div class="from_footer">
        <div class="p-5 flex mx-5">
            <div class="dump-space">
                <Button label="Back" severity="secondary" class="w-5" />
            </div>
            <div class="footer-buttons flex">
                <Button
                    label="Save"
                    severity="secondary"
                    class="mr-2 w-4"
                    outlined
                />
                <!-- <Button label="Next" severity="info" class="w-6" /> -->
                <Button label="Submit" severity="success" class="w-6" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "primevue/button";
</script>

<style scoped>
.from_footer {
    width: 100%;
    height: 50%;
    border-bottom: solid 1px #d7d8e1;
}
.dump-space {
    width: 50%;
}
.footer-buttons {
    width: 50%;
    justify-content: end;
}
</style>
