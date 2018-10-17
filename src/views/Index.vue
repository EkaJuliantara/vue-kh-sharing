<template>
	<div class="index">
		<div v-for="post in posts" :key="post.title" class="post">
			<h3>{{ post.title }}</h3>
			<p>{{ post.desc }}</p>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		computed: {
			...mapGetters({
				posts: 'post/get'
			})
		}
	}
</script>

<style scope lang="scss">
	.index {
		background: #f2f2f2;
	}
</style>