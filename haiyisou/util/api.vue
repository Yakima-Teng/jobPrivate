<script type="text/javascript">
	let baseUrl = "http://58.56.27.54:38136";
	let baseUrlImg = "http://58.56.27.54:38136/dg/img/";
	
	function request (purl,  params, method, contentType) {
		let successToken = wx.getStorageSync("successToken");
		console.log('api--token--'+ successToken); 
		// successToken="5f69da62-f924-4064-b04c-a2bc187c30eb";
		wx.showLoading({
			title: '正在请求...' // 数据请求前loading
		})
		return new Promise((resolve, reject) => {
			wx.request({
				url: baseUrl + purl, //仅为示例，并非真实的接口地址
				method: method==null?'post':method,
				data: params,
				header: {
					 "Content-Type":contentType==null||contentType==''? "application/json;charset=UTF-8":contentType,
					 'Authorization':'Bearer '+successToken,
				},
				success: function (res) {
					if(res.data.error&&res.data.error=='invalid_token'){
/* 						let openid = uni.getStorageSync("currManageUser").openid;
						uni.removeStorageSync("currManageUser");
						uni.setStorageSync("currManageUser", { openid: openid }) */
						wx.hideLoading();
						uni.showToast({
							title:'登录超时,请重新登录！',
							icon:'none'
						});
						setTimeout(function(){
							uni.redirectTo({
								url:'/pages/login/login'
							})
						},1000)
						
						
					}else{
						wx.hideLoading();
						resolve(res.data);
					}
				},
				fail: function (res) {
					console.log("走了api.vue的fail方法")
				},
				complete: function () {
					console.log("走了api.vue的complete方法")
					wx.hideLoading();
				}
			})
		})
	}
	
	function requestNoLoading(purl,  params, method, contentType) {
		let successToken = wx.getStorageSync("successToken");
		console.log('api--token--'+ successToken);
		// successToken="5f69da62-f924-4064-b04c-a2bc187c30eb";
		return new Promise((resolve, reject) => {
			wx.request({
				url: baseUrl + purl, //仅为示例，并非真实的接口地址
				method: method==null?'post':method,
				data: params,
				header: {
					 "Content-Type":contentType==null||contentType==''? "application/json;charset=UTF-8":contentType,
					 'Authorization':'Bearer '+successToken,
				},
				success: function (res) {
					if(res.data.error&&res.data.error=='invalid_token'){
						/* let openid = uni.getStorageSync("currManageUser").openid;
						uni.removeStorageSync("currManageUser");
						uni.setStorageSync("currManageUser", { openid: openid }) */
						wx.hideLoading();
						uni.showToast({
							title:'登录超时,请重新登录！',
							icon:'none'
						});
						setTimeout(function(){
							uni.redirectTo({
								url:'/pages/login/login'
							})
						},1000)
						
						
					}else{
						wx.hideLoading();
						resolve(res.data);
					}
				},
				fail: function (res) {
					console.log("走了api.vue的fail方法")
				},
				complete: function () {
					console.log("走了api.vue的complete方法")
				}
			})
		})
	}
	function uuid() {
	    let originStr = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	    originChar = '0123456789abcdef',
	    len = originChar.length;
	    return originStr.replace(/x/g, function(match) {
		return originChar.charAt(Math.floor(Math.random() * len))
	    })
	}
	
	function isLogin(){
		let currUser = uni.getStorageSync("currUser");
		if(currUser&&currUser!=null&&currUser.idCard&&currUser.idCard!=''){
			return true;
		}
		return false;
	}
	function checkIdCard(code) {
		var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
		var tip = "";
		var pass= true;
	
		if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
			tip = "身份证号格式错误";
			pass = false;
		}
	
	   else if(!city[code.substr(0,2)]){
			tip = "身份证号地址编码错误";
			pass = false;
		}
		else{
			//18位身份证需要验证最后一位校验位
			if(code.length == 18){
				code = code.split('');
				//∑(ai×Wi)(mod 11)
				//加权因子
				var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
				//校验位
				var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
				var sum = 0;
				var ai = 0;
				var wi = 0;
				for (var i = 0; i < 17; i++)
				{
					ai = code[i];
					wi = factor[i];
					sum += ai * wi;
				}
				var last = parity[sum % 11];
				if(parity[sum % 11] != code[17]){
					tip = "身份证号校验位错误";
					pass =false;
				}
			}
		}
		if(!pass){
			uni.showToast({
				title:"身份证号码错误!",
				icon:'none'
			});
		};
		return pass;
	}
	
	function checkIsStartWithZero(pnum){
		if ((pnum+'').startsWith(0)) {
			return true;
		} else {
			return false;
		}
	}
	
	function checkedPnhoneNum(pnum){
		let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
		if (!myreg.test(pnum)) {
			return false;
		} else {
			return true;
		}
	}
	function checkedNull(mes){
		if(!mes||mes==null||mes==''){
			return true;
		}else{
			return false;
		}
	}
	
	function getCurrUser(){
		let currUser = {idCard:"520102199502022400"}
		
		return currUser;
	}
	export default {
	    baseUrl,
	    baseUrlImg,
		request,
		requestNoLoading,
		uuid,
		isLogin,
		checkIdCard,
		checkedPnhoneNum,
		checkedNull,
		checkIsStartWithZero,
		getCurrUser
	}

</script>
