<template>
    <form class="container">
        <div class="from_header">
            <div class="header_title">
                <div class="title">Digitize My Menu</div>
                <div class="sub_title">powered by Gourmetmiles</div>
            </div>
        </div>
        <div class="from_body"></div>
        <div class="from_footer"></div>
    </form>
</template>

<script setup></script>

<style scoped>
.container {
    max-width: 800px;
    height: 200px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: transparent;
}
.from_header {
    width: 80%;
    height: 100%;
    background-color: #e1f40f;
}
.from_body {
    width: 100%;
    height: 80%;
    background-color: #800aef;
}
.from_footer {
    width: 100%;
    height: 10%;
    background-color: #010102;
}

.header_title {
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 50%;
}
.title {
    font-size: 2em;
    font-weight: bold;
    color: #2c3345;
    margin-bottom: 3px;
}
.sub_title {
    font-size: 1em;
    font-weight: bold;
    color: #2c3345;
}
</style>
