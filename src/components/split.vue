<template>
	<span class="split" ref="split"></span>
</template>
<script>
export default {
	props: {
		height: {
			type: String,
			default: '1vh'
		},
		background: {
			type: String,
			default: 'f3f3f3'
		},
		border: {
			type: String,
			default: 'transparent'
		},
		isNight: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		night(){
			return this.isNight;
		}
	},
	mounted(){
		this.$refs.split.style.background = this.background;
		this.$refs.split.style.height = this.height;
		this.$refs.split.style.borderColor = this.border
	},
	watch: {
		night(newVal){
			if(newVal){
				this.$refs.split.style.background = '#101417';
			}else{
				this.$refs.split.style.background = this.background;
			}
			
		}
	}
}
</script>
<style scoped lang="scss">
.split{
	display: block;
	width: 100%;
	box-sizing: border-box;
	border-width: 1px;
	border: none;
	border-top-width: 1px;
	border-top-style: bold;
	border-bottom-width: 1px;
	border-bottom-style: bold;
}
</style>