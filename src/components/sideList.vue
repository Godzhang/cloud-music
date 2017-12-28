<template>
	<div class="nav-item">
		<i class="fa" :class="'fa-' + side_iconclass"></i>
		<span>{{side_sidetitle}}</span>
		<em v-show="!!side_desc">{{side_desc}}</em>
	</div>
</template>
<script>
export default {
	props: {
		iconclass: {
			type: String,
			default: ''
		},
		sidetitle: {
			type: String,
			default: ''
		},
		desc: {
			type: String,
			default: ''
		}
	},
	data(){
		return {
			side_iconclass: this.iconclass,
			side_sidetitle: this.sidetitle,
			side_desc: this.desc
		}
	}
}
</script>
<style scoped lang="scss">
.nav-item{
	height: 6.6vh;
	line-height: 6.6vh;
	background: #fff;
	padding: 0 10px;
	font-size: 14px;
	cursor: pointer;
	i{
		margin-right: 10px;
		font-size: 16px;
		color: #999;
	}
	em{
		float: right;
		font-size: 12px;
		color: #666;
	}
}
.nav-night-list{
	.nav-item{
		background: #171b1e;
		color: #808483;
	}
}
</style>