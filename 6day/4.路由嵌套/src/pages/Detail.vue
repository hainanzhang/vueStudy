<template>
<div class="page subpage" id="detail">
    {{id}}.{{name}}商品详情
</div>
</template>

<script>
export default {
    data(){
        return {
            // id: this.$route.query.id,
            // name: this.$route.query.name
            id: this.$route.params.id,
            name: this.$route.params.name
        }
    }
}
</script>

<style>
#detail{
    background: thistle;
}
</style>
