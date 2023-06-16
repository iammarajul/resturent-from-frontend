<template>
    <div class="from_footer">
        <div class="p-5 flex mx-5">
            <div class="dump-space"></div>
            <div class="footer-buttons flex">
                <Button
                    label="Save"
                    severity="secondary"
                    class="mr-2 w-4"
                    outlined
                />
                <Button
                    label="Next"
                    severity="info"
                    class="w-5"
                    type="submit"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "primevue/button";
</script>

<style scoped>
@import url("../../assets/firstForm.css");
</style>
