<template>
    <button class="btn">
        My button
    </button>
</template>

<script lang="ts">
export default {
    name: "UiButton",
    setup() {
        console.log("UiButton reporting for duty");
    }
}
</script>

<style lang="scss" scoped>
// $color: red
.btn {
    outline: 1px solid red
}
</style>