var imgNum = 0;

$(".application-form .upload_img").bind("click", function(ev) {
	//console.log(ev.currentTarget.dataset.id)
	var index = ev.currentTarget.dataset.id;
	var that = this;
	$("#file1").click();
	$("#file1").unbind().change(function(e) {
		var index = e.currentTarget.dataset.id;
		$(that).hide();
		var filePath = $(this).val();
		changeImg(e, filePath, index);
	})
})

function changeImg(e, filePath, index) {
	fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
	//检查后缀名
	if(!fileFormat.match(/.png|.jpg|.jpeg/)) {
		showError('文件格式必须为：png/jpg/jpeg');
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
		$("#imgBox").html($("#imgBox").html() + '<div class="imgContainer" data-index=' + index + '><img   src=' + dataURL + ' onclick="imgDisplay(this)"><img onclick="removeImg(this,' + index + ')"  class="imgDelete" src="images/icon-delete.png" /></div>');
	};
}

function removeImg(obj, index) {
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


var imgNumId = 0;
$(".application-id .upload_img").bind("click", function(ev) {
	//console.log(ev.currentTarget.dataset.num)
	var index = ev.currentTarget.dataset.num;
	var that = this;
	if(index == 1) {
		$("#file1-id").click();
		$("#file1-id").unbind().change(function(e) {
			var index = e.currentTarget.dataset.num;
			if($('#file-id').val() == '') {
				return false;
			}
			$(that).hide();
			var filePath = $(this).val();
			changeImgId(e, filePath, index);
			
			imgNumId++;
			if(imgNumId<2){
				$(".application-id .upload_img").eq(1).show();
			}
			$(".application-id .upload_img_length").html(imgNumId);
		})
	} else if(index == 2) {
		$("#file2-id").click();
		$("#file2-id").unbind().change(function(e) {
			var index = e.currentTarget.dataset.num;
			if($('#file-id').val() == '') {
				return false;
			}
			$(that).hide();
			var filePath = $(this).val();
			changeImgId(e, filePath, index);
			
			imgNumId++;
			if(imgNumId<3){
				$(".application-id .upload_img").eq(2).show();
			}
			$(".application-id .upload_img_length").html(imgNumId);
		})
	}
})

function changeImgId(e, filePath, index) {
	fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
	//检查后缀名
	if(!fileFormat.match(/.png|.jpg|.jpeg/)) {
		showError('文件格式必须为：png/jpg/jpeg');
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
		$("#imgBoxId").html($("#imgBoxId").html() + '<div class="imgContainer" data-indexs=' + index + '><img   src=' + dataURL + ' onclick="imgDisplay(this)"><img onclick="removeImgId(this,' + index + ')"  class="imgDelete" src="images/icon-delete.png" /></div>');
	};

}

function removeImgId(obj, index) {
	for(var i = 0; i < $(".application-id .imgContainer").length; i++) {
		if($(".application-id .imgContainer").eq(i).attr("data-indexs") == index) {
			$(".application-id .imgContainer").eq(i).remove();
		}
	}
	for(var i = 0; i < $(".application-id .upload_img").length; i++) {
		$(".application-id .upload_img").eq(i).hide();
		if($(".application-id .upload_img").eq(i).attr("data-num") == index) {
			console.log($(".application-id .upload_img").eq(i).attr("data-num"))
			$(".application-id .upload_img").eq(i).show();
		}
	}
	imgNumId--;
	$(".application-id .upload_img_length").html(imgNumId);
}





function imgDisplay(obj) {
	var src = $(obj).attr("src");
	var imgHtml = '<div style="width: 100%;height: 100vh;overflow: auto;background: rgba(0,0,0,0.5);text-align: center;position: fixed;top: 0;left: 0;z-index: 1000;display: flex;justify-content: center;    align-items: center;"><img src=' + src + ' style="margin-top: 100px;width: 96%; max-height:50%;margin-bottom: 100px;"><p style="font-size: 50px;position: fixed;top: 30px;right: 30px;color: white;cursor: pointer;" onclick="closePicture(this)">×</p></div>'
	$('body').append(imgHtml);
}

function closePicture(obj) {
	$(obj).parent("div").remove();
}