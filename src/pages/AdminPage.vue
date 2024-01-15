<template>
    <Menubar userName="Esaa" />
    <div class="card m-5">
        <DataTable
            :value="dataRow"
            paginator
            :rows="5"
            :rowsPerPageOptions="[5, 10, 20, 50]"
            tableStyle="min-width: 50rem"
            :loading="dataTableloading"
        >
            <template #header>
                <div
                    class="flex flex-wrap align-items-center justify-content-between gap-2"
                >
                    <span class="text-xl text-900 font-bold"
                        >Gourmetmiles Digitize My Menu</span
                    >
                </div>
            </template>
            <Column field="_id" header="Serial">
                <template #body="slotProps">
                    {{ getSerialNumber() }}
                </template>
            </Column>
            <Column field="first_name" header="First Name"></Column>
            <Column field="restaurant_name" header="Restaurent Name"></Column>
            <Column field="contact_email" header="contact_email"></Column>
            <Column field="status" header="Status"></Column>
            <Column field="updatedAt" header="Updated"></Column>
            <Column field="_id" header="Action">
                <template #body="slotProps">
                    <router-link
                        size="small"
                        :to="'admin/' + slotProps.data._id"
                        ><Button link icon="pi pi-eye" text rounded
                    /></router-link>
                    <Button icon="pi pi-ban" text rounded aria-label="Cancel" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { onMounted, ref } from "vue";
import Menubar from "../components/admin/menuBar.vue";
import { getAllForms } from "../services/adminService.js";
const dataTableloading = ref(false);
onMounted(async () => {
    dataTableloading.value = true;
    const data = await getAllForms();
    // console.log(data);
    if (data.status === "success") {
        dataRow.value = data.data;
    }
    dataTableloading.value = false;
});
let serialNb = 0;
const getSerialNumber = () => {
    serialNb = serialNb + 1;
    return serialNb;
};
const dataRow = ref();
</script>
