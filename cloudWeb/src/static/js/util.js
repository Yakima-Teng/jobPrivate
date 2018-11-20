import axios from 'axios'
import qs from 'qs';
//回到顶部
export function backTop() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
}
export function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
};
// 60s倒计时
export function count_down(that, total_micro_second) {
    if (total_micro_second <= 0) {
        that.count = 60
        that.codeBtn = true
            // timeout则跳出递归
        return;
    }
    // 渲染倒计时时钟
    that.count = formatNumber(total_micro_second)
    setTimeout(function() {
        // 放在最后--
        total_micro_second -= 1;
        count_down(that, total_micro_second);
    }, 1000)
};
//post获取数据
export function postFn(url, data, callBack) {
    axios({
        method: 'post',
        url: 'https://kong.gbicom.com:8443' + url,
        headers: {
            apikey: "ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O",
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    }).then(function(res) {
        var r = res;
        callBack(r)
    });
};
//商务通
export function openzx() {
    var swt_talk = 'http://webchart.gbicom.cn/LR/Chatpre.aspx?id=KJI83683011&lng=cn&e=' + location.hostname;
    var iTop = (window.screen.availHeight - 30 - 600) / 2;
    var iLeft = (window.screen.availWidth - 10 - 800) / 2;
    window.open(swt_talk, 'newwindow', 'height=515, width=700,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,top=' + iTop + ',left=' + iLeft);
}
//数组去除重复的
export function noRepeat(arr){
	var n = [arr[0]]; 
	for(var i = 1,len=arr.length; i < len; i++) {    
		if (arr.indexOf(arr[i]) == i) n.push(arr[i]);
	}
	return n;
};
//时间戳转yyyy-mm-dd 
export function formatDateTime(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};
//时间戳转yyyy.mm.dd h:m:s
export function formatDateTimeD(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '.' + m + '.' + d + ' ' + h + ':' + minute + ':' + second;
};

//时间戳转yyyy.mm.dd
export function formatDateTimeT(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '.' + m + '.' + d
};
//设置cookie
export function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    console.info(`${cname}=${cvalue};expires`);
    if (exdays != 0) {
        document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
    } else {
        document.cookie = cname + "=" + cvalue + "; path =/";
    }
};
//获取cookie
export function getCookie(cname) {
    let arr;
    let reg = new RegExp("(^| )" + cname + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
};
//删除cookie
export function delCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null)
        setCookie(name,'',-1);
        // document.cookie = name + "=" + cval + "path=/z3/;expires=" + exp.toGMTString();
}


