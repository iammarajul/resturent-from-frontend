<template>
    <div class="from_footer">
        <div class="p-5 flex mx-5">
            <div class="dump-space">
                <Button
                    @click="onClickBack"
                    label="Back"
                    severity="secondary"
                    class="w-5"
                />
            </div>
            <div class="footer-buttons flex" v-if="pageNb <= 10">
                <Button
                    label="Save and continue later"
                    severity="secondary"
                    @click="saveAndContinueLater"
                    class="mr-2"
                    size="small"
                    style="font-size: 10px"
                    outlined
                />
                <!-- <Button label="Next" severity="info" class="w-6" /> -->
                <Button
                    label="save and add another item"
                    severity="success"
                    @click="saveAndAddAnotherItem"
                    size="small"
                    style="font-size: 10px"
                />
            </div>
            <div class="footer-buttons flex" v-else>
                <Button
                    label="Submit"
                    severity="warning"
                    size="small"
                    style="width: 200px"
                    type="submit"
                />
            </div>
        </div>
        <div v-if="pageNb <= 10" class="flex justify-content-center mb-2">
            <Button
                label="Submit"
                severity="warning"
                size="small"
                style="width: 200px"
                type="submit"
            />
        </div>
    </div>
</template>

<script setup>
import Button from "primevue/button";

const props = defineProps({
    onClickBack: {
        type: Function,
        default: () => {},
    },
    saveAndAddAnotherItem: {
        type: Function,
        default: () => {},
    },
    saveAndContinueLater: {
        type: Function,
        default: () => {},
    },
    submitData: {
        type: Function,
        default: () => {},
    },
    pageNb: {
        type: Number,
        default: 1,
    },
});
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
