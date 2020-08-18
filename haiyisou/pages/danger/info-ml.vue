<template>
	<view class="page-crew-basic">
		    <view class="danger-info-list">
		    	<view class="danger-info" v-if="xhList.length>0">
						<view class="info info-exam-subject">
							<view class="main">
								<view class="subject-list" v-for="(item,index) in xhList" :key="index">
									<view class="subject-num">{{index+1}}</view>
									<view class="subject-info">
										<view class="subject-info">
											<view class="text">别名：{{item.alias}}</view>
											<view class="text">CAS No：{{item.casNo}}</view>
											<view class="text">化学品名称：{{item.chemicalName}}</view>
											<view class="text">实施日期：{{item.implementTime}}</view>
										</view>
									</view>
								</view>
						</view>
					</view>
		    	</view>
				<view class="danger-info" v-if="wrList.length>0">
						<view class="info info-exam-subject">
							<view class="main">
								<view class="subject-list" v-for="(item,index) in wrList" :key="index">
									<view class="subject-num">{{index+1}}</view>
									<view class="subject-info">
										<view class="subject-info">
											<view class="text">货物名称(中文)：{{item.goodsNameCn}}</view>
											<view class="text">货物名称(英文)：{{item.goodsNameEn}}</view>
											<view class="text">UNNO：{{item.unno}}</view>
											<view class="text">运输方式：{{item.transportWay}}</view>
											<view class="text">实施日期：{{item.implementTime}}</view>
											<view class="text">是否有效：{{item.valid}}</view>
										</view>
									</view>
								</view>
						</view>
					</view>
		    	</view>
				<view class="danger-info" v-if="wxList.length>0">
						<view class="info info-exam-subject">
							<view class="main">
								<view class="subject-list" v-for="(item,index) in wxList" :key="index">
									<view class="subject-num">{{index+1}}</view>
									<view class="subject-info">
										<view class="subject-info">
											<view class="text">中文名称：{{item.goodsNameCn}}</view>
											<view class="text">UNNO：{{item.unno}}</view>
											<view class="text">类别：{{item.goodsType}}</view>
											<view class="text">副危险：{{item.subsidiaryRisks}}</view>
											<view class="text">包装类：{{item.packageClass}}</view>
											<view class="text">特殊规定：{{item.specialRules}}</view>
											<view class="text">实施日期：{{item.implementTime}}</view>
											<view class="text">是否有效：{{item.valid}}</view>
										</view>
									</view>
								</view>
						</view>
					</view>
		    	</view>
				<view class="danger-info" v-if="nhList.length>0">
						<view class="info info-exam-subject">
							<view class="main">
								<view class="subject-list" v-for="(item,index) in nhList" :key="index">
									<view class="subject-num">{{index+1}}</view>
									<view class="subject-info">
										<view class="subject-info">
											<view class="text">化学品名称：{{item.goodsNameCn}}</view>
											<view class="text">别名：{{item.alias}}</view>
											<view class="text">CAS号：{{item.casNo}}</view>
											<view class="text">UN编号：{{item.unno}}</view>
											<view class="text">创建人：{{item.createUser}}</view>
											<view class="text">修改人：{{item.updateUser}}</view>
											<view class="text">实施日期：{{item.implementTime}}</view>
											<view class="text">状态：{{item.valid}}</view>
										</view>
									</view>
								</view>
						</view>
					</view>
		    	</view>
		    </view>
	</view>
</template>

