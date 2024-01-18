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
            <Column field="no" header="No"></Column>
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
                    <Button
                        icon="pi pi-ban"
                        text
                        rounded
                        aria-label="Cancel"
                        @click="onClickDeleteButton(slotProps.data._id)"
                    />
                </template>
            </Column>
        </DataTable>
        <Toast />
        <ConfirmDialog></ConfirmDialog>
    </div>
</template>

<script setup>
import Button from "primevue/button";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import DataTable from "primevue/datatable";
import Toast from "primevue/toast";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { onMounted, ref } from "vue";
import Menubar from "../components/admin/menuBar.vue";
import { deletebyID, getAllForms } from "../services/adminService.js";

const confirm = useConfirm();
const toast = useToast();

const dataTableloading = ref(false);
onMounted(async () => {
    await getTableData();
});

const onClickDeleteButton = (id) => {
    confirm.require({
        message: "Do you want to delete this record?",
        header: "Delete Confirmation",
        icon: "pi pi-info-circle",
        rejectClass: "p-button-text p-button-text",
        acceptClass: "p-button-danger p-button-text",
        accept: () => {
            deleteRecord(id);
        },
        reject: () => {
            toast.add({
                severity: "error",
                summary: "Rejected",
                detail: "You have rejected",
                life: 3000,
            });
        },
    });
};

const getTableData = async () => {
    dataTableloading.value = true;
    const data = await getAllForms();
    // console.log(data);
    if (data.status === "success") {
        dataRow.value = data.data;
    } else {
        toast.add({
            severity: "error",
            summary: "Error",
            detail: "Something went wrong",
            life: 3000,
        });
    }
    dataTableloading.value = false;
};

const deleteRecord = async (id) => {
    const data = await deletebyID(id);
    if (data.status === "success") {
        toast.add({
            severity: "success",
            summary: "Success",
            detail: "Record deleted",
            life: 3000,
        });
        await getTableData();
    } else {
        toast.add({
            severity: "error",
            summary: "Error",
            detail: "Something went wrong",
            life: 3000,
        });
    }
};

let serialNb = 0;
const getSerialNumber = () => {
    serialNb = serialNb + 1;
    return serialNb;
};
const dataRow = ref();
</script>
