<template>
    <div class="child_from_header">
        <div class="header_title">
            <div class="title">Menu Item {{ props.itemNumber }}</div>
        </div>
    </div>
    <div class="from_body">
        <div style="width: 200px; margin: 10px auto">
            <ImageUploader
                :name="getImageUploaderName()"
                height="100px"
                @change="uploadFile"
                :progress="uploadProgress"
                :error="uploadError"
                :baseSrc="getBaseSrc(restaurant.image_id)"
            />
        </div>

        <div class="card flex justify-content-center custom-input mx-6 mt-5">
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
            </div>
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-3">
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
                    type="number"
                    v-model="restaurant.manu_item_number"
                    aria-describedby="item_number"
                />
            </div>
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-3">
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

        <div class="card flex mx-6 my-3 flex-column">
            <label class="mb-2" style="word-break: break-all"
                >Ingredients
            </label>
            <label class="mb-3" style="font-size: small">
                Ingredient names should be as descriptive as possible (e.g.,
                grilled white onions, Colby cheese, 80/20 ground beef, etc.)
            </label>

            <IngredienceTable
                @update:ingredients_table="updateIngredientTable"
                :ingredients_data="restaurant.ingredientTable"
                :itemNumber="itemNumber"
            />
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-3">
            <div class="flex flex-column gap-2 w-full">
                <label for="has_deep_fried"
                    >Were any ingredients deep fried?</label
                >
                <div class="flex align-items-center">
                    <RadioButton
                        v-model="restaurant.has_deep_fried"
                        inputId="ingredient1"
                        id="has_deep_fried_yes"
                        name="has_deep_fried"
                        value="yes"
                        @click="hasFriedIngredients = true"
                    />
                    <label for="ingredient1" class="ml-2">Yes</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton
                        v-model="restaurant.has_deep_fried"
                        inputId="ingredient2"
                        id="has_deep_fried_no"
                        name="has_deep_fried_no"
                        value="no"
                        @click="hasFriedIngredients = false"
                    />
                    <label for="ingredient2" class="ml-2">No</label>
                </div>
            </div>
        </div>

        <div v-if="hasFriedIngredients">
            <div
                class="card flex custom-input justify-content-center mx-6 my-3"
            >
                <div class="flex flex-column gap-2 w-full">
                    <label for="deep_fried_ingredient"
                        >Which ingredients were deep fried?</label
                    >
                    <InputText
                        class="p-inputtext-sm w-6"
                        id="deep_fried_ingredient"
                        name="deep_fried_ingredient"
                        v-model="restaurant.deep_fried_ingredient"
                        aria-describedby="deep_fried_ingredient"
                    />
                </div>
            </div>

            <div
                class="card flex custom-input justify-content-center mx-6 my-3"
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
                class="card flex custom-input justify-content-center mx-6 my-3"
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

        <div class="card flex custom-input justify-content-center mx-6 my-3">
            <div class="flex flex-column gap-2 w-full">
                <label for="ingredients_not_listed"
                    >List any oils, seasonings, spices, and ingredients not
                    listed above:</label
                >
                <Textarea
                    v-model="restaurant.ingredients_not_listed"
                    id="ingredients_not_listed"
                    name="ingredients_not_listed"
                    rows="5"
                    cols="30"
                    class="custom_text_area"
                />
            </div>
        </div>

        <div class="card flex custom-input justify-content-center mx-6 my-3">
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
    </div>
</template>

<script setup>
import { itemBreadeds, itemCatagories, itemOilTypes } from "@/assets/list";
import { uploadImageService } from "@/services/formService";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import Textarea from "primevue/textarea";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import ImageUploader from "./ImageUploader.vue";
import IngredienceTable from "./IngredienceTable.vue";

const store = useStore();

const props = defineProps({
    itemNumber: {
        type: Number,
        required: true,
    },
    form_data: {
        type: Object,
        default: () => {},
    },
});

const progress = computed(() => {
    return store.getters.getProgress;
});

const restaurant = ref(store.getters.getItem(props.itemNumber));
watch(
    props,
    (newVal) => {
        restaurant.value = store.getters.getItem(props.itemNumber);
    },
    { deep: true }
);

const hasFriedIngredients = ref(
    restaurant.value.has_deep_fried === "yes" ? true : false
);

watch(
    restaurant,
    (newVal) => {
        store.commit("updateItem", {
            index: props.itemNumber,
            newData: newVal,
        });
        if (newVal.has_deep_fried === "yes") {
            hasFriedIngredients.value = true;
        }
    },
    { deep: true }
);

const updateIngredientTable = (data) => {
    restaurant.value.ingredientTable = data;
};

const uploadProgress = ref(null);
const uploadError = ref(null);

const uploadFile = async (file) => {
    uploadProgress.value = 0;
    let formData = new FormData();
    formData.append("image", file);
    formData.append("itemNumber", props.itemNumber);
    formData.append("userId", store.getters.getShareLink);
    var config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
            var percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(percentCompleted);
            uploadProgress.value = percentCompleted;
        },
    };
    try {
        const { data } = await uploadImageService(formData, config);
        store.commit("updateItem", {
            index: props.itemNumber,
            newData: { image_id: data?.image_id },
        });
        uploadError.value = null;
    } catch (e) {
        console.log(e);
        uploadError.value = "Error has occured";
    }
};

const getBaseSrc = (imageID) => {
    return imageID ? `http://13.229.111.146:5000/image/${imageID}` : "";
};
const getImageUploaderName = () => {
    return `imageUploader#${props.itemNumber}`;
};
</script>

<style scoped>
.child_from_header {
    width: 100%;
    height: 100%;
    border-bottom: solid 1px #d7d8e1;
}

.header_title {
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5%;
}

.title {
    font-size: 1.25em;
    font-weight: bold;
    color: #2c3345;
    margin-bottom: 3px;
}

.sub_title {
    font-size: 0.875em;
    font-weight: bold;
    color: #2c3345;
    font-weight: 500;
    line-height: 1.6;
}

.from_body {
    width: 100%;
    height: 80%;
    border-bottom: solid 1px #d7d8e1;
}
</style>
