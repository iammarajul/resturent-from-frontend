<template>
    <div class="from_body">
        <div class="card flex justify-content-center custom-input mx-6 my-6">
            <div class="flex gap-2 w-full">
                <label for="item_name" class="w-6" style="word-break: break-all"
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
                    class="w-6"
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
                <label for="item_category" class="w-6"
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

        <div class="card flex mx-6 my-6 flex-column">
          <label for="item_name" class="mb-2" style="word-break: break-all"
          >Ingredience
          </label>
          <label class="mb-3" style="font-size: small"
          >          Ingredient names should be as descriptive as possible (e.g., grilled white onions, Colby cheese, 80/20 ground beef, etc.)
          </label>

            <IngredienceTable  :data="restaurant.ingredientTable" @update:data="updateIngredientTable"/>
            <pre>{{restaurant.ingredientTable}}</pre>
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-6">
            <div class="flex flex-column gap-2 w-full">
                <label for="restaurent_location_nb"
                    >Were any ingredients deep fried?</label
                >
                <div class="flex align-items-center">
                    <RadioButton
                        v-model="ingredient"
                        inputId="ingredient1"
                        name="yes"
                        value="yes"
                        @click="hasFriedIngredients = true"
                    />
                    <label for="ingredient1" class="ml-2">Yes</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton
                        v-model="ingredient"
                        inputId="ingredient2"
                        name="no"
                        value="no"
                        @click="hasFriedIngredients = false"
                    />
                    <label for="ingredient2" class="ml-2">No</label>
                </div>
            </div>
        </div>

        <div v-if="hasFriedIngredients">
            <div
                class="card flex custom-input justify-content-center mx-6 my-6"
            >
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

            <div
                class="card flex custom-input justify-content-center mx-6 my-6"
            >
                <div class="flex flex-column gap-2 w-full">
                    <label for="item_oil_type"
                        >What type of oil was used?</label
                    >
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

            <div
                class="card flex custom-input justify-content-center mx-6 my-6"
            >
                <div class="flex flex-column gap-2 w-full">
                    <label for="item_breaded"
                        >Were fried ingredients breaded or battered?</label
                    >
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
                    v-model="restaurant.ingredients_not_listed"
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

        <pre>{{restaurant}}</pre>

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
import {itemCatagories,itemOilTypes,itemBreadeds} from "@/assets/list"
import IngredienceTable from "./ingredienceTable.vue";

const restaurant = ref({
  ingredientTable:[],
});
const selectedCity = ref();

const selectedCategory = ref("Production");

const hasFriedIngredients = ref(false);
const ingredient = ref("no");

const ingredientTable = ref([])
const updateIngredientTable = (data) => {
  restaurant.value.ingredientTable = data
}
</script>

<style scoped>

</style>
