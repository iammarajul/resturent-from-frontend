<template>
    <form class="container" @submit.prevent="onSubmit">
        <div class="from_header">
            <div class="header_title">
                <div class="title">Digitize My Menu</div>
                <div class="sub_title">powered by Gourmetmiles</div>
            </div>
        </div>

        <div class="from_body">
            <div
                class="card flex justify-content-center custom-input mx-6 my-3"
            >
                <div class="flex flex-column gap-2 w-full">
                    <label for="restaurent_name"
                        >Restaurant Name
                        <span class="text-red-600">*</span></label
                    >
                    <InputText
                        class="p-inputtext-sm"
                        id="restaurent_name"
                        name="restaurent_name"
                        v-model="restaurant_name"
                        aria-describedby="rastaurent_name"
                    />
                    <!-- <small id="rastaurent_name">Restaurant Name</small> -->
                    <small
                        v-if="errors.restaurant_name"
                        class="p-error"
                        id="restaurent_name"
                        >{{ errors.restaurant_name }}</small
                    >
                </div>
            </div>

            <div class="card flex justify-content-center mx-6 my-3">
                <div class="flex flex-column gap-2 w-full">
                    <label for="restaurent_address_1"
                        >Restaurant Address (Primary)
                        <span class="text-red-600">*</span></label
                    >
                    <InputText
                        class="p-inputtext-sm"
                        id="restaurent_address_1"
                        name="restaurent_address_1"
                        v-model="restaurent_address_1"
                        aria-describedby="restaurent_address_1"
                    />
                    <small
                        v-if="errors.restaurent_address_1"
                        class="p-error"
                        id="restaurent_address_1"
                        >{{ errors.restaurent_address_1 }}</small
                    >
                    <small id="restaurent_address_1">Street Address</small>
                </div>
            </div>

            <div class="card flex justify-content-center mx-6 my-3">
                <div class="flex flex-column gap-2 w-full">
                    <InputText
                        class="p-inputtext-sm"
                        id="restaurent_address_2"
                        name="restaurent_address_2"
                        v-model="restaurent_address_2"
                        aria-describedby="restaurent_address_2"
                    />
                    <small
                        v-if="errors.restaurent_address_2"
                        class="p-error"
                        id="restaurent_name"
                        >{{ errors.restaurent_address_2 }}</small
                    >
                    <small id="restaurent_address_2"
                        >Street Address Line 2</small
                    >
                </div>
            </div>

            <div class="flex mx-6 my-3">
                <div class="justify-content-center mr-2 w-6">
                    <div class="flex flex-column gap-2">
                        <InputText
                            class="p-inputtext-sm"
                            id="restaurent_city"
                            name="restaurent_city"
                            v-model="restaurent_city"
                            aria-describedby="restaurent_city"
                        />
                        <small
                            v-if="errors.restaurent_city"
                            class="p-error"
                            id="restaurent_name"
                            >{{ errors.restaurent_city }}</small
                        >
                        <small id="restaurent_city">City</small>
                    </div>
                </div>

                <div class="justify-content-center ml-2 w-6">
                    <div class="flex flex-column gap-2">
                        <InputText
                            class="p-inputtext-sm"
                            id="restaurent_state"
                            name="restaurent_state"
                            v-model="restaurent_state"
                            aria-describedby="restaurent_state"
                        />
                        <small
                            v-if="errors.restaurent_state"
                            class="p-error"
                            id="restaurent_state"
                            >{{ errors.restaurent_state }}</small
                        >
                        <small id="restaurent_state">State / Province</small>
                    </div>
                </div>
            </div>

            <div class="card flex justify-content-center mx-6 my-3">
                <div class="flex flex-column gap-2 w-full">
                    <InputText
                        class="p-inputtext-sm"
                        id="resturent_zip_code"
                        name="resturent_zip_code"
                        v-model="resturent_zip_code"
                        aria-describedby="resturent_zip_code"
                    />
                    <small
                        v-if="errors.resturent_zip_code"
                        class="p-error"
                        id="resturent_zip_code"
                        >{{ errors.resturent_zip_code }}</small
                    >
                    <small id="resturent_zip_code">Postal / Zip Code</small>
                </div>
            </div>

            <div class="card flex justify-content-center mx-6 my-3">
                <div class="flex flex-column gap-2 w-full">
                    <label for="restaurent_location_nb"
                        >How Many Locations?<span class="text-red-600"
                            >*</span
                        ></label
                    >
                    <InputText
                        class="p-inputtext-sm"
                        id="restaurent_location_nb"
                        name="restaurent_location_nb"
                        v-model="restaurent_location_nb"
                        aria-describedby="restaurent_location_nb"
                        placeholder="e.g. 23"
                    />
                    <small
                        v-if="errors.restaurent_location_nb"
                        class="p-error"
                        id="restaurent_location_nb"
                        >{{ errors.restaurent_location_nb }}</small
                    >
                </div>
            </div>

            <div class="flex mx-6">
                <label for="restaurent_name"
                    >Contact Name<span class="text-red-600">*</span></label
                >
            </div>

            <div class="flex mx-6 my-3">
                <div class="justify-content-center mr-2 w-6">
                    <div class="flex flex-column gap-2">
                        <InputText
                            class="p-inputtext-sm"
                            id="first_name"
                            name="first_name"
                            v-model="first_name"
                            aria-describedby="first_name"
                        />
                        <small
                            v-if="errors.first_name"
                            class="p-error"
                            id="first_name"
                            >{{ errors.first_name }}</small
                        >
                        <small id="first_name">First Name</small>
                    </div>
                </div>

                <div class="justify-content-center ml-2 w-6">
                    <div class="flex flex-column gap-2">
                        <InputText
                            class="p-inputtext-sm"
                            id="last_name"
                            name="last_name"
                            v-model="last_name"
                            aria-describedby="last_name"
                        />
                        <small
                            v-if="errors.last_name"
                            class="p-error"
                            id="last_name"
                            >{{ errors.last_name }}</small
                        >
                        <small id="last_name">Last Name</small>
                    </div>
                </div>
            </div>

            <div class="flex mx-6 my-3">
                <div class="justify-content-center mr-2 w-6">
                    <div class="flex flex-column gap-2">
                        <label for="restaurent_email"
                            >Contact Phone<span class="text-red-600"
                                >*</span
                            ></label
                        >
                        <InputText
                            class="p-inputtext-sm"
                            id="restaurent_phone_nb"
                            name="restaurent_phone_nb"
                            v-model="restaurent_phone_nb"
                            aria-describedby="restaurent_phone_nb"
                            placeholder="(000) 000-0000"
                        />
                        <small
                            v-if="errors.restaurent_phone_nb"
                            class="p-error"
                            id="restaurent_phone_nb"
                            >{{ errors.restaurent_phone_nb }}</small
                        >
                        <!-- <small id="restaurent_phone_nb">City</small> -->
                    </div>
                </div>

                <div class="justify-content-center ml-2 w-6">
                    <div class="flex flex-column gap-2">
                        <label for="contact_email"
                            >Contact Email<span class="text-red-600"
                                >*</span
                            ></label
                        >
                        <InputText
                            class="p-inputtext-sm"
                            id="contact_email"
                            name="contact_email"
                            v-model="contact_email"
                            aria-describedby="contact_email"
                        />
                        <small
                            v-if="errors.contact_email"
                            class="p-error"
                            id="contact_email"
                            >{{ errors.contact_email }}</small
                        >
                        <!-- <small id="contact_email">State / Province</small> -->
                    </div>
                </div>
            </div>

            <div class="card mx-6 my-6">
                <ProgressBar style="height: 12px" :value="0"></ProgressBar>
            </div>
        </div>

        <div class="from_footer">
            <div class="p-5 flex mx-5">
                <div class="dump-space"></div>
                <div class="footer-buttons flex">
                    <Button
                        label="Save"
                        severity="secondary"
                        class="mr-2 w-4"
                        outlined
                        @click="onSave"
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
    </form>
    <SaveModal @update:showModal="setSaveDialog" :showModal="saveDialog" />
