var imgNum = 0;
var imgNumId = 0;
$(".application-form .upload_img_wrap .upload_img").bind("click", function(ev) {
  var index = ev.currentTarget.dataset.id;
  var that = this;
  if(index == 1) {
    $("#file1").click();
    $("#file1").unbind().change(function(e) {
      var index = e.currentTarget.dataset.id;
      if($('#file').val() == '') {
        return false;
      }
      $(that).hide();
      var filePath = $(this).val();
      changeImg(e, filePath, index);
      
      imgNum++;
      if(imgNum<3){
        $(".upload_img").eq(1).show();
      }
      $(".upload_img_length").html(imgNum);
    })
  }
})
$(".application-id .upload_img_wrap .upload_img").bind("click", function(ev) {
  var index = ev.currentTarget.dataset.id;
  var that = this;
  if(index == 2) {
    $("#file2").click();
    $("#file2").unbind().change(function(e) {
      var index = e.currentTarget.dataset.id;
      if($('#file').val() == '') {
        return false;
      }
      $(that).hide();
      var filePath = $(this).val();
      changeImgId(e, filePath, index);
      
      imgNumId++;
      if(imgNumId<3){
        $(".upload_img").eq(2).show();
      }
      $(".upload_img_length").html(imgNumId);
    })
  } else if(index == 3) {
    $("#file3").click();
    $("#file3").unbind().change(function(e) {
      var index = e.currentTarget.dataset.id;
      if($('#file').val() == '') {
        return false;
      }
      var filePath = $(this).val();
      changeImgId(e, filePath, index);
      $(that).hide();
      imgNumId++;
      $(".upload_img_length").html(imgNumId);
    })
  }
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
    $("#imgBox-id").html($("#imgBox-id").html() + '<div class="imgContainer" data-index=' + index + '><img   src=' + dataURL + ' onclick="imgDisplay(this)"><img onclick="removeImgId(this,' + index + ')"  class="imgDelete" src="images/icon-delete.png" /></div>');
  };
}

function removeImg(obj, index) {
  for(var i = 0; i < $(".imgContainer").length; i++) {
    if($(".imgContainer").eq(i).attr("data-index") == index) {
      $(".imgContainer").eq(i).remove();
    }
  }
  for(var i = 0; i < $(".upload_img").length; i++) {
    $(".upload_img").eq(i).hide();
    if($(".upload_img").eq(i).attr("data-id") == index) {
      console.log($(".upload_img").eq(i).attr("data-id"))
      $(".upload_img").eq(i).show();
    }
  }
  imgNum--;
  $(".upload_img_length").html(imgNum);
}


function removeImgId(obj, index) {
  for(var i = 0; i < $(".imgContainer").length; i++) {
    if($(".imgContainer").eq(i).attr("data-index") == index) {
      $(".imgContainer").eq(i).remove();
    }
  }
  for(var i = 0; i < $(".upload_img").length; i++) {
    $(".upload_img").eq(i).hide();
    if($(".upload_img").eq(i).attr("data-id") == index) {
      console.log($(".upload_img").eq(i).attr("data-id"))
      $(".upload_img").eq(i).show();
    }
  }
  imgNumId--;
  $(".upload_img_length").html(imgNumId);
}


function imgDisplay(obj) {
  var src = $(obj).attr("src");
  var imgHtml = '<div style="width: 100%;height: 100vh;overflow: auto;background: rgba(0,0,0,0.5);text-align: center;position: fixed;top: 0;left: 0;z-index: 1000;display: flex;justify-content: center;    align-items: center;"><img src=' + src + ' style="margin-top: 100px;width: 96%; max-height:50%; margin-bottom: 100px;"><p style="font-size: 50px;position: fixed;top: 30px;right: 30px;color: white;cursor: pointer;" onclick="closePicture(this)">×</p></div>'
  $('body').append(imgHtml);
}

function closePicture(obj) {
  $(obj).parent("div").remove();
}