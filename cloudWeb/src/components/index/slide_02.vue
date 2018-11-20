<template>
<div class="slider">
	<div class="wrap" v-if="type == 'appraise'" :class="type">
		<ul class='slide-ul' :style="{marginLeft:mleft+'px'}">
			<li>
				<a href="javascript:void(0)">
					<div class="img-box"><img src="../../static/images/index/dior.png" /></div>
					<p>中细软服务效率非常高，非常专业，价格也很公道，所有专利在中细软都有存档，让我们省去了不少麻烦。</p>
				</a>
			</li>
			<li>
				<a href="javascript:void(0)">
					<div class="img-box"><img src="../../static/images/index/huawei.png" /></div>
					<p>中细软服务效率非常高，非常专业，价格也很公道，所有专利在中细软都有存档，让我们省去了不少麻烦。</p>
				</a>
			</li>
			<li>
				<a href="javascript:void(0)">
					<div class="img-box"><img src="../../static/images/index/tcl.png" /></div>
					<p>中细软服务效率非常高，非常专业，价格也很公道，所有专利在中细软都有存档，让我们省去了不少麻烦。</p>
				</a>
			</li>
			<li>
				<a href="javascript:void(0)">
					<div class="img-box"><img src="../../static/images/index/sunlon.png" /></div>
					<p>中细软服务效率非常高，非常专业，价格也很公道，所有专利在中细软都有存档，让我们省去了不少麻烦。</p>
				</a>
			</li>
			<li>
				<a href="javascript:void(0)">
					<div class="img-box"><img src="../../static/images/index/dior.png" /></div>
					<p>中细软服务效率非常高，非常专业，价格也很公道，所有专利在中细软都有存档，让我们省去了不少麻烦。</p>
				</a>
			</li>
		</ul>
	</div>
	<div class="wrap" v-else :class="type">
		<ul class='slide-ul' :style="{marginLeft:mleft+'px'}">
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_01.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_02.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_03.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_04.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_05.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_06.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_07.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_08.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_09.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_10.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_11.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_12.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_13.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_14.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_15.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_16.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_17.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_18.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_19.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_20.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_21.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_22.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_23.jpg')" /></a>
			</li>
			<li>
				<a class="img-box" href="javascript:void(0)"><img v-lazy="require('../../static/images/index/reward_24.jpg')" /></a>
			</li>
		</ul>
	</div>
	<a class="icon icon-left" href="javascript:void(0)" @click="prevFun"></a>
	<a class="icon icon-right" href="javascript:void(0)" @click="autoPlay"></a>
</div>
</template>
<script>
export default {
	props: ['type'],
	data() {
		return {
			currentIndex: 0,
			mleft: 0,
			reLen: 24,
			isjust:true,//true为→移动 false为 ← 移动
			time1:'',//无缝滚动计时器
		}
	},
	created() {
		this.autoPlayCreated();
	},
	methods:{
		//无缝滚动
		autoPlayCreated(){
			this.time1=setInterval(()=>{
				if(this.currentIndex==20){
					this.isjust=false;
				}else if(this.currentIndex==0){
					this.isjust=true;
				}
				if(this.isjust){
					this.autoPlay()
				}else{
					this.prevFun();
				}
				
			},5000)
		},
		autoPlay() {
			if(this.reLen - this.currentIndex > 4){
				this.currentIndex+=4;
				var i = 0;
				var _this = this;
				var t = setInterval(function(){
					if(i<1220){
						i+=122; 
						_this.mleft -= 122;
					}else{
						clearInterval(t);
					}
    			},60);
			}
		},
		prevFun(){
			if(this.currentIndex > 0){
				this.currentIndex-=4;
				var i = 1220;
				var _this = this;
				var t = setInterval(function(){
					if(i>0){
						i-=122;
						_this.mleft += 122;
					}else{
						clearInterval(t);
					}
    			},60);
			}
		}
	}
}
</script>

<style scoped lang="scss">
.slider{
	position: relative;
	width: 100%;
	background-color: #f0f0f0;
	.wrap{
		position: relative;
		width: 1220px;
		padding: 40px 0;
		margin: auto;
		overflow: hidden;
		.slide-ul {
			display: flex;
			flex-direction: row;
			width: 10000px;
		}
		.slide-ul li {
			padding: 0 15px;
			transition: all .2s ease-in;
			a{
				display: block;
				width: 275px;
				padding: 50px 46px;
				box-sizing: border-box;
				background-color: white;
				cursor: default;
				.img-box{
					display: flex;
					max-width: 153px;
					height: 76px;
					justify-content: center;
					align-items: center;
				}
				p{
					margin-top: 20px;
					font-size: 14px;
					line-height: 24px;
					color: #222224;
				}
			}
			&:hover{
				position: relative;
				transform:translateY(-4px);
			}
		}
		&.approve{
			.slide-ul li{
				a{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 275px;
					height: 383px;
					padding: 0;
				}
			}
		}
	}
	.icon{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		color: #a2a2a2;
		font-size: 20px;
		z-index: 1;
		&:hover{
			color: #4a4a4a;
		}
		&.icon-left{
			left: calc(50%-640px);
		}
		&.icon-right{
			left: calc(50%+620px);
		}
	}
}
</style>
