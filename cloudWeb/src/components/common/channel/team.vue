<template>
	<ul class="team-expert">
		<li v-for="(item, index) in team" :key="index">
			<dl>
				<dt><img v-lazy="item.img"/></dt>
				<dd>
					<h3 class="name">{{item.name}}</h3>
					<span class="line"></span>
					<h6>擅长领域</h6>
					<p>{{item.field}}</p>
					<h6>介绍</h6>
					<p class="mul-ellipsis">{{item.desc}}</p>
					<a class="btn-now" @click="openzxFn" href="javascript:void(0)">立即咨询</a>
				</dd>
			</dl>
		</li>
	</ul>
</template>
<script>
import {openzx} from '../../../static/js/util.js'
export default {
	props: ['team'],
	data() {
		return {
			
		}
	},
	methods: {
		openzxFn(){
			//打开商务通
			openzx()
		}
	}
}
</script>

<style scoped lang="scss">
.mul-ellipsis{
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; //行数
    -webkit-box-orient: vertical;
}
.team-expert{
	overflow: hidden;
	li{
		float: left;
		width: 590px;
		padding: 10px;
		background-color: white;
		margin-right: 10px;
		margin-bottom: 10px;
		box-sizing: border-box;
		box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.06);
		&:nth-child(2n){
			margin-right: 0;
		}
		&:nth-last-child(2),&:last-child{
			margin-bottom: 0;
		}
		dl{
			width: 100%;
			overflow: hidden;
			dt,dd{
				float: left;
			}
			dt{
				width: 230px;
				height: 320px;
				line-height: 320px;
				text-align: center;
				img{
					display: inline-block;
				}
			}
			dd{
				width: 340px;
				padding: 14px 10px 20px 30px;
				box-sizing: border-box;
				overflow: hidden;
				h3{
					font-size: 24px;
					line-height: 24px;
					color: #42688e;
				}
				.line{
					display: block;
					width: 26px;
					margin-top: 19px;
					border-bottom: 2px solid #cccccc;
				}
				h6{
					font-size: 14px;
					line-height: 18px;
					margin-top: 18px;
					color: #42688e;
				}
				p{
					margin-top: 7px;
					font-size: 14px;
					line-height: 22px;
					color: #666;
				}
				.btn-now{
					display: block;
					width: 80px;
					height: 24px;
					margin-top: 20px;
					font-size: 12px;
					line-height: 24px;
					color: white;
					background-color: #e52e3a;
					border-radius: 2px;
					text-align: center;
					&:hover{
						background-color: #ff3341;
					}
				}
			}
		}
	}
}
</style>
