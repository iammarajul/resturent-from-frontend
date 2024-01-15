<template>
    <Menubar userName="Esaa" />
    <firstPageCard
        :firstPageData="fistpageData"
        :exportFunction="exportToXLSX"
    />
    <div class="card m-5">
        <DataTable
            v-model:expandedRows="expandedRows"
            :value="products"
            dataKey="id"
            @rowExpand="onRowExpand"
            @rowCollapse="onRowCollapse"
            tableStyle="min-width: 60rem"
            paginator
            :rows="5"
            :rowsPerPageOptions="[5, 10, 20, 50]"
        >
            <template #header>
                Item Table
                <!-- <div class="flex flex-wrap justify-content-end gap-2"> -->
                <!-- <Button
                        text
                        icon="pi pi-plus"
                        label="Expand All"
                        @click="expandAll"
                    />
                    <Button
                        text
                        icon="pi pi-minus"
                        label="Collapse All"
                        @click="collapseAll"
                    /> -->
                <!-- </div> -->
            </template>
            <Column field="id" header="No" style="width: 2rem"></Column>
            <!-- <Column expander style="width: 5rem" /> -->
            <Column header="Image">
                <template #body="slotProps">
                    <Image alt="Image" preview>
                        <template #indicatoricon>
                            <i class="pi pi-search"></i>
                        </template>
                        <template #image>
                            <img
                                :src="getBaseSrc(slotProps.data.image_id)"
                                :alt="slotProps.data.image_id"
                                class="w-6rem shadow-2 border-round"
                                style="object-fit: cover; height: 6rem"
                            />
                        </template>
                        <template #preview="slotProps2">
                            <img
                                :src="getBaseSrc(slotProps.data.image_id)"
                                :alt="slotProps.data.image_id"
                                :style="slotProps2.style"
                                @click="slotProps2.onClick"
                            />
                        </template>
                    </Image>
                </template>
            </Column>
            <Column field="manu_item_name" header="Name"></Column>
            <Column field="manu_item_number" header="Item Number"></Column>
            <Column field="item_category.name" header="Category"></Column>
            <Column expander style="width: 3rem" header="Ingredients" />
            <Column field="has_deep_fried" header="Deep Fried" />
            <Column
                field="deep_fried_ingredient"
                header="DeepFried ingredient"
            />
            <Column field="item_oil_type.name" header="Oils used" />
            <Column field="item_breaded.name" header="Breaded or Battered" />
            <Column
                field="ingredients_not_listed"
                header="Ingredients not listed"
            />
            <Column
                field="item_notes"
                header="Notes"
                style="width: 200px; text-overflow: ellipsis"
            />

            <template #expansion="slotProps">
                <div class="p-3">
                    <h5>
                        Ingredients Table for
                        {{ slotProps.data.manu_item_name }}
                    </h5>
                    <DataTable :value="slotProps.data.ingredientTable">
                        <Column
                            field="weight"
                            header="weight"
                            sortable
                        ></Column>
                        <Column field="name" header="Name" sortable></Column>
                    </DataTable>
                </div>
            </template>
        </DataTable>
        <Toast />
    </div>
</template>

<script setup>
import FileSaver from "file-saver";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Image from "primevue/image";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { useRoute } from "vue-router";
import * as XLSX from "xlsx";
import env from "../assets/env";
import firstPageCard from "../components/admin/firstPageCard.vue";
import Menubar from "../components/admin/menuBar.vue";
import { getFormById } from "../services/adminService";
const route = useRoute();
const routeParams = ref(route.params);

const loadingDataTable = ref(false);
const fistpageData = ref({});
const onload = async () => {
    loadingDataTable.value = true;
    const data = await getFormById(routeParams.value.id);
    if (data.status == "success") {
        // console.log(data);
        fistpageData.value = data.data.first_page;
        products.value = data.data.items;
    }
    loadingDataTable.value = false;
};

onload();

const products = ref();
const expandedRows = ref([]);
const toast = useToast();

const onRowExpand = (event) => {};
const onRowCollapse = (event) => {};
const expandAll = () => {
    expandedRows.value = products.value.reduce(
        (acc, p) => (acc[p.id] = true) && acc,
        {}
    );
    // console.log(expandedRows.value);
};
const collapseAll = () => {
    expandedRows.value = null;
};
const exportToXLSX = () => {
    // console.log("exporting");
    const workbook = XLSX.utils.book_new();
    const worksheet1 = XLSX.utils.json_to_sheet(
        [
            {
                ...fistpageData.value,
            },
        ],
        { skipHeader: false }
    );
    const worksheet2 = XLSX.utils.json_to_sheet(
        [
            {
                id: "serial",
                image: "Image",
                manu_item_name: "Name",
                manu_item_number: "Menu Item Number",
                item_category: "Menu Item Category",
                has_deep_fried: "Is Deep Fried",
                ingredientTableWeight: "Ingredient Table Weight",
                ingredientTableName: "Ingredient Table Name",
                deep_fried_ingredient: "Deep Fried Ingredient",
                item_oil_type: "Oil Type",
                item_breaded: "Item Breaded",
                ingredients_not_listed: "Ingredients Not Listed",
                item_notes: "Item Notes",
            },
        ],
        {
            skipHeader: true,
        }
    );

    // const worksheet = XLSX.utils.json_to_sheet([], { skipHeader: true });
    let currentRow = 1;

    products.value.forEach((item, index) => {
        const flatData = [
            {
                id: item.id,
                image: item.image_id,
                manu_item_name: item.manu_item_name,
                manu_item_number: item.manu_item_number,
                item_category: item.item_category?.name,
                has_deep_fried: item.has_deep_fried,
                ingredientTableWeight:
                    item.ingredientTable.length > 0
                        ? item.ingredientTable[0].weight
                        : "",
                ingredientTableName:
                    item.ingredientTable.length > 0
                        ? item.ingredientTable[0].name
                        : "",
                deep_fried_ingredient: item.deep_fried_ingredient,
                item_oil_type: item.item_oil_type?.name,
                item_breaded: item.item_breaded?.name,
                ingredients_not_listed: item.ingredients_not_listed,
                item_notes: item.item_notes,
            },
            ...item.ingredientTable.slice(1).map((obj) => ({
                ingredientTableWeight: obj.weight,
                ingredientTableName: obj.name,
            })),
        ];

        XLSX.utils.sheet_add_json(worksheet2, flatData, {
            skipHeader: true,
            origin: currentRow,
        });
        currentRow += flatData.length;
    });
    XLSX.utils.book_append_sheet(workbook, worksheet1, `Sheet1`);
    XLSX.utils.book_append_sheet(workbook, worksheet2, `Sheet2`);
    // Save the workbook
    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
    });
    const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    FileSaver.saveAs(blob, "exported_data.xlsx");
};

const getBaseSrc = (imageID) => {
    return imageID ? `${env.apiEndpoint}image/${imageID}` : "";
};
</script>
