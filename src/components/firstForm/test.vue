<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <InputText
                class="value"
                id="value"
                name="value"
                v-model="value"
                aria-describedby="restaurent_address_2"
            />
            <label for="value">Name - Surname</label>

            <small class="p-error" id="text-error">{{
                errorMessage || "&nbsp;"
            }}</small>
            <Button type="submit" label="Submit" severity="info" class="w-5" />
        </form>
    </div>
</template>

<script setup>
// import { useToast } from "primevue/usetoast";
import { useField, useForm } from "vee-validate";

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField("value", validateField);

function validateField(value) {
    if (!value) {
        return "Name - Surname is required.";
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        // console.log(values.value);
        resetForm();
    }
});
</script>
