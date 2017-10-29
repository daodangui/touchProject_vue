<template>
	<div class="img" v-if="data">
		<img :src="data.PictureUrl" alt="" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data : null
			}
		},
		mounted() {
			this.data = this.$store.state.a.list[0];
			document.body.scrollTop=0;
		}
	}
</script>

<style lang="scss" scoped="scoped">
.img{
	width: 100%;
	height: 1.73rem;
	img{
		width: 100%;
		height: 100%;
	}
}
</style>