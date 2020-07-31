<template>
    <layout-default>
        <TableItem  />
    </layout-default>
</template>

<script>

    import LayoutDefault from "../../layouts/LayoutDefault";
    import TableItem from "../../components/material/TableItem";

    export default {
        name: "UserPage",
        components: {TableItem, LayoutDefault},
        created() {
        },
    }
</script>

<style scoped>

</style>