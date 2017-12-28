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
			<router-link to="/search">
				<i class="fa fa-search"></i>
			</router-link>
		</div>
    </div>

    <div class="content">
    	<router-view></router-view>
    </div>
	<aside-nav :navShow="isNavShow" @close-nav="closeNav"></aside-nav>    
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
      isNavShow: false
    }
  },
  methods: {
  	showNav(){
  		this.isNavShow = true;
  	},
  	closeNav(){
  		this.isNavShow = false;
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

</style>