// 轮播
export function LbMove(boxID, btn_left, btn_right, btnBox, Car, direction, way, moveLengh, speed, Interval, number) {
    var _ID = boxID;
    var _btn_left = btn_left;
    var _btn_right = btn_right;
    var _btnBox = btnBox;
    var jsq = 0
    var timer;
    var cj;
    var no_way = 0;
    var no_wayGet = 0;
    var fade = 0;
    var new_time = new Date;
    var ID_liLen, ID_liheight, cbtmBtn;
    ID_liLen = _ID.find("li").length;
    ID_liheight = _ID.find("li").innerHeight();
    if (direction == "left" || direction == "right") {
        _ID.find("ul").width(ID_liLen * moveLengh);
    } else if (direction == "top" || direction == "bottom") {
        _ID.find("ul").height(ID_liLen * moveLengh);
        _btnBox && _btnBox.hide()
    } else if (direction == "fade") {
        _ID.find("ul").width(moveLengh).height(ID_liheight);
        _ID.find("li").eq(0).show().siblings().hide();
        _ID.find("li").css({ "position": "absolute", "left": 0, "top": 0 });
    }
    // _btnBox.empty();
    // for (var i = 0; i < ID_liLen; i++) {
    //     _btnBox.append("<span></span>");
    // };
    _btnBox && _btnBox.find("span").eq(0).addClass("cur");
    if (way == false) {
        _btn_left.hide();
        _btn_right.hide();
        _btnBox && _btnBox.hide();
    }


    function Carousel() {
        if (way == false) {
            no_way++;

            if (direction == "left") {
                _ID.find("ul").css({ "left": -no_way });
                no_wayGet = parseInt(_ID.find("ul").css("left"));
                if (no_wayGet == -moveLengh) {
                    no_way = 0
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "left": 0 });
                }
            }

            if (direction == "right") {

                no_wayGet = parseInt(_ID.find("ul").css("left"));
                if (no_wayGet == 0) {
                    no_way = -moveLengh
                    _ID.find("li:last").insertBefore(_ID.find("li:first"));
                    _ID.find("ul").css({ "left": 0 });
                }
                _ID.find("ul").css({ "left": no_way });
            }

            if (direction == "top") {
                _ID.find("ul").css({ "top": -no_way });
                no_wayGet = parseInt(_ID.find("ul").css("top"));
                if (no_wayGet == -moveLengh) {
                    no_way = 0
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "top": 0 });
                }
            }

            if (direction == "bottom") {

                no_wayGet = parseInt(_ID.find("ul").css("top"));
                if (no_wayGet == 0) {
                    no_way = -moveLengh
                    _ID.find("li:last").insertBefore(_ID.find("li:first"));
                    _ID.find("ul").css({ "top": 0 });
                }
                _ID.find("ul").css({ "top": no_way });
            }


        } else if (way == true) {

            if (direction == "left") {
                _ID.find("ul").animate({ left: -moveLengh }, speed, function() {
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "left": 0 });
                });
                if (jsq < ID_liLen - 1) {
                    jsq++;
                    _btnBox && _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
                } else {
                    jsq = 0;
                    _btnBox && _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
                }
            }

            if (direction == "right") {
                _ID.find("li:last").insertBefore(_ID.find("li:first"));
                _ID.find("ul").css({ "left": -moveLengh });
                _ID.find("ul").stop().animate({ left: 0 }, speed);
                if (jsq > 0) {
                    jsq--;
                    _btnBox && _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
                } else {
                    jsq = ID_liLen - 1;
                    _btnBox && _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
                }

            }

            if (direction == "top") {
                _ID.find("ul").animate({ top: -moveLengh }, speed, function() {
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "top": 0 });
                });
            }

            if (direction == "bottom") {
                _ID.find("li:last").insertBefore(_ID.find("li:first"));
                _ID.find("ul").css({ "top": -moveLengh });
                _ID.find("ul").stop().animate({ top: 0 }, speed);

            }
            if (direction == "fade") {

                if (fade < ID_liLen - 1) {
                    fade++;
                } else { fade = 0 }
                _ID.find("li").eq(fade).fadeIn(speed).siblings().fadeOut(speed);
                _btnBox && _btnBox.find("span").eq(fade).addClass("cur").siblings().removeClass("cur");

            }

        }
    }


    if (Car == true) {

        if (ID_liLen > number) {
            timer = setInterval(Carousel, Interval);
        } else {
            clearInterval(timer);
            _btn_left.hide();
            _btn_right.hide();
            _btnBox && _btnBox.hide();
        }
    } else {
        clearInterval(timer);
    }
    _ID.find("li").hover(function() {
        clearInterval(timer);
    }, function() {
        if (Car == true) {
            if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
            } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
                _btnBox && _btnBox.hide();
            }
        } else {
            clearInterval(timer);
        }
    });


    _btn_right.hover(function() {
        clearInterval(timer);
    }, function() {
        if (Car == true) {
            if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
            } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
                _btnBox && _btnBox.hide();
            }
        } else {
            clearInterval(timer);
        }

    }).click(function() {
        if (new Date - new_time > 500) {
            new_time = new Date;

            if (direction == "left" || direction == "right") {
                _ID.find("ul").animate({ left: -moveLengh }, speed, function() {
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "left": 0 });
                });
            }


            if (direction == "top" || direction == "bottom") {
                _ID.find("ul").animate({ top: -moveLengh }, speed, function() {
                    _ID.find("li:first").insertAfter(_ID.find("li:last"));
                    _ID.find("ul").css({ "top": 0 });
                });
            }
            if (direction == "fade") {

                if (fade > 0) {
                    fade--;
                } else { fade = ID_liLen - 1 }
                _ID.find("li").stop(true, true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);

            }
            if (jsq < ID_liLen - 1) {
                jsq++;
                _btnBox && _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
            } else {
                jsq = 0;
                _btnBox && _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
            };


        } else {};
    });
    _btn_left.hover(function() {
        clearInterval(timer);
    }, function() {
        if (Car == true) {
            if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
            } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
                _btnBox && _btnBox.hide();
            }
        } else {
            clearInterval(timer);
        }
    }).click(function() {
        if (new Date - new_time > 500) {
            new_time = new Date;

            if (direction == "left" || direction == "right") {
                _ID.find("li:last").insertBefore(_ID.find("li:first"));
                _ID.find("ul").css({ "left": -moveLengh });
                _ID.find("ul").stop().animate({ left: 0 }, speed);
            }

            if (direction == "top" || direction == "bottom") {
                _ID.find("li:last").insertBefore(_ID.find("li:first"));
                _ID.find("ul").css({ "top": -moveLengh });
                _ID.find("ul").stop().animate({ top: 0 }, speed);

            }
            if (direction == "fade") {

                if (fade < ID_liLen - 1) {
                    fade++;
                } else { fade = 0 }
                _ID.find("li").stop(true, true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);

            }
            if (jsq > 0) {
                jsq--;
                _btnBox && _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
            } else {
                jsq = ID_liLen - 1;
                _btnBox && _btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
            };
        } else {};
    });

    _btnBox && _btnBox.find("span").hover(function() {
        clearInterval(timer);

    }, function() {
        if (Car == true) {
            if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
            } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
                _btnBox.hide();
            }
        } else {
            clearInterval(timer);
        }
    }).click(function() {
        if (new Date - new_time > 500) {
            new_time = new Date;
            cbtmBtn = $(this).index();
            $(this).addClass("cur").siblings().removeClass("cur");
            if (direction == "fade") {
                _ID.find("li").eq(cbtmBtn).fadeIn(speed).siblings().fadeOut(speed);
            } else {
                if (cbtmBtn > jsq) {
                    cj = cbtmBtn - jsq;
                    jsq = cbtmBtn;

                    _ID.find("ul").stop().animate({ left: -moveLengh * cj }, speed, function() {
                        for (var i = 0; i < cj; i++) {
                            _ID.find("ul").css({ "left": 0 })
                            _ID.find("li:first").insertAfter(_ID.find("li:last"));
                        };
                    });
                } else {
                    cj = jsq - cbtmBtn;
                    jsq = cbtmBtn;
                    _ID.find("ul").css({ "left": -moveLengh * cj });
                    for (var i = 0; i < cj; i++) {
                        _ID.find("ul").stop().animate({ left: 0 }, speed);
                        _ID.find("li:last").insertBefore(_ID.find("li:first"));
                    };
                };
            };
        } else {};
    });
}

