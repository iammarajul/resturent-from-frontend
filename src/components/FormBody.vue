<template>
    <div class="from_body">
        <div class="card flex justify-content-center custom-input mx-6 my-3">
            <div class="flex flex-column gap-2 w-full">
                <label for="restaurent_name"
                    >Restaurant Name <span class="text-red-600">*</span></label
                >
                <InputText
                    class="p-inputtext-sm"
                    id="restaurent_name"
                    name="restaurent_name"
                    v-model="restaurant.name"
                    aria-describedby="rastaurent_name"
                />
                <!-- <small id="rastaurent_name">Restaurant Name</small> -->
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
                    v-model="restaurant.address_1"
                    aria-describedby="restaurent_address_1"
                />
                <small id="restaurent_address_1">Street Address</small>
            </div>
        </div>

        <div class="card flex justify-content-center mx-6 my-3">
            <div class="flex flex-column gap-2 w-full">
                <InputText
                    class="p-inputtext-sm"
                    id="restaurent_address_2"
                    name="restaurent_address_2"
                    v-model="restaurant.address_2"
                    aria-describedby="restaurent_address_2"
                />
                <small id="restaurent_address_2">Street Address Line 2</small>
            </div>
        </div>

        <div class="flex mx-6 my-3">
            <div class="justify-content-center mr-2 w-full">
                <div class="flex flex-column gap-2">
                    <InputText
                        class="p-inputtext-sm"
                        id="restaurent_city"
                        name="restaurent_city"
                        v-model="restaurant.city"
                        aria-describedby="restaurent_city"
                    />
                    <small id="restaurent_city">City</small>
                </div>
            </div>

            <div class="justify-content-center ml-2 w-full">
                <div class="flex flex-column gap-2">
                    <InputText
                        class="p-inputtext-sm"
                        id="restaurent_state"
                        name="restaurent_state"
                        v-model="restaurant.state"
                        aria-describedby="restaurent_state"
                    />
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
                    v-model="restaurant.zip_code"
                    aria-describedby="resturent_zip_code"
                />
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
                    v-model="restaurant.location_number"
                    aria-describedby="restaurent_location_nb"
                />
            </div>
        </div>

        <div class="flex mx-6">
            <label for="restaurent_name"
                >Contact Name<span class="text-red-600">*</span></label
            >
        </div>

        <div class="flex mx-6 my-3">
            <div class="justify-content-center mr-2 w-full">
                <div class="flex flex-column gap-2">
                    <InputText
                        class="p-inputtext-sm"
                        id="first_name"
                        name="first_name"
                        v-model="restaurant.first_name"
                        aria-describedby="first_name"
                    />
                    <small id="first_name">First Name</small>
                </div>
            </div>

            <div class="justify-content-center ml-2 w-full">
                <div class="flex flex-column gap-2">
                    <InputText
                        class="p-inputtext-sm"
                        id="last_name"
                        name="last_name"
                        v-model="restaurant.last_name"
                        aria-describedby="last_name"
                    />
                    <small id="last_name">First Name</small>
                </div>
            </div>
        </div>

        <div class="flex mx-6 my-3">
            <div class="justify-content-center mr-2 w-full">
                <div class="flex flex-column gap-2">
                    <label for="restaurent_email"
                        >Contact Phone<span class="text-red-600">*</span></label
                    >
                    <InputText
                        class="p-inputtext-sm"
                        id="restaurent_city"
                        name="restaurent_city"
                        v-model="restaurant.city"
                        aria-describedby="restaurent_city"
                    />
                    <small id="restaurent_city">City</small>
                </div>
            </div>

            <div class="justify-content-center ml-2 w-full">
                <div class="flex flex-column gap-2">
                    <label for="restaurent_email"
                        >Contact Email<span class="text-red-600">*</span></label
                    >
                    <InputText
                        class="p-inputtext-sm"
                        id="restaurent_state"
                        name="restaurent_state"
                        v-model="restaurant.state"
                        aria-describedby="restaurent_state"
                    />
                    <small id="restaurent_state">State / Province</small>
                </div>
            </div>
        </div>

        <div class="card mx-6 my-6">
            <ProgressBar style="height: 16px" :value="10"></ProgressBar>
        </div>
    </div>
</template>

<script setup>
import InputText from "primevue/inputtext";
import ProgressBar from "primevue/progressbar";
import { ref } from "vue";

const restaurant = ref({});
</script>

<style scoped>
.from_body {
    width: 100%;
    height: 80%;
    border: solid 1px #d7d8e1;
}
</style>
