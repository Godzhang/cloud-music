<template>
  <div class="wrap">
    <div class="header">
    	<div class="menu-btn" @click="showNav">
    		<i class="fa fa-reorder"></i>
    	</div>
		<div class="header-nav">
			<router-link to="/localSec" class="fa fa-music"></router-link>
			<router-link to="/mainSec" class="fa fa-pinterest"></router-link>
			<router-link to="/userSec" class="fa fa-user"></router-link>
		</div>
		<div class="search-btn">
			<i class="fa fa-search"></i>
		</div>	
    </div>

    <div class="wrap-cover" v-show="navFlag" @click="hideNav"></div>

    <div class="content">
    	<router-view></router-view>
    </div>
		<transition name="nav-slide">
			<aside-nav v-show="navFlag"></aside-nav>
		</transition>
    
  </div>
</template>

<script>
import asideNav from '@/components/asideNav'

export default {
	components: {
		asideNav
	},
  data () {
    return {
      isShowCover: false,
      navFlag: false
    }
  },
  methods: {
  	showNav(){
  		this.navFlag = true;
  	},
  	hideNav(){
  		this.navFlag = false;
  	}
  }
}
</script>
<style lang="scss">
.wrap{
	position: relative;
	width: 100%;
	height: 100%;
}
.header{
	width: 100%;
	height: 50px;
	background: #c20c0c;
	overflow: hidden;
}
.header i{
	font-size: 20px;
}
.menu-btn, .search-btn{
	position: absolute;
	top: 0;
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 50px;
	cursor: pointer;
	i{
		color: #fff;
	}
}
.menu-btn{left: 0;}
.search-btn{right: 0;}
.header-nav{
	display: -webkit-box;
	display: flex;
	width: 100%;
	height: 50px;
	line-height: 50px;
	justify-content: center;
	a{
		font-size: 24px;
		padding: 0 10px;
		line-height: 50px;
		color: #ccc;
	}
	.router-link-active{
		color: #fff;
	}
}
.wrap-cover{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.8);
}
.nav-slide-enter-active, .nav-slide-leave-active{
	transition: all .5s;
}
.nav-slide-enter, .nav-slide-leave-to{
	transform: translateX(-300px);
}
</style>
