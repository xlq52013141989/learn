<template>
	<div>
		<div>
			<input v-model="inputValue" type="text" />
			<button @click="handleSubmit">提交</button>
		</div>
		<ul class="item">
			<todo-item
				v-for="item, index in list" 
				:key="index" 
				:content="item" 
				:index="index"
				@delete="handleDelete"
			></todo-item>
		</ul>
	</div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
    data() {
        return {
            inputValue: "",
            list: []
        };
    },
    methods: {
        handleSubmit() {
            this.list.push(this.inputValue);
            this.inputValue = "";
		},
		handleDelete (index) {
			this.list.splice(index, 1);
		}
    },
    components: {
        "todo-item": TodoItem
    }
};
</script>

<style>

</style>
