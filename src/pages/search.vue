<template>
	<div>
		<div class="search-header">
			<a href="javascript:;" @click="goBack" class="close-search"><i class="fa fa-angle-left"></i></a>
			<div class="input-box">
				<input type="text" v-model="searchContent" :placeholder="placeholder" 
				@keyup="searchAssWord" @keyup.enter="doSearch()"/>
				<i class="fa fa-close" v-show="searchContent" @click="clearSearch"></i>
			</div>
		</div>
		<div class="search-container">
			<div class="other-link" v-show="!searching">
				<router-link to="/singercategory">
					<i class="fa fa-user-o"></i>
					<span>歌手分类</span>
					<i class="fa fa-angle-right"></i>
				</router-link>
			</div>
			<div class="hot-search" v-show="!searching">
				<div class="hot-search-title">热门搜索</div>
				<ul class="hot-search-list">
					<li v-for="hot in hots" @click="doSearch(hot.first)">{{hot.first}}</li>
				</ul>
			</div>
			<div class="search-history" v-show="!searching">
				<ul>
					<li v-for="(history, index) in historys" @click="doSearch(history.first)">
						<i class="fa fa-tag"></i>
						<em>
							<span>{{ history.first }}</span>
							<i class="fa fa-close right" @click.stop="delHistory(index)"></i>
						</em>						
					</li>
				</ul>
			</div>
			<div class="result-list" v-show="searching">
				<dl class="result-item" v-for="res in results">
					<dt>
						<img :src="res.pic_small" alt="" />
					</dt>
					<dd class="song-name">
						<span>{{res.title}}</span>
						<em v-if="res.has_mv">MV</em>
					</dd>
					<dd class="song-author">
						{{res.author}}
					</dd>
					<dd class="song-btn">
						<i></i>
					</dd>
				</dl>
			</div>
			<transition name="showSearchList">
				<div class="word-list" v-if="hasSearchWords">
					<dl>
						<dt @click="doSearch(searchContent)">搜索"{{searchContent}}"</dt>
						<dd v-for="song in assWords" @click="doSearch(song.songname)"><i class="fa fa-search"></i><span>{{song.songname}}</span></dd>
					</dl>
				</div>
			</transition>
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
			historys: [],
			assWords: [],
			hasSearchWords: false,
			results: [],
			searching: false
		}
	},
	methods: {
		searchAssWord(){
			if(this.searchContent.length !== 0){
				this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.search.catalogSug&format=json&query=' + this.searchContent)
				.then((res) => {
					this.assWords = (res.data.song);
					this.hasSearchWords = true;
				}, (err) => {
					console.log(err);
				});
			}else{
				this.searching = false;
				this.hasSearchWords = false;
			}
		},
		doSearch(keyword){
			if(keyword){
				this.searchContent = keyword;
			}
			this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.search.merge&format=json&query='+ this.searchContent +'&page_no=1&page_size=50&type=-1&data_source=0&use_cluster=1')
			.then((res) => {
				this.results = res.data.result['song_info']['song_list'];
				this.hasSearchWords = false;
				this.searching = true;
			}, (err) => {
				console.log(err);
			});
		},
		clearSearch(){
			this.searchContent = '';
			this.hasSearchWords = false;
			this.searching = false;
		},
		goBack(){
			window.history.go(-1);
		},
		delHistory(index){
			this.historys.splice(index, 1);
		}
	},
	mounted(){
		//获取热门搜索
		this.$http.get('/src/json/hotsearch.json')
		.then((res) => {
			this.hots = res.data.result.hots;
		}, (error) => {
			console.log(error);
		});
		//获取搜索历史
		this.$http.get('/src/json/hotsearch.json')
		.then((res) => {
			this.historys = res.data.result.historys;
		}, (error) => {
			console.log(error);
		});
	}
}
</script>
<style lang="scss" scoped>
.search-header{
	position: relative;
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
.search-container{
	height: 84vh;
	overflow: scroll;
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
		cursor: pointer;	
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
.word-list{
	position: fixed;
	top: 8.5vh;
	left: 5vw;
	width: 90vw;
	background: #f3f3f3;
	z-index: 1002;
	transform-origin: top center;
	dt, dd{
		height: 7vh;
		padding: 0 5vw;
		line-height: 7vh;
		font-size: 14px;
		overflow: hidden;
		cursor: pointer;
	}
	dt{
		color: #517ba5;
	}
	dd{
		box-sizing: border-box;
		border-top: 1px solid #dbdbdb;
		color: #7c7c7c;
		i{
			margin-right: 10px;
			color: #bbb;
		}
	}
}
.showSearchList-enter-active, .showSearchList-leave-active{
	transition: all .3s;
}
.showSearchList-enter, .showSearchList-leave-to{
	opacity: 0;
	transform: scale(0.5) translateY(-50px);
}
.result-list{
	width: 95vw;
	padding: 2vh 0 2vh 5vw;
	.result-item+.result-item{
		border-top: 1px solid #e4e8eb;
	}
}
.result-item{
	position: relative;
	height: 8vh;
	padding: 1vh 12vw 1vh 15vw;
	font-size: 14px;
	overflow: hidden;
	cursor: pointer;
	dt{
		position: absolute;
		top: 50%;
		left: 0;
		width: 13vw;
		transform: translateY(-50%);
		cursor: pointer;
		img{
			width: 100%;
		}
	}
	.song-name{
		margin-top: 1vh;
		em{
			position: relative;
			display: inline-block;
			height: 14px;
			padding: 0 5px 0 12px;
			line-height: 14px;
			border: 1px solid #c20c0c;
			border-radius: 5px;
			font-size: 10px;
			text-align: center;
			color: #c20c0c;
			&:before{
				content: '';
				position: absolute;
				top: 3px;
				left: 4px;
				width: 0;
				height: 0;
				border-width: 4px 0 4px 6px;
				border-style: solid;
				border-color: transparent transparent transparent #c20c0c;
			}
		}
	}
	.song-name, .song-author{
		width: 65vw;
		height: 3vh;
		line-height: 3vh;
		overflow: hidden;		
	}
	.song-btn{
		position: absolute;
		top: 0;right: 0;
		width: 12vw;
		height: 100%;
		cursor: pointer;
		i{
			position: absolute;
			top: 50%;
			left: 50%;
			width: 5px;
			height: 5px;
			background: #ccc;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			&:before, &:after{
				content: '';
				position: absolute;
				left: 0;
				width: 5px;
				height: 5px;
				background: #ccc;
				border-radius: 50%;
			}
			&:before{
				top: -10px;
			}
			&:after{
				top: 10px;
			}
		}
	}
}
</style>