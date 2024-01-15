<template>
    <div>
        <Card class="m-5">
            <template #title>
                <div
                    class="flex flex-wrap align-items-center justify-content-between gap-2"
                >
                    <span class="text-xl text-900 font-bold">
                        <div class="card flex justify-content-center">
                            <Breadcrumb :home="home" :model="items">
                                <template #item="{ item, props }">
                                    <router-link
                                        v-if="item.route"
                                        v-slot="{ href, navigate }"
                                        :to="item.route"
                                        custom
                                    >
                                        <a
                                            :href="href"
                                            @click="navigate"
                                            style="text-decoration: none"
                                        >
                                            <span
                                                :class="[
                                                    item.icon,
                                                    'text-color',
                                                ]"
                                            />
                                            <span
                                                class="text-primary font-semibold"
                                                >{{ item.label }}</span
                                            >
                                        </a>
                                    </router-link>
                                    <a
                                        v-else
                                        :href="item.url"
                                        :target="item.target"
                                    >
                                        <span class="text-color">{{
                                            item.label
                                        }}</span>
                                    </a>
                                </template>
                            </Breadcrumb>
                        </div>
                    </span>
                    <span class="text-xl text-900 font-bold">
                        <Button @click="props.exportFunction">Export</Button>
                    </span>
                </div>
            </template>
            <template #content>
                <div class="formgrid grid mx-4">
                    <div class="field col">
                        <div class="info-label">Restaurant Name:</div>
                        <div class="info-value">
                            {{ firstPageData.restaurant_name }}
                        </div>

                        <div class="info-label">City:</div>
                        <div class="info-value">
                            {{ firstPageData.restaurent_city }}
                        </div>

                        <div class="info-label">Zip Code:</div>
                        <div class="info-value">
                            {{ firstPageData.resturent_zip_code }}
                        </div>

                        <div class="info-label">Address 1:</div>
                        <div class="info-value">
                            {{ firstPageData.restaurent_address_1 }}
                        </div>
                    </div>
                    <div class="field col">
                        <div class="info-label">Address 2:</div>
                        <div class="info-value">
                            {{ firstPageData.restaurent_address_2 }}
                        </div>

                        <div class="info-label">State:</div>
                        <div class="info-value">
                            {{ firstPageData.restaurent_state }}
                        </div>

                        <div class="info-label">Location Number:</div>
                        <div class="info-value">
                            {{ firstPageData.restaurent_location_nb }}
                        </div>
                    </div>

                    <div class="field col">
                        <div class="info-label">Contact Person:</div>
                        <div class="info-value">
                            {{ firstPageData.first_name }}
                            {{ firstPageData.last_name }}
                        </div>

                        <div class="info-label">Phone Number:</div>
                        <div class="info-value">
                            {{ firstPageData.restaurent_phone_nb }}
                        </div>

                        <div class="info-label">Contact Email:</div>
                        <div class="info-value">
                            {{ firstPageData.contact_email }}
                        </div>
                    </div>
                </div>
                <!-- <p class="m-0">
                    {{ firstPageData }}
                </p> -->
            </template>
        </Card>
    </div>
</template>

<script setup>
import Card from "primevue/card";

import Breadcrumb from "primevue/breadcrumb";

import Button from "primevue/button";
import { ref } from "vue";

const home = ref({
    icon: "pi pi-home",
    route: "/",
});
const items = ref([
    { label: "Admin", route: "/admin" },
    { label: "Restaurants Information" },
]);

const props = defineProps({
    firstPageData: {
        type: Object,
        required: true,
    },
    exportFunction: {
        type: Function,
        required: true,
    },
});
</script>

<style scoped>
/* Add your custom styles here */

.restaurant-info {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.column {
    flex: 1;
    padding: 0 20px;
}

.info-label {
    font-weight: bold;
}

.info-value {
    margin-bottom: 10px;
}
</style>
