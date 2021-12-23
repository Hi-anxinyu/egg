<template>
    <div>
        <button @click="handleClick()">点击</button>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            console.log('您刚刚点击了button按钮');
        }
    }
}
</script>

<style>

</style>