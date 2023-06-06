<template>
    <div class="from_body">
        <div class="card flex justify-content-center custom-input mx-6 my-6">
            <div class="flex gap-2 w-full">
                <label for="item_name" class="w-4" style="word-break: break-all"
                    >Menu Item Name (e.g., Whopper)
                </label>
                <InputText
                    class="p-inputtext-sm w-8 h-2.5rem my-auto"
                    id="item_name"
                    name="item_name"
                    v-model="restaurant.manu_item_name"
                    aria-describedby="item_name"
                />
                <!-- <small id="rastaurent_name">Restaurant Name</small> -->
            </div>
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-6">
            <div class="flex gap-2 w-full">
                <label
                    for="item_number"
                    class="w-4"
                    style="word-break: break-all"
                    >Restaurant's Menu Item Number</label
                >
                <InputText
                    class="p-inputtext-sm w-8 h-2.5rem my-auto"
                    id="item_number"
                    name="item_number"
                    v-model="restaurant.manu_item_number"
                    aria-describedby="item_number"
                />
            </div>
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-6">
            <div class="flex gap-2 w-full">
                <label for="item_category" class="w-4"
                    >Menu Item Category</label
                >
                <Dropdown
                    v-model="restaurant.item_category"
                    id="item_category"
                    name="item_category"
                    :options="itemCatagories"
                    optionLabel="name"
                    placeholder="Please Select"
                    class="p-inputtext-sm w-8 h-2.5rem my-auto"
                />
            </div>
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-6">
            <div class="flex flex-column gap-2 w-full">
                <label for="restaurent_location_nb"
                    >Were any ingredients deep fried?</label
                >
                <div
                    v-for="category in categories"
                    :key="category.key"
                    class="flex align-items-center"
                >
                    <RadioButton
                        v-model="selectedCategory"
                        :inputId="category.key"
                        name="pizza"
                        :value="category.name"
                    />
                    <label :for="category.key" class="ml-2">{{
                        category.name
                    }}</label>
                </div>
            </div>
        </div>

        <div>
            <div class="card flex custom-input justify-content-center mx-6 my-6">
                <div class="flex flex-column gap-2 w-full">
                    <label for="item_number"
                        >Which ingredients were deep fried?</label
                    >
                    <InputText
                        class="p-inputtext-sm w-6"
                        id="item_number"
                        name="item_number"
                        v-model="restaurant.manu_item_number"
                        aria-describedby="item_number"
                    />
                </div>
            </div>

            <div class="card flex custom-input justify-content-center mx-6 my-6">
                <div class="flex flex-column gap-2 w-full">
                    <label for="item_oil_type">What type of oil was used?</label>
                    <Dropdown
                        v-model="restaurant.item_oil_type"
                        id="item_oil_type"
                        name="item_oil_type"
                        :options="itemOilTypes"
                        optionLabel="name"
                        placeholder="Please Select"
                        class="w-6 custom_dropdown h-5"
                    />
                </div>
            </div>

            <div class="card flex custom-input justify-content-center mx-6 my-6">
                <div class="flex flex-column gap-2 w-full">
                    <label for="item_breaded">Were fried ingredients breaded or battered?</label>
                    <Dropdown
                        v-model="restaurant.item_breaded"
                        id="item_breaded"
                        name="item_breaded"
                        :options="itemBreadeds"
                        optionLabel="name"
                        placeholder="Please Select"
                        class="w-6 custom_dropdown h-5"
                    />
                </div>
            </div>
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-6">
            <div class="flex flex-column gap-2 w-full">
                <label for="restaurent_location_nb"
                    >List any oils, seasonings, spices, and ingredients not
                    listed above:</label
                >
                <Textarea
                    v-model="value"
                    rows="5"
                    cols="30"
                    class="custom_text_area"
                />
            </div>
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-6">
            <div class="flex flex-column gap-2 w-full">
                <label for="item_notes">Notes:</label>
                <Textarea
                    v-model="restaurant.item_notes"
                    id="item_notes"
                    name="item_notes"
                    rows="5"
                    cols="30"
                    class="custom_text_area"
                />
            </div>
        </div>

        <div class="card mx-6 my-6">
            <ProgressBar style="height: 16px" :value="10"></ProgressBar>
        </div>
    </div>
</template>

<script setup>
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import ProgressBar from "primevue/progressbar";
import RadioButton from "primevue/radiobutton";
import Textarea from "primevue/textarea";
import { ref } from "vue";

const restaurant = ref({});
const selectedCity = ref();
const itemCatagories = [
    { name: "Breakfast", code: "1" },
    { name: "Lunch", code: "2" },
    { name: "Dinner", code: "3" },
    { name: "Appetizer", code: "4" },
    { name: "Entree", code: "5" },
    { name: "Dessert", code: "6" },
    { name: "Beverages", code: "7" },
    { name: "Sides", code: "8" },
    { name: "Add Ons", code: "9" },
    { name: "Brunch", code: "10" },
    { name: "Kids Menu", code: "11" },
    { name: "Condiments", code: "12" },
    { name: "Extras", code: "13" },
];

const itemOilTypes = [
    { name: "Vegetable oil", code: "1" },
    { name: "Canola oil", code: "2" },
    { name: "Peanut oil", code: "3" },
    { name: "Corn oil", code: "4" },
    { name: "Olive oil", code: "5" },
    { name: "Other (see notes)", code: "6" },
];

const itemBreadeds = [
    { name: "Breaded", code: "1" },
    { name: "Battered", code: "2" },
    { name: "Other (see notes)", code: "3" }
];

const selectedCategory = ref("Production");
const categories = ref([
    { name: "Yes", key: "1" },
    { name: "No", key: "0" },
]);
</script>

<style scoped>
.from_body {
    width: 100%;
    height: 80%;
    border-bottom: solid 1px #d7d8e1;
}
.custom_label {
    width: 50px;
}
t .custom_dropdown {
    height: 2.5em !important;
    width: 50% !important;
}
.custom-input {
    margin-bottom: 10px;
}
.custom_text_area {
    height: 5rem;
}
</style>
