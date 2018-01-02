<template>
	<div class="public-head">
		<a href="javascript:;" class="prev-arrow" @click="goBack"><i class="fa fa-angle-left"></i></a>
		<span class="page-title">{{ pageTitle }}</span>
	</div>
</template>
<script>
export default {
	props: ['title'],
	data(){
		return {
			pageTitle: this.title
		}
	},
	methods: {
		goBack(){
			window.history.go(-1);
		}
	}
}
</script>
<style scoped lang="scss">
.public-head{
	position: relative;
	display: flex;
	width: 100%;
	height: 8vh;
	background: #c20c0c;
	align-items: center;
}
.prev-arrow{
	width: 30px;
	height: 30px;
	margin: 0 10px;
	font-size: 30px;
	text-align: center;
	color: #fff;
}
.page-title{
	display: inline-block;
	max-width: 75vw;
	height: 30px;
	line-height: 30px;
	font-size: 16px;
	color: #fff;
	overflow: hidden;
}
</style>