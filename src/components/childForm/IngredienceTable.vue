<template>
    <div style="overflow-x: auto">
        <form>
            <table>
                <thead>
                    <tr>
                        <th style="width: 30%">Weight (in Grams)</th>
                        <th style="width: 50%">Ingredient Name</th>
                        <th style="width: 20%"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(ingredient, index) in ingredients" :key="index">
                        <td v-if="editRow != index">{{ ingredient.weight }}</td>
                        <td v-else>
                            <input v-model="editWeight" type="number" />
                        </td>

                        <td v-if="editRow != index">{{ ingredient.name }}</td>
                        <td v-else>
                            <input
                                v-model="editName"
                                type="text"
                                style="width: 100%"
                            />
                        </td>
                        <td v-if="editRow != index">
                            <Button
                                severity="warning"
                                style="height: 10px; weight: 10px"
                                rounded
                                icon="pi pi-minus-circle"
                                size="small"
                                text
                                aria-label="Filter"
                                @click="deleteIngredient(index)"
                            />

                            <Button
                                severity="warning"
                                style="height: 10px; weight: 10px"
                                text
                                size="small"
                                rounded
                                icon="pi pi-pencil"
                                @click="edit(index)"
                            />
                        </td>
                        <td v-else>
                            <Button
                                style="height: 10px"
                                @click="updateIngredient(index)"
                                rounded
                                >Update
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                v-model="newIngredient.weight"
                                type="number"
                            />
                        </td>
                        <td>
                            <input
                                v-model="newIngredient.name"
                                type="text"
                                style="width: 100%"
                            />
                        </td>
                        <td>
                            <Button
                                severity="warning"
                                rounded
                                style="height: 10px"
                                @click.prevent="addIngredient"
                                type="submit"
                                >Save/Add
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</template>

<script setup>
import Button from "primevue/button";
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
    ingredients_data: {
        type: Array,
        default: [],
    },
    itemNumber: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(["update:ingredients_table"]);

const ingredients = computed({
    get() {
        return props.ingredients_data;
    },
    set(value) {
        emit("update:ingredients_table", value);
    },
});
const newIngredient = ref({
    weight: "",
    name: "",
});
const editWeight = ref("");
const editName = ref("");
const editRow = ref(-1);

function addIngredient() {
    if (newIngredient.value.weight && newIngredient.value.name) {
        const copyIngredient = [...ingredients.value];
        copyIngredient.push({ ...newIngredient.value });
        // console.log("copy", copyIngredient);
        ingredients.value = copyIngredient;
        newIngredient.value.weight = "";
        newIngredient.value.name = "";
    }
}

function deleteIngredient(index) {
    ingredients.value.splice(index, 1);
}

function edit(index) {
    editRow.value = index;
    const ingredient = ingredients.value[index];
    editWeight.value = ingredient.weight;
    editName.value = ingredient.name;
}

function updateIngredient(index) {
    // Implement your logic for updating the ingredient here
    const ingredient = ingredients.value[index];
    ingredient.weight = editWeight.value;
    ingredient.name = editName.value;
    editRow.value = -1;
}
</script>

<style scoped>
.table-container {
    overflow-x: auto;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    border: 1px solid #ddd;
    border-radius: 25px;
}

th,
td {
    text-align: left;
    padding: 7px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>
