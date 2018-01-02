<template>
	<div class="mainSection">
		<div class="main-tab">
			<router-link to="/mainSec/music">
				<span>音乐</span>
			</router-link>
			<router-link to="/mainSec/video">
				<span>视频</span>
			</router-link>
			<router-link to="/mainSec/radio">
				<span>电台</span>
			</router-link>
		</div>
		<div class="main-content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.mainSection{
	width: 100vw;
	height: 84vh;
	overflow: scroll;
}
.main-tab{
	display: -webkit-box;
	display: flex;
	height: 6vh;
	justify-content: space-between;
	background: #fcffff;
	a{
		flex-grow: 1;
		text-align: center;
		color: #6a6a6a;
		span{
			display: inline-block;
			height: 6vh;
			line-height: 6vh;
			padding: 0 20px;
			font-size: 16px;
			box-sizing: border-box;
		}
	}
	.router-link-active{
		color: #cc3b38;
		span{
			border-bottom: 3px solid #cc3b38;
		}
	}
}
.main-content{
	height: 78vh;
}
</style>