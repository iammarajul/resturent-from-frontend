<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Weight</th>
                    <th>Ingredient Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ingredient, index) in ingredients" :key="index">
                    <td v-if="editRow != index">{{ ingredient.weight }}</td>
                    <td v-else>
                        <input v-model="editWeight" type="text" />
                    </td>

                    <td v-if="editRow != index">{{ ingredient.name }}</td>
                    <td v-else>
                        <input v-model="editName" type="text" />
                    </td>
                    <td v-if="editRow != index">
                        <Button
                            style="height: 10px"
                            @click="deleteIngredient(index)"
                            >Delete</Button
                        >
                        <Button style="height: 10px" @click="edit(index)"
                            >Edit</Button
                        >
                    </td>
                    <td v-else>
                        <Button
                            style="height: 10px"
                            @click="updateIngredient(index)"
                            >Update</Button
                        >
                    </td>
                </tr>
                <tr>
                    <td>
                        <input v-model="newIngredient.weight" type="text" />
                    </td>
                    <td><input v-model="newIngredient.name" type="text" /></td>
                    <td>
                        <Button style="height: 10px" @click="addIngredient"
                            >Save</Button
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import Button from "primevue/button";
import { ref } from "vue";

const ingredients = ref([]);
const newIngredient = ref({
    weight: "",
    name: "",
});
const editWeight = ref("");
const editName = ref("");
const editRow = ref(-1);

function addIngredient() {
    if (newIngredient.value.weight && newIngredient.value.name) {
        ingredients.value.push({ ...newIngredient.value });
        newIngredient.value.weight = "";
        newIngredient.value.name = "";
    }
}

function deleteIngredient(index) {
    ingredients.value.splice(index, 1);
}

function edit(index) {
    editRow.value = index;
    editIngredient = { ...ingredients[index] };
}

function updateIngredient(index) {
    // Implement your logic for updating the ingredient here
    console.log("updateIngredient", ingredients[0]);
    ingredients[index].weight = editIngredient.weight;
    ingredients[index].name = editIngredient.name;
    editRow.value = -1;
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
}

button {
    margin-right: 4px;
}
</style>
