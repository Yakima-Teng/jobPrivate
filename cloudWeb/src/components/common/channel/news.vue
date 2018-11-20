<template>
	<ul class="news-list">
		<li v-for="(item, index) in newsList" :key="index">
			<router-link v-if="type == 'seo'" tag="a" target="_blank" :to="url+'/'+ item.id" >
				<h4>{{item.title}}</h4>
				<dl :class="{'no-img' : item.img ==null || item.img == ''}">
					<dt v-if="item.img !=null && item.img != ''">
						<img v-lazy="item.img" :key='item.img'/>
					</dt>
					<dd>
						<p class="desc">{{item.desc}}</p>
						<p class="other"><span class="scan"><i class="icon icon-scan"></i>{{item.click}}次浏览</span><span class="time"><i class="icon icon-shizhong"></i>{{item.create_time}}</span></p>
					</dd>
				</dl>
			</router-link>
			<router-link v-else tag="a" target="_blank" :to="url+'/'+item.columnUrl+'/'+ item.id" >
				<h4>{{item.title}}</h4>
				<dl :class="{'no-img' : item.img ==null || item.img == ''}">
					<dt v-if="item.img !=null && item.img != ''">
						<img v-lazy="item.img" :key='item.img'/>
					</dt>
					<dd>
						<p class="desc">{{item.desc}}</p>
						<p class="other"><span class="scan"><i class="icon icon-scan"></i>{{item.click}}次浏览</span><span class="time"><i class="icon icon-shizhong"></i>{{item.create_time}}</span></p>
					</dd>
				</dl>
			</router-link>
		</li>
	</ul>
</template>
<script>
export default {
	props: ['newsList', 'type', 'url'],
	data() {
		return {
			
		}
	},
	methods:{
		
	}
}
</script>

<style scoped lang="scss">
$red: #e52e3a;
.ellipsis{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.mul-ellipsis{
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; //行数
    -webkit-box-orient: vertical;
}
.news-list{
	li{
		position: relative;
		border-bottom: 1px dashed #ccc;
		a{
			display: block;
			padding: 20px 0;
			box-sizing: border-box;
		}
		h4{
			font-size: 24px;
			line-height: 25px;
			@extend .ellipsis;
		}
		dl{
			margin-top: 17px;
			overflow: hidden;
			dt,dd{
				float: left;
				overflow: hidden;
			}
			dt{
				width: 170px;
				height: 120px;
				line-height: 120px;
				text-align: center;
				img{
					display: inline-block;
					max-width: 170px;
					max-height: 120px;
				}
			}
			dd{
				width: calc(100% - 190px);
				padding-left: 20px;
				padding-top: 6px;
				box-sizing: border-box;
				.desc{
					height: 100px;
					font-size: 14px;
					line-height: 20px;
					color: #666;
					@extend .mul-ellipsis;
				}
				.other{
					font-size: 12px;
					line-height: 14px;
					height: 14px;
					overflow: hidden;
					color: #999;
					.icon{
						display: inline-block;
						vertical-align: middle;
					}
					.scan{
						float: right;
						margin-top: -8px;
						.icon-scan{
							font-size: 30px;
						}
					}
					.time{
						.icon-shizhong{
							font-size: 13px;
							margin-right: 7px;
						}
					}
				}
			}
			&.no-img{
				dd{
					width: 100%;
					padding: 0;
					.desc{
						height: auto;
					}
					.other{
						margin-top: 15px;
					}
				}
			}
		}
	}
}
</style>