export function flyFn(){! function(a) {
	a.fly = function(b, c) {
		var d = {
				version: "1.0.0",
				autoPlay: !0,
				vertex_Rtop: 20,
				speed: 1.2,
				start: {},
				end: {},
				onEnd: a.noop
			},
			e = this,
			f = a(b);
		e.init = function(a) {
			this.setOptions(a), !!this.settings.autoPlay && this.play()
		}, e.setOptions = function(b) {
			this.settings = a.extend(!0, {}, d, b);
			var c = this.settings,
				e = c.start,
				g = c.end;
			f.css({
				marginTop: "0px",
				marginLeft: "0px",
				position: "fixed"
			}).appendTo("body"), null != g.width && null != g.height && a.extend(!0, e, {
				width: f.width(),
				height: f.height()
			});
			var h = Math.min(e.top, g.top) - Math.abs(e.left - g.left) / 3;
			h < c.vertex_Rtop && (h = Math.min(c.vertex_Rtop, Math.min(e.top, g.top)));
			var i = Math.sqrt(Math.pow(e.top - g.top, 2) + Math.pow(e.left - g.left, 2)),
				j = Math.ceil(Math.min(Math.max(Math.log(i) / .05 - 75, 30), 100) / c.speed),
				k = e.top == h ? 0 : -Math.sqrt((g.top - h) / (e.top - h)),
				l = (k * e.left - g.left) / (k - 1),
				m = g.left == l ? 0 : (g.top - h) / Math.pow(g.left - l, 2);
			a.extend(!0, c, {
				count: -1,
				steps: j,
				vertex_left: l,
				vertex_top: h,
				curvature: m
			})
		}, e.play = function() {
			this.move()
		}, e.move = function() {
			var b = this.settings,
				c = b.start,
				d = b.count,
				e = b.steps,
				g = b.end,
				h = c.left + (g.left - c.left) * d / e,
				i = 0 == b.curvature ? c.top + (g.top - c.top) * d / e : b.curvature * Math.pow(h - b.vertex_left, 2) + b.vertex_top;
			if (null != g.width && null != g.height) {
				var j = e / 2,
					k = g.width - (g.width - c.width) * Math.cos(j > d ? 0 : (d - j) / (e - j) * Math.PI / 2),
					l = g.height - (g.height - c.height) * Math.cos(j > d ? 0 : (d - j) / (e - j) * Math.PI / 2);
				f.css({
					width: k + "px",
					height: l + "px",
					"font-size": Math.min(k, l) + "px"
				})
			}
			f.css({
				left: h + "px",
				top: i + "px"
			}), b.count++;
			var m = window.requestAnimationFrame(a.proxy(this.move, this));
			d == e && (window.cancelAnimationFrame(m), b.onEnd.apply(this))
		}, e.destory = function() {
			f.remove()
		}, e.init(c)
	}, a.fn.fly = function(b) {
		return this.each(function() {
			void 0 == a(this).data("fly") && a(this).data("fly", new a.fly(this, b))
		})
	}
}(jQuery)};


export function openDownloadDialog(url, saveName)
{
    if(typeof url == 'object' && url instanceof Blob)
    {
        url = URL.createObjectURL(url); // 创建blob地址
    }
    var aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    var event;
    if(window.MouseEvent) event = new MouseEvent('click');
    else
    {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
}