<script>
import luBarTabNav from "@/components/lu-bar-tab-nav/lu-bar-tab-nav";
export default {
  components:{ luBarTabNav },
	data() {
		return {
		
      barFixed: true,
      barHeight: "44",
      barTop: 0,
      iconShow: true,
      barId: "0",
	  xhList:[],
	  wrList:[],
	  wxList:[],
	  nhList:[],
	  MeasureData:{}
	  };
	},
	onPageScroll: function(e) {
	    this.$refs.barTabNav._selectedTab(e.scrollTop);
	},
  mounted: function () {
   
  },
  onLoad(options){
	  this.getMlxq(options.type,options);
  },
	methods: {
		getMlxq(type,opt){
			var url='';
			if(type=='1'){//危险化学品名录(2015版)
				url='/dg/dict/dangerChemical?chemicalName='+opt.chemicalName+'&casNo='+opt.casNo
				//请求后台数据
				console.log('>>'+url);
				this.api.requestNoLoading(url,{},'GET')
				.then(res => {
					 console.log('>>'+JSON.stringify(res));
					/* if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					} */
					this.xhList=res;
					});	
			}else if(type=='2'){//污染危害性货物名录
				url='/dg/dict/harmPlute?goodsNameCn='+opt.chemicalName+'&unno='+opt.unno+'&goodsNameEn='+opt.goodsNameEn
				//请求后台数据
				console.log('>>'+url);
				this.api.requestNoLoading(url,{},'GET')
				.then(res => {
					 console.log('>>'+JSON.stringify(res));
					/* if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					} */
					this.wrList=res;
					});	
			}else if(type=='3'){//危险货物品名表
				url='/dg/dict/wxdangergoods?unno='+opt.unno
				//请求后台数据
				console.log('>>'+url);
				this.api.requestNoLoading(url,{},'GET')
				.then(res => {
					 console.log('>>'+JSON.stringify(res));
					/* if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					} */
					this.wxList=res;
					});	
			}else if(type=='4'){//内河禁运危险化学品名录
				url='/dg/info/inlandDict?unno='+opt.unno+'&casNo='+opt.casNo+'&name='+opt.chemicalName
				//请求后台数据
				console.log('>>'+url);
				this.api.requestNoLoading(url,{},'GET')
				.then(res => {
					 console.log('>>'+JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					this.nhList=res;
					});	
			}
			
				//this.MeasureData=res.result[0].MeasureData;
				
			
		},
		
		}
}
</script>

<style lang="scss">
	
.exam-info-title{ background-color: #ebf2fe; color:#3882f9; padding: 0 40rpx; height:98rpx; line-height: 98rpx; font-size:28rpx; border-bottom: 1rpx solid #e5e5e5;}
.exam-info{  font-size:32rpx; padding-top: 0px;padding-left: 0px;padding-right: 0px;padding-bottom: 0px;
	.info{ display: flex; flex-wrap: wrap; justify-content: space-between; margin-bottom: 34rpx; padding-bottom: 10rpx; border-bottom: 1rpx solid #e5e5e5;
		>text{ display: block; margin-bottom: 25rpx;}
		.main{@extend text; font-weight: 600;}
		&.info-exam-subject{ flex-direction: column; justify-content: space-between; align-content: flex-start; 
			.main{ margin-top: 10rpx;}
		}
	}
	.subject-list{ width: 100%; background-color: #fff; box-shadow: 0 2rpx 20rpx rgba($color: #0a3752, $alpha: .15); margin-bottom: 10rpx; border-radius:15rpx 0 0 0; padding: 32rpx 0 22rpx; display: flex; flex-wrap: wrap;
		.subject-num{ width: 64rpx; height:48rpx; line-height: 48rpx; color:#fff; font-size:24rpx; background-color: #3882f9; text-align: center; border-radius:0 20rpx 20rpx 0; margin-right: 29rpx; }
		.subject-info{ width: calc(100% - 64rpx -29rpx); overflow: hidden; font-weight: normal;
			.name{ font-size: 36rpx; margin-bottom: 20rpx; font-weight: 600; line-height: 48rpx;}
			.lable{ margin-bottom: 27rpx; font-size:24rpx;
				>text{ display: inline-block; padding: 8rpx 17rpx; border-radius:5rpx; margin-right: 10rpx;
					&.green{ background-color: #e4f3f0; color:#2cab91; }
					&.blue{ background-color: #ebf2fe; color:#3882f9; }
					&.gray{ background-color: #f0eff4; color:#666; }
				}
			}
			.text{ width: 578rpx; color:#666; margin-bottom: 10rpx; font-weight: 300;}
		}
	}
}
@import '@/static/css/common';
</style>