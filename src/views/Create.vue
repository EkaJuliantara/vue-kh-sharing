<template>
	<div class="row">
		<div class="col">
			<form @submit.prevent="storeHandler" class="form">
				<div class="form-group">
					<label>Judul</label>
					<input v-model="post.title" type="text" name="title" class="form-control">	
				</div>
				<div class="form-group">
					<label>Deskripsi</label>
					<textarea v-model="post.desc" name="deskripsi" class="form-control"></textarea>
				</div>
				<button type="submit" class="btn btn-default">Simpan</button>
			</form>
		</div>    
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		data: () => ({
			post: {
				title: null,
				desc: null,
			}
		}),
		methods: {
			...mapActions({
				storePost: 'post/store',
			}),
			storeHandler() {
				this.storePost(this.post)
					.then(() => {
						this.post = { title: null, desc: null, }
						console.log('The post was added.')
					})
					.catch(err => {
						alert('Judul & deskipsi tidak boleh kosong')
            console.log(err)
          });
			},
		},
	}
</script>