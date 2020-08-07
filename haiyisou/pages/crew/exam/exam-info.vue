<template>
	<view class="page-exam-info">
		<view class="exam-info-title">11规则机工/水手/G证/技工合适任证考试</view>
		<view class="exam-info">
			<view class="info">
				<text>申请专业：</text><view class="main">轮机</view>
			</view>
			<view class="info">
				<text>申考形式：</text><view class="main">学生考试</view>
			</view>
			<view class="info">
				<text>申考类别职务：</text><view class="main">值班机工</view>
			</view>
			<view class="info">
				<text>准考证号：</text><view class="main">J05110808300028</view>
			</view>
			<view class="info">
				<text>有效期：</text><view class="main">2025-05-12</view>
			</view>
			<view class="info">
				<text>考试日期：</text><view class="main">2020-04-21</view>
			</view>
			<view class="info">
				<text>过渡期已结束，持有04规则值班水手和值班机工能否申请换发11规则适任证书：</text><view class="main">根据《关于印发〈中华人民共和国海船船员适任考试和发证规则实施办法〉的通知》</view>
			</view>
			<view class="info">
				<text>申请时机：</text><view class="main">对于未过期的，只能在有效期届满前12个月内</view>
			</view>
			<view class="info">
				<text>申请规定申请规定申请规定：</text><view class="main">对于未过期的，只能在有效期届满前12个月内； 对于过期的，无限制。</view>
			</view>
			<view class="info info-exam-subject">
				<text>考试科目</text>
				<view class="main">
					<view class="subject-list">
						<view class="subject-num">01</view>
						<view class="subject-info">
							<view class="name">动力设备构造</view>
							<view class="lable">
								<text class="blue">89分</text>
								<text class="green">及格</text>
								<text class="gray">理论</text>
							</view>
							<view class="text">时间：2011/12/28至1900-01-01</view>
							<view class="text">机构/期数：连云港海事局/9905110707</view>
						</view>
					</view>
					<view class="subject-list">
						<view class="subject-num">02</view>
						<view class="subject-info">
							<view class="name">动力设备构造</view>
							<view class="lable">
								<text class="blue">89分</text>
								<text class="green">及格</text>
								<text class="gray">理论</text>
							</view>
							<view class="text">时间：2011/12/28至1900-01-01</view>
							<view class="text">机构/期数：连云港海事局/9905110707</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	}
}
</script>

<style lang="scss">
.exam-info-title{ background-color: #ebf2fe; color:#3882f9; padding: 0 40rpx; height:98rpx; line-height: 98rpx; font-size:28rpx; border-bottom: 1rpx solid #e5e5e5;}
.exam-info{ padding: 34rpx 40rpx 40rpx; font-size:32rpx;
	.info{ display: flex; flex-wrap: wrap; justify-content: space-between; margin-bottom: 34rpx; padding-bottom: 10rpx; border-bottom: 1rpx solid #e5e5e5;
		>text{ display: block; margin-bottom: 25rpx; opacity: .6;}
		.main{@extend text; opacity: 1;}
		&.info-exam-subject{ flex-direction: column; justify-content: space-between; align-content: flex-start; 
			.main{ margin-top: 10rpx;}
		}
	}
	.subject-list{ width: 100%; background-color: #fff; box-shadow: 0 2rpx 20rpx rgba($color: #0a3752, $alpha: .15); margin-bottom: 10rpx; border-radius:15rpx 0 0 0; padding: 32rpx 0 22rpx; display: flex; flex-wrap: wrap;
		.subject-num{ width: 64rpx; height:48rpx; line-height: 48rpx; color:#fff; font-size:24rpx; background-color: #3882f9; text-align: center; border-radius:0 20rpx 20rpx 0; margin-right: 29rpx; }
		.subject-info{ width: calc(100% - 64rpx -29rpx); overflow: hidden; font-weight: normal;
			.name{ font-size: 36rpx; margin-bottom: 20rpx; opacity: 1; line-height: 48rpx;}
			.lable{ margin-bottom: 27rpx; font-size:24rpx;
				>text{ display: inline-block; padding: 8rpx 17rpx; border-radius:5rpx; margin-right: 10rpx;
					&.green{ background-color: #e4f3f0; color:#2cab91; }
					&.blue{ background-color: #ebf2fe; color:#3882f9; }
					&.gray{ background-color: #f0eff4; color:#666; }
				}
			}
			.text{ width: 578rpx; color:#666; margin-bottom: 10rpx; font-size: 24rpx; opacity: .6;}
		}
	}
}

</style>
