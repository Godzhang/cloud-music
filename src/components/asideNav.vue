<template>
	<article class="aside-box">
		<transition name="fade" @touchmove.stop.prevent>
			<section class="wrap-cover" v-show="navFlag" @click="hideNav"></section>
		</transition>
		<transition name="slide">
			<section class="aside-nav" v-show="showNav">
				<article class="scroll-area">
					<article class="nav-header">
						<article class="nav-header-bg">
							<img :src="navHeaderBg" alt="" />
							<div class="header-cover" v-if="isNight"></div>
						</article>
						<article class="user-pic">
							<img :src="userPic" alt="" />
						</article>
						<article class="username">
							<span>{{ username }}</span>
							<em href="javascript:;" class="user-level">Lv.{{ level }}</em>
						</article>
						<article class="user-sign">
							<i v-show="!signFlag"></i>
							<a href="javascript:;" @click="changeSigned">{{signTxt}}</a>
						</article>
					</article>
					<article class="nav-list" :class="{'nav-night-list': isNight}">
						<side-list iconclass="envelope-o" sidetitle="我的消息" desc=""></side-list>
						<side-list iconclass="tags" sidetitle="我的会员" desc="2018.11.24到期"></side-list>
						<side-list iconclass="shopping-cart" sidetitle="商城" desc=""></side-list>
						<side-list iconclass="cube" sidetitle="在线听歌免流量" desc=""></side-list>
						<split height="5px" background="#f3f3f3" :isNight="isNight"></split>
						<side-list iconclass="user-o" sidetitle="我的好友" desc=""></side-list>
						<side-list iconclass="tags" sidetitle="附近的人" desc=""></side-list>
						<split height="5px" background="#f3f3f3" :isNight="isNight"></split>
						<side-list iconclass="tags" sidetitle="个性换肤" desc="官方红"></side-list>
						<side-list iconclass="tags" sidetitle="听歌识曲" desc=""></side-list>
						<side-list iconclass="tags" sidetitle="定时停止播放" desc=""></side-list>
						<side-list iconclass="tags" sidetitle="扫一扫" desc=""></side-list>
						<side-list iconclass="tags" sidetitle="音乐闹钟" desc=""></side-list>
						<side-list iconclass="tags" sidetitle="驾驶模式" desc=""></side-list>
						<side-list iconclass="tags" sidetitle="音乐云盘" desc=""></side-list>
					</article>
				</article>
					
				<article class="nav-footer" :class="{'nav-night-footer': isNight}">
					<ul>
						<li @click="changeMode">
							<template v-if="!isNight">
								<i class="fa fa-moon-o"></i>
								<span>夜间模式</span>
							</template>
							<template v-else>
								<i class="fa fa-sun-o"></i>
								<span>日间模式</span>
							</template>
						</li>
						<li><i class="fa fa-cog"></i><span>设置</span></li>
						<li><i class="fa fa-power-off"></i><span>退出</span></li>
					</ul>
				</article>
			</section>
		</transition>
	</article>
</template>
<script>
import sideList from './sideList'
import split from './split'

export default {
	props: ['navShow'],
	components: {
		sideList,
		split
	},
	data(){
		return {
			navHeaderBg: require('../assets/nav-header-bg.jpg'),
			userPic: require('../assets/user-pic.jpg'),
			username: '克里斯奇',
			level: 8,
			signTxt: '签到',
			signFlag: false,
			isNight: false
		}
	},
	computed: {
		showNav(){
			return this.navShow;
		},
		navFlag(){
			return this.navShow;
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
		},
		hideNav(){
	  		this.$emit('close-nav');
	  	},
	  	changeMode(){
	  		this.isNight = !this.isNight;
	  	}
	}
}
</script>
<style scoped lang="scss">
.wh{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.aside-nav{
	position: absolute;
	top: 0;
	left: 0;
	width: pm(300px);
	height: 100%;
	background: #fff;
	z-index: 1001;
}
.scroll-area{
	position: absolute;
	top: 0;
	bottom: pm(50px);
	left: 0;
	width: 100%;
	overflow: auto;
}
.nav-header{
	position: relative;
	width: 100%;
	height: pm(173px);
}
.nav-header-bg{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	img{
		width: 100%;
		height: 100%;
	}
}
.header-cover{
	@extend .wh;
	background: rgba(0,0,0,.4);
	z-index: 1001;
}
.user-pic{
	position: absolute;
	top: pm(36px);
	left: pm(20px);
	width: pm(80px);
	border-radius: 50%;
	overflow: hidden;
	img{
		width: 100%;
	}
}
.username{
	position: absolute;
	top: pm(135px);
	left: pm(20px);
	height: pm(24px);
	font-size: pm(14px);
	color: #fff;
	span{
		display: inline-block;
		margin-right: pm(5px);
		vertical-align: middle;
	}
	.user-level{
		height: pm(20px);
		padding: 0 pm(5px);
		line-height: pm(20px);
		border: 1px solid #eee;
		border-radius: pm(15px);
		font-size: pm(12px);
		color: #fff;
		vertical-align: middle;
	}
}
.user-sign{
	position: absolute;
	top: pm(133px);
	right: pm(20px);
	border: 1px solid #fff;
	border-radius: pm(15px);
	padding: 0 pm(10px);
	font-size: 0;
	a{
		display: inline-block;
		height: pm(20px);
		line-height: pm(20px);		
		font-size: pm(14px);
		color: #fff;
		vertical-align: middle;
	}
	i{
		display: inline-block;
		width: pm(12px);
		height: pm(12px);
		margin-right: pm(5px);
		background: url(../assets/sign.png) 0 center no-repeat;
		background-size: pm(12px) pm(12px);
		vertical-align: middle;
	}
}
.wrap-cover{
	@extend .wh;
	background: rgba(0,0,0,.5);
}
.fade-enter-active, .fade-leave-active,
.slide-enter-active, .slide-leave-active{
	transition: all .5s;
}
.fade-enter, .fade-leave-to{
	opacity: 0;
}
.slide-enter, .slide-leave-to{
	transform: translateX(-(pm(300px)));
}
.nav-footer{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: pm(50px);
	line-height: pm(50px);
	border-top: 1px solid #d7d7d7;
	background: #fff;
	ul{
		display: -webkit-box;
		display: -webkit-flex-box;
		display: flex;
		width: 100%;
		height: 100%;
	}
	li{
		flex-grow: 1;
		text-align: center;
		font-size: pm(16px);
		cursor: pointer;
		i{
			width: pm(16px);
			height: pm(16px);
			margin-right: pm(5px);
		}
	}
	li:nth-child(1){
		flex-grow: 1.5;
	}
}
.nav-night-footer{
	background: #171b1e;
	color: #808483;
	border-color: #333;
}
</style>