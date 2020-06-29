var imgNum = 0;

$(".application-form .upload_img").bind("click", function(ev) {
	//console.log(ev.currentTarget.dataset.id)
	var index = ev.currentTarget.dataset.id;
	var that = this;
	$("#fileOne").click();
	$("#fileOne").unbind().change(function(e) {
		var index = e.currentTarget.dataset.id;
		$(that).hide();
		var filePath = $(this).val();
		changeImgOne(e, filePath, index);
	})
})

function changeImgOne(e, filePath, index) {
	fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
	//检查后缀名
	if(!fileFormat.match(/.png|.jpg|.jpeg/)) {
		alert('文件格式必须为：png/jpg/jpeg');
		return;
	}
	//获取并记录图片的base64编码
	var reader = new FileReader();
	reader.readAsDataURL(e.target.files[0]);
	reader.onloadend = function() {
		// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
		var dataURL = reader.result;
		// console.log(dataURL)
		// 显示图片
		$("#imgBoxOne").html($("#imgBoxOne").html() + '<div class="imgContainer" data-index=' + index + '><img   src=' + dataURL + ' onclick="imgDisplayOne(this)"><img onclick="removeImgOne(this,' + index + ')"  class="imgDelete" src="images/icon-delete.png" /></div>');
	};
}

function removeImgOne(obj, index) {
	for(var i = 0; i < $(".application-form .imgContainer").length; i++) {
		if($(".application-form .imgContainer").eq(i).attr("data-index") == index) {
			$(".application-form .imgContainer").eq(i).remove();
		}
	}
	for(var i = 0; i < $(".application-form .upload_img").length; i++) {
		$(".application-form .upload_img").eq(i).hide();
		if($(".application-form .upload_img").eq(i).attr("data-id") == index) {
			$(".application-form .upload_img").eq(i).show();
		}
	}
}

function imgDisplayOne(obj) {
	var src = $(obj).attr("src");
	var imgHtml = '<div style="width: 100%;height: 100vh;overflow: auto;background: rgba(0,0,0,0.5);text-align: center;position: fixed;top: 0;left: 0;z-index: 1000;display: flex;justify-content: center;    align-items: center;"><img src=' + src + ' style="margin-top: 100px;width: 96%; max-height:50%;margin-bottom: 100px;"><p style="font-size: 50px;position: fixed;top: 30px;right: 30px;color: white;cursor: pointer;" onclick="closePictureOne(this)">×</p></div>'
	$('body').append(imgHtml);
}

function closePictureOne(obj) {
	$(obj).parent("div").remove();
}