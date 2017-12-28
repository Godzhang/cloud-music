<template>
	<div class="search-container">
		<div class="search-header">
			<a href="" class="close-search"><i class="fa fa-angle-left"></i></a>
			<div class="input-box">
				<input type="text" v-model="searchContent" :placeholder="placeholder" />
				<i class="fa fa-close" v-show="!!searchContent" @click="searchContent = ''"></i>
			</div>
		</div>
		<div class="other-link">
			<router-link to="/singercategory">
				<i class="fa fa-user-o"></i>
				<span>歌手分类</span>
				<i class="fa fa-angle-right"></i>
			</router-link>
		</div>
		<div class="hot-search">
			<div class="hot-search-title">热门搜索</div>
			<ul class="hot-search-list">
				<li v-for="hot in hots">{{hot.first}}</li>
			</ul>
		</div>
		<div class="search-history">
			<ul>
				<li>
					<i class="fa fa-tag"></i>
					<em>
						<span>As Time Goes By</span>
						<i class="fa fa-close right"></i>
					</em>						
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			searchContent: '',
			placeholder: 'We are the Champions',
			hots: [],
			historys: []
		}
	},
	mounted(){
		this.$http.get('/src/json/hotsearch.json')
		.then((res) => {
			this.hots = res.data.result.hots;
		}, (error) => {
			console.log(error);
		});
	}
}
</script>
<style lang="scss" scoped>
.search-header{
	display: flex;
	width: 100%;
	height: 8vh;
	background: #c20c0c;
	align-items: center;
}
.close-search{
	width: 30px;
	height: 30px;
	margin: 0 10px;
	font-size: 30px;
	text-align: center;
	color: #fff;
}
.input-box{
	position: relative;
	width: 80%;
	height: 5vh;
	border-bottom: 1px solid rgba(255,255,255,.6);
	input{
		display: inline-block;
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		background: none;
		font-size: 16px;
		line-height: 100%;
		color: #fff;
	}
	i{
		position: absolute;
		top: 50%;
		right: 0;
		width: 30px;
		height: 30px;
		margin-top: -15px;
		font-size: 20px;
		color: #fff;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
}
input::-webkit-input-placeholder{
    color: #fff;
    opacity: .6;
}
.other-link{
	width: 100%;
	height: 7vh;
	border-bottom: 1px solid #d9dde0;
	a{
		display: block;
		line-height: 7vh;
		font-size: 16px;
		color: #5d6160;
		text-align: center;
		i,span{
			margin-right: 5px;
		}
		i{
			color: #ccc;
		}
	}
}
.hot-search{
	padding: 2vh 3vw;
}
.hot-search-title{
	height: 3vh;
	margin-bottom: 10px;
	line-height: 3vh;
	font-size: 12px;
	color: #999;
}
.hot-search-list{
	overflow: hidden;
}
.hot-search-list li{
	float: left;
	height: 4vh;
	margin: 0 10px 10px 0;
	line-height: 4vh;
	padding: 0 10px;
	border: 1px solid rgba(0,0,0,.1);
	border-radius: 20px;
	color: #000;
	font-size: 14px;
	overflow: hidden;
	cursor: pointer;
}
.search-history{
	li{
		display: flex;
		height: 50px;
		line-height: 50px;		
		i{
			width: 50px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 14px;
			color: #999;
		}
		em{
			width: calc(100% - 50px);
			border-bottom: 1px solid #dadee1;
		}
		span{
			font-size: 14px;
		}
	}
}
</style>