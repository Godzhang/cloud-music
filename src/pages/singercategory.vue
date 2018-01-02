<template>
	<div>
		<public-head title="歌手分类"></public-head>
		<div class="singer-area-list">
			<split height="2vh" background="#f0f4f7"></split>
			<a href="javascript:;" class="singer-area-item"><span>华语男歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>华语女歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>华语乐队/组合</span></a>
			<split height="2vh" background="#f0f4f7"></split>
			<a href="javascript:;" class="singer-area-item"><span>欧美男歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>欧美女歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>欧美乐队/组合</span></a>
			<split height="2vh" background="#f0f4f7"></split>
			<a href="javascript:;" class="singer-area-item"><span>日本男歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>日本女歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>日本乐队/组合</span></a>
			<split height="2vh" background="#f0f4f7"></split>
			<a href="javascript:;" class="singer-area-item"><span>韩国男歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>韩国女歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>韩国乐队/组合</span></a>
			<split height="2vh" background="#f0f4f7"></split>
			<a href="javascript:;" class="singer-area-item"><span>其他男歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>其他女歌手</span></a>
			<a href="javascript:;" class="singer-area-item"><span>其他乐队/组合</span></a>
		</div>
	</div>	
</template>
<script>
import split from '../components/split'
import publicHead from '../components/publicHead'

export default {
	components: {
		split,
		publicHead
	},
	data(){
		return {
			
		}
	}
}
</script>
<style lang="scss" scoped>
.singer-area-list{
	height: 84vh;
	overflow: scroll;
}
.singer-area-item{
	display: block;
	height: 7.5vh;
	line-height: 7.5vh;
	background: #fff;
	text-align: right;
	span{
		display: inline-block;
		box-sizing: border-box;
		width: 95vw;
		border-bottom: 1px solid #e0e0e0;
		font-size: 14px;
		color: #363636;
		text-align: left;
	}
}
</style>