</template>

<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import ProgressBar from "primevue/progressbar";
import { useForm } from "vee-validate";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { schema } from "../../assets/list";
import SaveModal from "../common/SaveModal.vue";

const props = defineProps({
    formData: {
        type: Object,
        required: true,
    },
});

const { useFieldModel, errors, handleSubmit } = useForm({
    validationSchema: schema,
});

const [
    restaurant_name,
    restaurent_address_1,
    restaurent_address_2,
    restaurent_city,
    restaurent_state,
    resturent_zip_code,
    restaurent_location_nb,
    first_name,
    last_name,
    restaurent_phone_nb,
    contact_email,
] = useFieldModel([
    "restaurant_name",
    "restaurent_address_1",
    "restaurent_address_2",
    "restaurent_city",
    "restaurent_state",
    "resturent_zip_code",
    "restaurent_location_nb",
    "first_name",
    "last_name",
    "restaurent_phone_nb",
    "contact_email",
]);

const store = useStore();
let formData = store.state.first_page;
watch(
    () => store.state.first_page,
    (value) => {
        formData = value;
        restoreData();
    }
);
restoreData();

function restoreData() {
    restaurant_name.value = formData.restaurant_name;
    restaurent_address_1.value = formData.restaurent_address_1;
    restaurent_address_2.value = formData.restaurent_address_2;
    restaurent_city.value = formData.restaurent_city;
    restaurent_state.value = formData.restaurent_state;
    resturent_zip_code.value = formData.resturent_zip_code;
    restaurent_location_nb.value = formData.restaurent_location_nb;
    first_name.value = formData.first_name;
    last_name.value = formData.last_name;
    restaurent_phone_nb.value = formData.restaurent_phone_nb;
    contact_email.value = formData.contact_email;
}

const onSubmit = handleSubmit(async (values) => {
    // const data = await isEmailExist(values.contact_email);
    // console.log(data);
    store.commit("setFormData", values);
});

const saveDialog = ref(false);

const setSaveDialog = (value) => {
    saveDialog.value = value;
};

const onSave = handleSubmit((values) => {
    store.commit("setFromDataWithOutIncrementPage", values);
    setSaveDialog(true);
});
</script>

<style scoped>
/* form Header start */

.from_header {
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
    font-size: 2em;
    font-weight: bold;
    color: #2c3345;
    margin-bottom: 3px;
}
.sub_title {
    font-size: 1em;
    font-weight: bold;
    color: #2c3345;
}

/* form Header end */

/* form  Footer start*/
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
/* form  Footer end*/

/* form  Body start*/

.from_body {
    width: 100%;
    height: 80%;
    border-bottom: solid 1px #d7d8e1;
}
/* form  Body end*/

.container {
    max-width: 775px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    background: transparent;
    border: solid 1px #d7d8e1;
    border-top: none;
    border-bottom: none;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
}
</style>
