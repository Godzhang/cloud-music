<template>
	<section class="aside-nav">
		<article class="nav-header">
			<article class="nav-header-bg">
				<img :src="navHeaderBg" alt="" />
			</article>
			<article class="user-pic">
				<img :src="userPic" alt="" />
			</article>
			<article class="username">
				<span>{{ username }}</span>
				<a href="javascript:;" class="user-level">Lv.{{ level }}</a>
			</article>
			<article class="user-sign">
				<a href="javascript:;" @click="changeSigned">{{signTxt}}</a>
			</article>
		</article>
		<article class="nav-list">
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</article>
		<article class="nav-footer">			
		</article>
	</section>
</template>
<script>
export default {
	data(){
		return {
			navHeaderBg: require('../assets/nav-header-bg.jpg'),
			userPic: require('../assets/user-pic.jpg'),
			username: '克里斯奇',
			level: 8,
			signTxt: '签到',
			signFlag: false
		}
	},
	methods: {
		changeSigned(){
			this.signFlag = !this.signFlag;
			if(this.signFlag){
				this.signTxt = '已签到';
			}else{
				this.signTxt = '签到';
			}
		}
	}
}
</script>
<style scoped lang="scss">
.aside-nav{
	position: absolute;
	top: 0;
	left: 0;
	width: 80%;
	height: 100%;
	background: #fff;
}
.nav-header{
	width: 100%;
	height: 25%;
	
}
.nav-header-bg{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	img{
		width: 100%;
	}
}
.user-pic{
	position: absolute;
	top: 30px;
	left: 20px;
	width: 25%;
	// height: ;
	border-radius: 50%;
	overflow: hidden;
	img{
		width: 100%;
	}
}
.username{
	position: absolute;
	top: 130px;
	left: 20px;
	height: 24px;
	font-size: 14px;
	color: #fff;
	span{
		display: inline-block;
		margin-right: 5px;
		vertical-align: middle;
	}
	.user-level{
		height: 20px;
		padding: 0 5px;
		line-height: 20px;
		border: 1px solid #eee;
		border-radius: 15px;
		font-size: 12px;
		color: #fff;
		vertical-align: middle;
	}
}
.user-sign{
	position: absolute;
	top: 130px;
	right: 20px;
	a{
		display: block;
		height: 20px;
		line-height: 20px;
		padding: 0 10px;
		border: 1px solid #fff;
		border-radius: 15px;
		font-size: 14px;
		color: #fff;
	}	
}
@media screen and (max-width: 320px){
	.username{top: 105px;}
	.user-sign{top: 105px;}
}
</style>