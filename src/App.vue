<script setup>
import stripJsonComments from "strip-json-comments";
import HomePage from "./pages/HomePage.vue";

const json = '// comment\n{"data": /* comment */ "value"}\n';

console.log(JSON.parse(stripJsonComments(json)));
</script>
<template>
    <div>
        <HomePage />
    </div>
</template>
