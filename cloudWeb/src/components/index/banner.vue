<template>
<div class="carousel-wrap">
    <ul tag="ul" class='slide-ul' >
        <li v-for="(list,index) in slideList" :key="index">
            <a :href="list.clickUrl" :class="list.css" :target="list.target">
				
                <!-- <img :src="list.image" /> -->
            </a>
        </li>
    </ul>
    <div class="carousel-items" v-if='slideList.length>1'>
        <span v-for="(item,index) in slideList" :key="index"></span>
    </div>
	<a class="icon icon-left" href="javascript:void(0)" v-if='slideList.length>1'></a>
	<a class="icon icon-right" href="javascript:void(0)" v-if='slideList.length>1'></a>
</div>
</template>
<script>
//两张图片的时候轮播切换会有个空白 不知道怎么改 暂时放了一张 注释了其他的
import {LbMove} from '../../static/js/util.js'
import Api from '../../static/js/api2.js'

export default {
	data() {
		return {
			slideList: [
				{
					"clickUrl": "javascript:void(0);",
					"image": require('../../static/images/index/banner-index.jpg'),
					'css':'index-banner',
					'target':"_self"
				},
				// {
				// 	"clickUrl": "#",
				// 	"image": require('../../static/images/index/banner-index.jpg'),
				// 	'css':'index-banner'
				// },
				// {
				// 	"clickUrl": "#",
				// 	"image": require('../../static/images/index/banner-index.jpg'),
				// 	'css':'index-banner'
				// },
				// {
				// 	"clickUrl": "#",
				// 	"image": require('../../static/images/index/banner.jpg'),
				// 	'css':'index-banner'
				// },
			]
		}
	},
	created () {
		this.getActivityTime();
		
            // path: '/DoubleEleven/BR09', // 2018双十一活动9日商标专场
         
        
            // path: '/DoubleEleven/LA08', // 2018双十一活动8日法律专场
         
        
            // path: '/DoubleEleven/PA07', // 2018双十一活动7日专利专场
          
            // path: '/DoubleEleven/TR06', // 2018双十一活动6日交易专场
        
        
            // path: '/DoubleEleven/CO05', // 2018双十一活动5日品牌专场
	},
	methods:{
		getActivityTime(){
			Api.getActivityTime().then(res=>{
				console.log(res,"⌚");
				if(res.data.code==200){
					if(res.data.data.one==1){
						this.slideList.pop();
						let data={
							clickUrl:'/DoubleEleven/CO05',
							css:'CO05-banner',
							'target':"_blank"
						}
						this.slideList.push(data);
					}
					if(res.data.data.two==1){
						this.slideList.pop();
						let data={
							clickUrl:'/DoubleEleven/TR06',
							css:'TR06-banner',
							'target':"_blank"
						}
						this.slideList.push(data);
					}
					if(res.data.data.three==1){
						this.slideList.pop();
						let data={
							clickUrl:'/DoubleEleven/PA07',
							css:'PA07-banner',
							'target':"_blank"
						}
						this.slideList.push(data);
					}
					if(res.data.data.four==1){
						this.slideList.pop();
						let data={
							clickUrl:'/DoubleEleven/LA08',
							css:'LA08-banner',
							'target':"_blank"
						}
						this.slideList.push(data);
						
					}
					if(res.data.data.five==1){
						let data={
							clickUrl:'/DoubleEleven/BR09',
							css:'BR09-banner',
							'target':"_blank"
						}
						this.slideList.unshift(data);
						this.slideList.push({
							"clickUrl": "#",
							"image": require('../../static/images/index/banner-index.jpg'),
							'css':'index-banner',
							'target':"_self"
						})
					}
					if(res.data.data.six==1){
						let data={
							clickUrl:'/DoubleEleven/BR09',
							css:'BR09-banner',
							'target':"_blank"
						}
						this.slideList=[data];
					}
					setTimeout(() => {
						this.broadcastRun();
					}, 10);
					
				}
			})
		},
		broadcastRun(){
			if(this.slideList.length > 1){
			//滚动元素，左切换按钮，右切换按钮，切换元素个数,滚动方式，切换方向，是否自动滚动，滚动距离，滚动时间，滚动间隔，显示个数
				LbMove($('.carousel-wrap'),$('.carousel-wrap .icon-left'),$('.carousel-wrap .icon-right'),$('.carousel-wrap .carousel-items'),true,'left',true,$('.carousel-wrap').width(),1000,4000,1);
			}
		}
	},
    mounted(){
		// if(this.slideList.length > 1){
		// 	//滚动元素，左切换按钮，右切换按钮，切换元素个数,滚动方式，切换方向，是否自动滚动，滚动距离，滚动时间，滚动间隔，显示个数
        // 	LbMove($('.carousel-wrap'),$('.carousel-wrap .icon-left'),$('.carousel-wrap .icon-right'),$('.carousel-wrap .carousel-items'),true,'left',true,$('.carousel-wrap').width(),1000,4000,1);
		// }
		this.broadcastRun()
    },
}
</script>

<style scoped lang="scss">
.carousel-wrap {
	position: relative;
  height: 420px;
	width: 100%;
  overflow: hidden;
	.slide-ul {
		position: relative;
		overflow: hidden;
		li {
			float: left;
			width: 100vw;
			a{
				display: block;
				height: 420px;
				&.index-banner{
					background:url(../../static/images/index/banner-index.jpg) center center no-repeat;
				}
				&.CO05-banner{
					background:url(../../static/images/index/CO05-index.jpg) center center no-repeat;
				}
				&.TR06-banner{
					background:url(../../static/images/index/TR06-index.jpg) center center no-repeat;
				}
				&.PA07-banner{
					background:url(../../static/images/index/PA07-index.jpg) center center no-repeat;
				}
				&.LA08-banner{
					background:url(../../static/images/index/LA08-index.jpg) center center no-repeat;
				}
				&.BR09-banner{
					background:url(../../static/images/index/BR09-index.jpg) center center no-repeat;
				}
			}
		}
	}
	.carousel-items{
		position: absolute;
		width: 100%;
		bottom: 20px;
		text-align: center;
		overflow: hidden;
		z-index: 1;
		span{
			display: inline-block;
			height: 12px;
			width: 12px;
			margin: 0 5px;
			border-radius: 50%;
			background-color: white;
			&.cur{
				background-color: #e52e3a;
			}
		}
	}
}
.icon{
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 48px;
	height: 48px;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 50%;
	color: white;
	font-size: 20px;
	background-color: rgba(255,76,58,.8);
	z-index: 10;
	&.icon-left{
		left: calc(50%-658px);
	}
	&.icon-right{
		left: calc(50%+610px);
	}
	&:hover{
		background-color: rgba(255,76,58,1);
	}
}

</style>
