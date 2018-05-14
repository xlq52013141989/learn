<!--  -->
<template>
	<div>
		<li class="item" @click="handleDelete">{{content}}</li>
	</div>
</template>

<script>
export default {
    props: ["content", "index"],
    methods: {
        handleDelete() {
            this.$emit("delete", this.index);
        }
    }
};
</script>
<style scoped>
.item{
	color: red;
}
</style>