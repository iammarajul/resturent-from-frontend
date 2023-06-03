<template>
    <div class="child_from_header">
        <div class="header_title">
            <div class="title">Menu Item 1</div>
            <div class="sub_title">Enter menu item details below. Ingredient names should be as descriptive as possible (e.g., grilled white onions, Colby cheese, 80/20 ground beef, etc.).</div>
        </div>
    </div>
</template>


<script setup>
</script>

<style scoped>
.child_from_header {
    width: 100%;
    height: 100%;
    border-bottom: solid 1px #d7d8e1;
}
.header_title {
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5%;
}
.title {
    font-size: 1.25em;
    font-weight: bold;
    color: #2C3345;
    margin-bottom: 3px;
}
.sub_title {
    font-size: .875em;
    font-weight: bold;
    color: #2C3345;
    font-weight: 500;
    line-height: 1.6;
}
</style>