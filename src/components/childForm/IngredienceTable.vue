<template>
  <div style="overflow-x:auto">
    <form >
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
            <input v-model="editWeight" type="text"/>
          </td>

          <td v-if="editRow != index">{{ ingredient.name }}</td>
          <td v-else>
            <input v-model="editName" type="text"/>
          </td>
          <td v-if="editRow != index">
            <Button
                severity="warning"
                style="height: 10px;weight:10px"
                rounded
                icon="pi pi-minus-circle"
                size="small"
                text aria-label="Filter"
                @click="deleteIngredient(index)"
            />

            <Button severity="warning" style="height: 10px;weight:10px" text size="small" rounded icon="pi pi-pencil"
                    @click="edit(index)"/>

          </td>
          <td v-else>
            <Button
                style="height: 10px"
                @click="updateIngredient(index)"
            >Update
            </Button
            >
          </td>
        </tr>
        <tr>
          <td>
            <input v-model="newIngredient.weight" type="text"/>
          </td>
          <td><input v-model="newIngredient.name" type="text"/></td>
          <td>
            <Button severity="warning" style="height: 10px" @click="addIngredient"
            >Save
            </Button
            >
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  </div>

</template>

<script setup>
import Button from "primevue/button";
import {computed, ref} from "vue";

const emit = defineEmits(["update:data"]);
const props = defineProps({
  data:{
    type: Array,
    required: true
  }
});

const ingredients = computed({
  get() {
    console.log("Props",props.data)
    return props.data
  },set(value) {
    emit('update:data', value)
  }
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
    copyIngredient.push({...newIngredient.value});
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
  console.log("updateIngredient", ingredients[0]);
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
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}
</style>
