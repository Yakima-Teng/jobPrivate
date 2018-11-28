import axios from 'axios'
import qs from 'qs';

// cookie
function parseCookie(cookies) {
    let cookie = ''
    Object.keys(cookies).forEach(item => {
        cookie += item + '=' + cookies[item] + '; '
    })
    return cookie
}
//商务通
export function openzx() {
    var swt_talk = 'http://webchart.gbicom.cn/LR/Chatpre.aspx?id=KJI83683011&lng=cn&e=' + location.hostname;
    var iTop = (window.screen.availHeight - 30 - 600) / 2;
    var iLeft = (window.screen.availWidth - 10 - 800) / 2;
    window.open(swt_talk, 'newwindow', 'height=515, width=700,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,top=' + iTop + ',left=' + iLeft);
}
let baseUrl = 'https://kong.gbicom.com:8443/patent';

export const API_HOST = baseUrl;

export const api = () => {
    // 区分 生产环境 还是 开发环境
    let baseurl = process.env.NODE_ENV === 'development' ? '/api' : baseUrl;
    return {
        api: axios.create({
            baseURL: baseurl,
            timeout: 10000,
            headers: {
                'apikey': "ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O",
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }),
        post(url, data) {
            return this.api({
                method: 'post',
                url,
                data: qs.stringify(data)
            })
        },
        get(url) {
            return this.api({
                method: 'get',
                url
            })
        },
        postFile(url, formdata) {
            let config = {
                headers: {
                    'apikey': "ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O",
                    'Content-Type': 'multipart/form-data'
                }
            };
            return this.api.post(url, formdata, config)
        }
    }
}

export function resizable() {
    function resize() {
        var domWidth = domEle.getBoundingClientRect().width;
        if (domWidth / v > 640) {
            domWidth = 640 * v;
        }
        window.rem = domWidth / 16;
        domEle.style.fontSize = window.rem + "px";
    }
    var v, initial_scale, timeCode, dom = window.document,
        domEle = dom.documentElement,
        viewport = dom.querySelector('meta[name="viewport"]'),
        flexible = dom.querySelector('meta[name="flexible"]');
    if (viewport) {
        var o = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        if (o) {
            initial_scale = parseFloat(o[2]);
            v = parseInt(1 / initial_scale);
        }
    } else if (flexible) {
        var o = flexible.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
        if (o) {
            v = parseFloat(o[2]);
            initial_scale = parseFloat((1 / v).toFixed(2))
        }
    }
    if (!v && !initial_scale) {
        var n = (window.navigator.appVersion.match(/android/gi), window.navigator.appVersion.match(/iphone/gi));
        v = window.devicePixelRatio;
        v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, initial_scale = 1 / v
    }
    //没有viewport标签的情况下
    if (domEle.setAttribute("data-dpr", v), !viewport) {
        if (viewport = dom.createElement("meta"), viewport.setAttribute("name", "viewport"), viewport.setAttribute("content", "initial-scale=" + initial_scale + ", maximum-scale=" + initial_scale + ", minimum-scale=" + initial_scale + ", user-scalable=no"), domEle.firstElementChild) {
            domEle.firstElementChild.appendChild(viewport)
        } else {
            var m = dom.createElement("div");
            m.appendChild(viewport), dom.write(m.innerHTML)
        }
    }
    window.dpr = v;
    window.addEventListener("resize", function() {
        clearTimeout(timeCode), timeCode = setTimeout(resize, 300)
    }, false);
    window.addEventListener("pageshow", function(b) {
        b.persisted && (clearTimeout(timeCode), timeCode = setTimeout(resize, 300))
    }, false);
    resize();
}