webpackJsonp([33],{

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1247);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(147).default
var update = add("27812268", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-601398f1\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-601398f1\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1247:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(214);
exports = module.exports = __webpack_require__(146)(false);
// imports


// module
exports.push([module.i, "\n.advisory[data-v-601398f1]{position:relative;display:block;width:100px;text-align:center;height:18px;color:#4685c3;margin:14px auto 0;cursor:pointer;z-index:1\n}\n.advisory .icon[data-v-601398f1]{font-size:16px;color:inherit;font-weight:700\n}\n.advisory[data-v-601398f1]:hover{color:#e52e3a\n}\n.advisory .icon-right[data-v-601398f1]{position:relative;top:1px\n}\n.content-box[data-v-601398f1]{padding-top:10px;padding-bottom:80px;float:left;overflow:hidden\n}\n.content-box .content[data-v-601398f1]{width:760px;float:left\n}\n.content-box .content ul[data-v-601398f1]{background:#fff\n}\n.content-box .content ul li[data-v-601398f1]:nth-child(2n){font-size:16px;color:#333;margin:0 21px;background:#fbfbfb;padding-left:12px;height:32px;line-height:32px\n}\n.content-box .content ul li:nth-child(2n) span[data-v-601398f1]{border-left:2px solid #e52e3a;padding-right:12px;display:inline-block;height:12px;position:relative;top:1px\n}\n.content-box .content ul .user-box[data-v-601398f1]{background:#fff;overflow:hidden;padding:78px 40px\n}\n.content-box .content ul .user-box .user[data-v-601398f1]{width:122px;height:122px;float:left;border-radius:50%;overflow:hidden\n}\n.content-box .content ul .user-box .user img[data-v-601398f1]{width:100%;height:100%\n}\n.content-box .content ul .user-box .user-info[data-v-601398f1]{float:left;margin-left:34px;margin-top:21px\n}\n.content-box .content ul .user-box .user-info p[data-v-601398f1]{color:#666;font-size:16px;position:relative\n}\n.content-box .content ul .user-box .user-info p i[data-v-601398f1]{position:absolute;top:-28px;left:0;font-size:14px\n}\n.content-box .content ul .user-box .user-info p i.err[data-v-601398f1]{color:#e52e3a\n}\n.content-box .content ul .user-box .user-info p i.sus[data-v-601398f1]{color:#34bb45\n}\n.content-box .content ul .user-box .user-info p a[data-v-601398f1]{color:#4685c3;font-size:16px\n}\n.content-box .content ul .user-box .user-info p a[data-v-601398f1]:hover{color:#e52e3a\n}\n.content-box .content ul .user-box .user-info p .input-box[data-v-601398f1]{position:relative\n}\n.content-box .content ul .user-box .user-info p .input-box b[data-v-601398f1]{position:absolute;top:-6px;right:11px;width:22px;height:24px;background:url(" + escape(__webpack_require__(646)) + ") no-repeat -76px -126px\n}\n.content-box .content ul .user-box .user-info p .input-box b.error[data-v-601398f1]{background-position-x:-130px\n}\n.content-box .content ul .user-box .user-info p input[data-v-601398f1]{font-size:22px;font-weight:700;width:239px;height:41px;line-height:41px;border:none;outline:none;padding-left:12px\n}\n.content-box .content ul .user-box .user-info p input.active[data-v-601398f1]{border:1px solid #8dafe6\n}\n.content-box .content ul .user-box .user-info p button[data-v-601398f1]{width:50px;height:24px;background:#e52e3a;color:#fff;margin:0 7px;border:none;outline:none;cursor:pointer\n}\n.content-box .content ul .user-box .user-info p button[data-v-601398f1]:hover{background:#ff3341\n}\n.content-box .content ul .user-box .user-info p em[data-v-601398f1]{color:#999\n}\n.content-box .content ul .user-box .user-info p var[data-v-601398f1]{color:#e52e3a;font-size:22px;font-weight:700\n}\n.content-box .content ul .user-box .user-info p var.couvar[data-v-601398f1]{cursor:pointer\n}\n.content-box .content ul .user-box .user-info p var.couvar[data-v-601398f1]:hover{color:#ff3341;position:relative;top:-3px\n}\n.content-box .content ul .user-box .user-info p .z-border[data-v-601398f1]{border-right:1px solid #eee;padding-right:20px\n}\n.content-box .content ul .user-box .user-info p .l-span[data-v-601398f1]{padding-left:20px\n}\n.content-box .content ul .user-box .user-info p[data-v-601398f1]:nth-child(2){margin-top:35px\n}\n.content-box .content ul .order-box[data-v-601398f1]{padding-bottom:50px\n}\n.content-box .content ul .order-box .order[data-v-601398f1]{width:476px;margin:0 auto;overflow:hidden\n}\n.content-box .content ul .order-box .order div[data-v-601398f1]{position:relative;width:60px;float:left;text-align:center;font-size:14px;color:#333;cursor:pointer\n}\n.content-box .content ul .order-box .order div[data-v-601398f1]:hover{color:#e52e3a\n}\n.content-box .content ul .order-box .order div~div[data-v-601398f1]{margin-left:148px\n}\n.content-box .content ul .order-box .order div p[data-v-601398f1]{width:48px;height:36px;background:url(" + escape(__webpack_require__(646)) + ") no-repeat;margin:45px auto 22px\n}\n.content-box .content ul .order-box .order div.waitPay p[data-v-601398f1]{background-position:-69px 0\n}\n.content-box .content ul .order-box .order div.handle p[data-v-601398f1]{background-position:-162px 0\n}\n.content-box .content ul .order-box .order div.allOrder p[data-v-601398f1]{background-position:-266px 0\n}\n.content-box .content ul .order-box .order div var[data-v-601398f1]{position:absolute;top:31px;right:-14px;width:22px;height:14px;background:url(" + escape(__webpack_require__(646)) + ") -288px -68px no-repeat;color:#fff;font-size:12px;text-align:center\n}\n.content-box .content ul .account[data-v-601398f1]{padding:12px 50px\n}\n.content-box .content ul .account .telToken[data-v-601398f1]{overflow:hidden;padding:36px 0;border-bottom:1px solid #eee\n}\n.content-box .content ul .account .passToken[data-v-601398f1]{overflow:hidden;padding:36px 0\n}\n.content-box .content ul .account div .tel-left[data-v-601398f1]{float:left;line-height:25px\n}\n.content-box .content ul .account div .tel-left i[data-v-601398f1]{display:inline-block;background:url(" + escape(__webpack_require__(646)) + ") -282px -130px no-repeat;width:28px;height:25px;vertical-align:top\n}\n.content-box .content ul .account div .tel-left span[data-v-601398f1]{font-size:18px;color:#333;margin-left:20px;font-weight:700\n}\n.content-box .content ul .account div .tel-left em[data-v-601398f1]{margin-left:37px;color:#999;font-size:14px\n}\n.content-box .content ul .account div .tel-left var[data-v-601398f1]{font-size:14px;color:#333\n}\n.content-box .content ul .account div .tel-right[data-v-601398f1]{float:right;font-size:14px;color:#4685c3;cursor:pointer;position:relative;top:7px\n}\n.content-box .content ul .account div .tel-right i[data-v-601398f1]{display:inline-block;background:url(" + escape(__webpack_require__(646)) + ") no-repeat -154px -78px;width:4px;height:8px\n}\n.content-box .content ul .account div .tel-right[data-v-601398f1]:hover{color:#e52e3a\n}\n.content-box .content ul .account div .tel-right:hover i[data-v-601398f1]{background-position:-221px -78.1px\n}\n.content-box .right-content[data-v-601398f1]{float:left;margin-left:10px\n}\n.content-box .right-content .adviser[data-v-601398f1]{width:270px;background:#fff\n}\n.content-box .right-content .adviser ul[data-v-601398f1]{padding-bottom:14px\n}\n.content-box .right-content .adviser ul .adv-pho[data-v-601398f1]{padding:18px 12px 23px 28px;position:relative\n}\n.content-box .right-content .adviser ul .adv-pho div[data-v-601398f1]{width:66px;height:66px;border-radius:50%;background:url(" + escape(__webpack_require__(758)) + ") 0 0 no-repeat;background-size:100%;display:inline-block;vertical-align:middle;margin-top:-4px\n}\n.content-box .right-content .adviser ul .adv-pho div img[data-v-601398f1]{width:100%;height:100%\n}\n.content-box .right-content .adviser ul .adv-pho p[data-v-601398f1]{font-size:16px;color:#111;display:inline-block;margin-left:15px\n}\n.content-box .right-content .adviser ul .adv-pho em[data-v-601398f1]{position:absolute;top:18px;right:12px;font-size:12px;color:#a1a1a1;text-decoration:underline;cursor:pointer\n}\n.content-box .right-content .adviser ul .adv-pho em[data-v-601398f1]:hover{color:#e52e3a\n}\n.content-box .right-content .adviser ul li[data-v-601398f1]{padding-left:28px;color:#a9a9a9;font-size:14px\n}\n.content-box .right-content .adviser ul li~li[data-v-601398f1]{margin-bottom:14px\n}\n.content-box .right-content .collection[data-v-601398f1]{width:270px;margin-top:10px;background:#fff\n}\n.content-box .right-content .collection .collection-head[data-v-601398f1]{padding:22px 20px;border-bottom:1px solid #eee\n}\n.content-box .right-content .collection .collection-head span[data-v-601398f1]{border-left:2px solid #e52e3a;padding-right:12px;display:inline-block;height:12px;position:relative;top:1px\n}\n.content-box .right-content .collection .collection-head em[data-v-601398f1]{font-size:15px;color:#333\n}\n.content-box .right-content .collection .collection-head a[data-v-601398f1]{font-size:12px;color:#999;margin-left:56px;text-decoration:underline\n}\n.content-box .right-content .collection .collection-head a i[data-v-601398f1]{margin-left:4px;display:inline-block;background:url(" + escape(__webpack_require__(646)) + ") no-repeat -248px -79px;width:4px;height:8px\n}\n.content-box .right-content .collection .collection-head a[data-v-601398f1]:hover{color:#e52e3a\n}\n.content-box .right-content .collection .collection-head a:hover i[data-v-601398f1]{background-position:-221px -79px\n}\n.content-box .right-content .collection .collection-content[data-v-601398f1]{text-align:center;height:339px\n}\n.content-box .right-content .collection .collection-content p[data-v-601398f1]{background:url(" + escape(__webpack_require__(646)) + ") no-repeat -216px -202px;width:43px;height:42px;margin:90px auto 0\n}\n.content-box .right-content .collection .collection-content span[data-v-601398f1]{display:inline-block;margin-top:28px;color:#a1a1a1;font-size:14px\n}\n.content-box .right-content .collection .collection-shop[data-v-601398f1]{text-align:center;padding:0 32px;height:429px;overflow:auto\n}\n.content-box .right-content .collection .collection-shop .collectionBox[data-v-601398f1]{padding:0 20px 22px;border-bottom:1px dashed #dcdcdc;cursor:pointer;height:230px;box-sizing:border-box\n}\n.content-box .right-content .collection .collection-shop .collectionBox[data-v-601398f1]:hover{position:relative;top:-4px\n}\n.content-box .right-content .collection .collection-shop .collectionBox:hover p[data-v-601398f1]{color:#e52e3a\n}\n.content-box .right-content .collection .collection-shop .collectionBox div[data-v-601398f1]{padding-top:10px\n}\n.content-box .right-content .collection .collection-shop .collectionBox div img[data-v-601398f1]{width:92px;height:92px\n}\n.content-box .right-content .collection .collection-shop .collectionBox p[data-v-601398f1]{margin-top:10px;font-size:16px;line-height:20px;color:#333\n}\n.content-box .right-content .collection .collection-shop .collectionBox span[data-v-601398f1]{margin-top:10px;display:block;font-size:12px;color:#999;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;word-break:break-all\n}\n.content-box .right-content .collection .collection-shop .collectionBox span.sku_info[data-v-601398f1]{font-size:16px\n}\n.content-box .right-content .collection .collection-shop .collectionBox em[data-v-601398f1]{margin-top:15px;display:block;font-size:16px;color:#e52e3a\n}\n.update-adviser[data-v-601398f1]{width:458px;padding:40px;border-radius:10px;position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);background:#fff;z-index:2\n}\n.update-adviser p[data-v-601398f1]{font-size:26px;color:#333\n}\n.update-adviser textarea[data-v-601398f1]{padding-left:15px;padding-top:15px;margin-top:25px;width:461px;resize:none;overflow-y:scroll;background:#fbfbfb;font-size:16px;color:#bbb;border:none\n}\n.update-adviser div[data-v-601398f1]{width:348px;margin:30px auto 0\n}\n.update-adviser div button[data-v-601398f1]{width:140px;height:46px;color:#fff;outline:none;border:none;cursor:pointer;font-size:20px\n}\n.update-adviser div .sure[data-v-601398f1]{background:#e52e3a\n}\n.update-adviser div .sure[data-v-601398f1]:hover{background:#ff3341\n}\n.update-adviser div .cancel[data-v-601398f1]{margin-left:63px;background:#ccc\n}\n.update-adviser div .cancel[data-v-601398f1]:hover{background:#e52e3a\n}\n.update-adviser i[data-v-601398f1]{position:absolute;top:20px;right:20px;width:21px;height:21px;background:url(" + escape(__webpack_require__(646)) + ") -81px -66px no-repeat;cursor:pointer\n}\n.success[data-v-601398f1]{width:458px;padding:40px;border-radius:10px;position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);background:#fff;z-index:2;text-align:center\n}\n.success div[data-v-601398f1]{width:47px;height:46px;background:url(" + escape(__webpack_require__(646)) + ") 0 -198px no-repeat;margin:0 auto\n}\n.success p[data-v-601398f1]{margin-top:20px\n}\n.success .mbotop[data-v-601398f1]{margin-bottom:44px\n}\n.success button[data-v-601398f1]{outline:none;border:none;width:140px;height:46px;color:#fff;font-size:20px;background:#e52e3a;cursor:pointer\n}\n.success button[data-v-601398f1]:hover{background:#ff3341\n}\n.mask[data-v-601398f1]{position:fixed;top:0;left:0;width:100%;height:100%;background:#7d7d7d;opacity:.7;z-index:1\n}", ""]);

// exports


/***/ }),

/***/ 1248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "content-box" }, [
      _c("div", { staticClass: "content" }, [
        _c("ul", [
          _c("li", { staticClass: "user-box" }, [
            _vm.userInfo.header_img != null && _vm.userInfo.header_img != ""
              ? _c("div", { staticClass: "user" }, [
                  _c("img", {
                    attrs: { src: _vm.userInfo.header_img, alt: "" }
                  })
                ])
              : _c("div", { staticClass: "user" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(1249),
                      alt: ""
                    }
                  })
                ]),
            _vm._v(" "),
            _c("div", { staticClass: "user-info" }, [
              _c("p", [
                _c(
                  "i",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step,
                        expression: "step"
                      }
                    ],
                    class: [{ err: _vm.error }, { sus: _vm.success }]
                  },
                  [_vm._v(_vm._s(_vm.stepMsg))]
                ),
                _vm._v(" "),
                _c("span", [_vm._v("用户名: ")]),
                _vm._v(" "),
                _c("span", { staticClass: "input-box" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userName,
                        expression: "userName"
                      }
                    ],
                    ref: "username",
                    class: { active: _vm.step },
                    attrs: { type: "text", disabled: "disabled" },
                    domProps: { value: _vm.userName },
                    on: {
                      blur: function($event) {
                        _vm.regular()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.userName = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("b", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.regularStep,
                        expression: "regularStep"
                      }
                    ],
                    class: { error: _vm.error }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step == false,
                        expression: "step==false"
                      }
                    ],
                    attrs: { href: "javascript:void(0);" },
                    on: {
                      click: function($event) {
                        _vm.update()
                      }
                    }
                  },
                  [_vm._v("修改 ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.stepBtn,
                        expression: "stepBtn"
                      }
                    ],
                    on: {
                      click: function($event) {
                        _vm.postUser()
                      }
                    }
                  },
                  [_vm._v("保存")]
                ),
                _vm._v(" "),
                _c("em", [_vm._v("可用于登录哦~")])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("span", [_vm._v("可使用的优惠券: ")]),
                _vm._v(" "),
                _c("var", { staticClass: "couvar", on: { click: _vm.toCou } }, [
                  _vm._v(_vm._s(_vm.couponNum))
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "z-border" }, [_vm._v("张")]),
                _vm._v(" "),
                _c("span", { staticClass: "l-span" }, [
                  _vm._v("累计消费金额: ")
                ]),
                _vm._v(" "),
                _c("var", [_vm._v(_vm._s(_vm.consumptiontotal))]),
                _vm._v(" "),
                _c("span", [_vm._v("元")])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("li", { staticClass: "order-box" }, [
            _c("div", { staticClass: "order" }, [
              _c(
                "div",
                { staticClass: "waitPay", on: { click: _vm.toWaitpay } },
                [
                  _c("p"),
                  _vm._v(" "),
                  _c("span", [_vm._v("待付款")]),
                  _vm._v(" "),
                  _c(
                    "var",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.wait_payment != 0,
                          expression: "wait_payment!=0"
                        }
                      ]
                    },
                    [_vm._v(_vm._s(_vm.wait_payment))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "handle", on: { click: _vm.tohandle } },
                [
                  _c("p"),
                  _vm._v(" "),
                  _c("span", [_vm._v("办理中")]),
                  _vm._v(" "),
                  _c(
                    "var",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.dealt != 0,
                          expression: "dealt!=0"
                        }
                      ]
                    },
                    [_vm._v(_vm._s(_vm.dealt))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "allOrder", on: { click: _vm.toOrder } },
                [_c("p"), _vm._v(" "), _c("span", [_vm._v("全部订单")])]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("li", { staticClass: "account" }, [
            _c("div", { staticClass: "telToken" }, [
              _c("p", { staticClass: "tel-left" }, [
                _c("i"),
                _vm._v(" "),
                _c("span", [_vm._v("手机验证")]),
                _vm._v(" "),
                _c("em", [_vm._v("您的验证手机号码为:")]),
                _vm._v(" "),
                _c("var", [_vm._v(_vm._s(_vm.reptel))])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "passToken" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "tel-right", on: { click: _vm.changePass } },
                [_vm._v("修改 "), _c("i")]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "right-content" }, [
        _vm.userInfo.adviser != "" &&
        _vm.userInfo.adviser != "apply" &&
        _vm.userInfo.adviser != null
          ? _c("div", { staticClass: "adviser" }, [
              _c("ul", [
                _c("li", { staticClass: "adv-pho" }, [
                  _c("div", { ref: "pho" }),
                  _vm._v(" "),
                  _c("p", [_vm._v("我的专属顾问")]),
                  _vm._v(" "),
                  _c("em", { on: { click: _vm.updAdv } }, [_vm._v("更换顾问")])
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("\n                       姓名 : "),
                  _c("span", [_vm._v(_vm._s(_vm.advInfo.adv_name))])
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("\n                       工号 : "),
                  _c("span", [_vm._v(_vm._s(_vm.advInfo.job_number))])
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("\n                       电话 : "),
                  _c("span", [_vm._v(_vm._s(_vm.advInfo.mobile))])
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("\n                       邮箱 : "),
                  _c("span", [_vm._v(_vm._s(_vm.advInfo.mailbox))])
                ])
              ])
            ])
          : _c("div", { staticClass: "adviser" }, [_vm._m(3)]),
        _vm._v(" "),
        _c("div", { staticClass: "collection" }, [
          _c("div", { staticClass: "collection-head" }, [
            _c("p", [
              _c("span"),
              _vm._v(" "),
              _c("em", [_vm._v("我收藏的商品")]),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: { href: "JavaScript:void(0);" },
                  on: { click: _vm.openUrl }
                },
                [_vm._v("查看更多"), _c("i")]
              )
            ])
          ]),
          _vm._v(" "),
          _vm.collectionNone
            ? _c("div", { staticClass: "collection-content" }, [
                _c("p"),
                _vm._v(" "),
                _c("span", [_vm._v("您目前还没有收藏商品哦~")])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.collectionNone,
                  expression: "!collectionNone"
                }
              ],
              staticClass: "collection-shop"
            },
            _vm._l(_vm.collection, function(item, index) {
              return _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.collectionNone,
                      expression: "!collectionNone"
                    }
                  ],
                  key: index
                },
                [
                  item.sku_info != ""
                    ? _c(
                        "div",
                        {
                          staticClass: "collectionBox",
                          on: {
                            click: function($event) {
                              _vm.to(item.product_id)
                            }
                          }
                        },
                        [
                          _c("div", [
                            _c("img", {
                              attrs: { src: item.product_img, alt: "" }
                            })
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(item.product_name))]),
                          _vm._v(" "),
                          _c("span", { attrs: { title: item.product_desc } }, [
                            _vm._v(_vm._s(item.product_desc))
                          ]),
                          _vm._v(" "),
                          item.sku_info.sku_buy_status == 1
                            ? _c("em", [
                                _vm._v("￥" + _vm._s(item.sku_info.sku_price))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          item.sku_info.sku_buy_status != 1
                            ? _c(
                                "a",
                                {
                                  staticClass: "advisory",
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.openzxFn($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v("立即咨询"),
                                  _c("i", { staticClass: "icon icon-right" })
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e()
                ]
              )
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.upd_adv,
            expression: "upd_adv"
          }
        ],
        staticClass: "update-adviser"
      },
      [
        _c("p", [_vm._v("更换顾问留言")]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.textVal,
              expression: "textVal"
            }
          ],
          attrs: { name: "", id: "", cols: "30", rows: "10" },
          domProps: { value: _vm.textVal },
          on: {
            click: _vm.cleanVal,
            blur: _vm.resetVal,
            focus: _vm.cleanVal,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.textVal = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("div", [
          _c("button", { staticClass: "sure", on: { click: _vm.sure } }, [
            _vm._v("确定")
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "cancel", on: { click: _vm.cancel } }, [
            _vm._v("取消")
          ])
        ]),
        _vm._v(" "),
        _c("i", { on: { click: _vm.cancel } })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          { name: "show", rawName: "v-show", value: _vm.suF, expression: "suF" }
        ],
        staticClass: "success"
      },
      [
        _c("div"),
        _vm._v(" "),
        _c("p", [_vm._v("信息提交成功")]),
        _vm._v(" "),
        _c("p", { staticClass: "mbotop" }, [
          _vm._v("我们将在1-2个工作日内与您取得联系")
        ]),
        _vm._v(" "),
        _c("button", { on: { click: _vm.cancel } }, [_vm._v("关闭")])
      ]
    ),
    _vm._v(" "),
    _c("div", {
      directives: [
        { name: "show", rawName: "v-show", value: _vm.mask, expression: "mask" }
      ],
      staticClass: "mask"
    })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("span"), _vm._v("我的订单")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("span"), _vm._v("账户安全")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "tel-left" }, [
      _c("i"),
      _vm._v(" "),
      _c("span", [_vm._v("登录密码")]),
      _vm._v(" "),
      _c("em", [
        _vm._v("互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "adv-pho" }, [
        _c("div", [
          _c("img", {
            attrs: {
              src: __webpack_require__(758),
              alt: ""
            }
          })
        ]),
        _vm._v(" "),
        _c("p", [_vm._v("我的专属顾问")])
      ]),
      _vm._v(" "),
      _c("li", [_vm._v("\n                       姓名 : "), _c("span")]),
      _vm._v(" "),
      _c("li", [_vm._v("\n                       工号 : "), _c("span")]),
      _vm._v(" "),
      _c("li", [
        _vm._v("\n                       电话 : "),
        _c("span", [_vm._v("010-67443880")])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("\n                       邮箱 : "),
        _c("span", [_vm._v("xinxibu@gbicom.com")])
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-601398f1", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 1249:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB6CAYAAACfmyzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NmFhZDFkMy00NmJmLTcxNGYtYTUwZi0wZTQ5MGZjMDY0Y2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkE3ODNEOEVBQTY3MTFFOEExRjFBODRCMDQxRjA3NzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkE3ODNEOERBQTY3MTFFOEExRjFBODRCMDQxRjA3NzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2ZjViMTRjLTFlYWUtMWY0Ni1iMTU4LTY5OGFhODQ3ODU5NSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmZlZGI4NmNmLTMxMDAtZGY0MS05ZWZiLTNlZDBi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"

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(846);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_601398f1_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(1248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(213);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(1246)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-601398f1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_601398f1_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_601398f1_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\user\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-601398f1", Component.options)
  } else {
    hotAPI.reload("data-v-601398f1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "/images/xbt.746023f.png";

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAB5CAYAAADlGnW+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNjIwODlGNUIxODMxMUU4QjdBMENCNjlCNDYxQzE4NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNjIwODlGNkIxODMxMUU4QjdBMENCNjlCNDYxQzE4NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA2MjA4OUYzQjE4MzExRThCN0EwQ0I2OUI0NjFDMTg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA2MjA4OUY0QjE4MzExRThCN0EwQ0I2OUI0NjFDMTg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VGJRYAAAC/RJREFUeNrsXWuMXVUV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"

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_api_js__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_api2_js__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_util_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(215);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    metaInfo: function metaInfo() {
        return {
            title: '个人中心-创新科技服务云平台'
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapState */])(['isLogin'])),
    data: function data() {
        return {
            userName: '', //用户名
            step: false, //信息提示
            stepMsg: '支持中文、英文字母、数字，两种及以上的组合，4-20个字符',
            stepBtn: false,
            regularStep: false, //正则判断
            error: true, //错误提示
            success: false,
            mask: false, //遮罩层
            upd_adv: false, //更换顾问
            textVal: "请您简要描述更换顾问的理由或对顾问的要求，感谢", //textarea值
            suF: false, //信息提交成功
            collectionNone: true, //有没有收藏
            collectionDataId: " ", //商品id
            collection: '', //收藏商品
            userInfo: '', //用户信息
            advInfo: '',
            reptel: '', //替换的*号的电话
            tel: '',
            ordername: '',
            couponNum: 0, //优惠券数量
            consumptiontotal: 0, //总消费金额
            wait_payment: 0, //待付款
            dealt: 0 //办理中

        };
    },
    created: function created() {
        if (this.isLogin) {
            this.getCollect();
            this.getUserinfo();
            this.getWaitNum();
        } else {
            this.userView = this.$route.query.userView;
            this.$router.push({ path: '/login', query: { userView: this.userView } });
        }
    },

    methods: {
        update: function update() {
            //更改用户名
            this.step = true;
            this.stepBtn = true;
            this.$refs.username.removeAttribute("disabled");
            this.$refs.username.focus();
        },
        regular: function regular() {
            //用户名正则匹配
            var reg = /^(?=.*[a-z])(?=.*[0-9])|(?=.*[a-z])(?=.*[\u4E00-\u9FA5])|(?=.*[0-9])(?=.*[\u4E00-\u9FA5])[\u4E00-\u9FA5A-Za-z0-9]{4,20}$/gi;
            if (reg.test(this.userName)) {
                this.checkUserName();
            } else {
                this.stepMsg = '用户名格式错误';
                this.error = true;
                this.success = false;
            }
        },
        postUser: function postUser() {
            //发送用户名
            if (this.error == false) {
                this.setUserName();
            }
        },
        sure: function sure() {
            var _this = this;

            //确认更换顾问弹窗
            console.log(this.textVal);
            if (this.textVal != "请您简要描述更换顾问的理由或对顾问的要求，感谢") {
                __WEBPACK_IMPORTED_MODULE_0__static_js_api_js__["a" /* default */].updateadv(this.textVal).then(function (res) {
                    console.log(res);
                    if (res.data.code == 200) {
                        _this.upd_adv = false;
                        _this.suF = true;
                    }
                });
            } else {
                this.textVal = "请您简要描述更换顾问的理由或对顾问的要求，感谢";
                this.$message({
                    message: '请您简要描述更换顾问的理由或对顾问的要求，感谢',
                    type: 'error',
                    duration: 1500
                });
            }
        },
        updAdv: function updAdv() {
            //更换顾问
            this.mask = true;
            this.upd_adv = true;
        },
        cancel: function cancel() {
            //取消
            this.resetVal();
            this.mask = false;
            this.upd_adv = false;
            this.suF = false;
        },
        replaceVal: function replaceVal() {
            var reg = /\s+/g;
            this.textVal = this.textVal.replace(reg, ' ');
        },
        cleanVal: function cleanVal() {
            //清除顾问val
            var tval = "请您简要描述更换顾问的理由或对顾问的要求，感谢";
            if (tval == this.textVal) {
                this.textVal = "";
            }
        },
        resetVal: function resetVal() {
            //重置VAl
            this.replaceVal();
            if (this.textVal == "" || this.textVal == " ") {
                this.textVal = "请您简要描述更换顾问的理由或对顾问的要求，感谢";
            }
        },
        openUrl: function openUrl() {
            //打开个人中心收藏页
            window.open(window.location.origin + '/home/collect');
        },
        getCollect: function getCollect() {
            var _this2 = this;

            //获取收藏
            __WEBPACK_IMPORTED_MODULE_0__static_js_api_js__["a" /* default */].getCollect().then(function (res) {
                var data = [];
                if (res.data.code == 200) {
                    _this2.collectionDataId = res.data.data;
                    var product_ids = [];
                    _this2.collectionDataId.list.forEach(function (element) {
                        product_ids.push(element.collect_id);
                    });
                    var data = {
                        product_ids: product_ids + '',
                        want_array: 1
                    };
                    var that = _this2;
                    Object(__WEBPACK_IMPORTED_MODULE_2__static_js_util_js__["j" /* postFn */])("/product/product/infos", data, function (res) {
                        if (res.data.code == 200) {
                            if (res.data.data != "" && res.data.data_2.valid_sku_num > 0) {
                                that.collectionNone = false;
                                that.collection = res.data.data;
                            }
                        }
                    });
                }
            });
        },
        getUserinfo: function getUserinfo() {
            var _this3 = this;

            //获取用户信息
            __WEBPACK_IMPORTED_MODULE_0__static_js_api_js__["a" /* default */].getUserInfo().then(function (res) {
                console.log(res);
                if (res.data.code == 200) {
                    _this3.userName = res.data.data.username;
                    _this3.ordername = res.data.data.username;
                    _this3.userInfo = res.data.data;
                    _this3.tel = res.data.data.tel;
                    _this3.consumptiontotal = res.data.data.consumption_total;
                    _this3.reptel = (_this3.userInfo.tel + "").replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
                    if (_this3.userInfo.adviser != '' && _this3.userInfo.advInfo != 'apply' && _this3.userInfo.adviser != null) {
                        _this3.getAdv();
                    }
                    _this3.getCouNum();
                }
            });
        },
        setUserName: function setUserName() {
            var _this4 = this;

            //设置用户名
            __WEBPACK_IMPORTED_MODULE_0__static_js_api_js__["a" /* default */].setuserName(this.userName).then(function (res) {
                if (res.data.code == 504) {
                    _this4.stepMsg = res.data.msg;
                    _this4.error = true;
                } else if (res.data.code == 505) {
                    _this4.stepMsg = res.data.msg;
                    _this4.error = true;
                } else if (res.data.code == 506) {
                    _this4.stepMsg = res.data.msg;
                    _this4.error = true;
                } else if (res.data.code == 200) {
                    _this4.step = false;
                    _this4.stepBtn = false;
                    _this4.regularStep = false;
                    _this4.success = false;
                    _this4.error = false;
                    _this4.getUserinfo();
                    _this4.stepMsg = '支持中文、英文、字母，两种及以上的组合，4-20字符', _this4.$refs.username.setAttribute("disabled", "disabled");
                    _this4.$message({
                        message: '恭喜你，修改成功',
                        type: 'success'
                    });
                }
            });
        },
        checkUserName: function checkUserName() {
            var _this5 = this;

            //查询用户名是否可使用
            if (this.ordername != this.userName) {
                __WEBPACK_IMPORTED_MODULE_0__static_js_api_js__["a" /* default */].checkuserName(this.userName).then(function (res) {
                    console.log(res);
                    if (res.data.code == 504) {
                        _this5.stepMsg = res.data.msg;
                        _this5.error = true;
                        _this5.success = false;
                    } else if (res.data.code == 505) {
                        _this5.stepMsg = res.data.msg;
                        _this5.error = true;
                        _this5.success = false;
                    } else if (res.data.code == 506) {
                        _this5.stepMsg = res.data.msg;
                        _this5.error = true;
                        _this5.success = false;
                    } else if (res.data.code == 200) {
                        _this5.stepMsg = "可以使用";
                        _this5.error = false;
                        _this5.success = true;
                    }
                });
            } else {
                this.step = false;
                this.stepBtn = false;
                this.regularStep = false;
                this.$refs.username.setAttribute('disabled', "true");
            }
        },
        getAdv: function getAdv() {
            //获取顾问
            var data = {
                // job_number:'BJ01024'
                job_number: this.userInfo.adviser
            };
            var that = this;
            Object(__WEBPACK_IMPORTED_MODULE_2__static_js_util_js__["j" /* postFn */])("/sundry/adviser/adv_info", data, function (res) {
                if (res.data.code == 200 && res.data.data != '') {
                    that.advInfo = res.data.data;
                    if (that.advInfo.face_photo != '' && that.advInfo.face_photo != null && that.advInfo.face_photo != undefined) {
                        that.$refs.pho.style.background = 'url(' + that.advInfo.face_photo + ') 0 0 no-repeat';
                    }
                    that.$refs.pho.style.backgroundSize = '100%';
                    console.log(that.advInfo, "顾问信息");
                }
            });
        },
        changePass: function changePass() {
            //修改密码
            this.$router.push('/changePassword');
        },
        toCou: function toCou() {
            //去优惠券页面
            this.$router.push('/home/coupon');
        },
        getCouNum: function getCouNum() {
            //获取优惠券数量
            var data = {
                uid: this.userInfo.id
            };
            var that = this;
            Object(__WEBPACK_IMPORTED_MODULE_2__static_js_util_js__["j" /* postFn */])('/event/coupon/notused_coupons', data, function (res) {
                console.log(res, "couponNum");
                if (res.data.code == 200) {
                    that.couponNum = res.data.data.total;
                }
            });
        },
        toWaitpay: function toWaitpay() {
            //去代付款页面
            this.$router.push({ path: '/home/order', query: { num: 1 } });
        },
        tohandle: function tohandle() {
            //去办理中页面
            this.$router.push({ path: '/home/order', query: { num: 2 } });
        },
        toOrder: function toOrder() {
            //去全部订单页面
            this.$router.push({ path: '/home/order', query: { num: 0 } });
        },
        to: function to(id) {
            //去商品详情页
            window.open(window.location.origin + '/' + id);
        },
        getWaitNum: function getWaitNum() {
            var _this6 = this;

            //获取代付款办理中数量
            __WEBPACK_IMPORTED_MODULE_1__static_js_api2_js__["a" /* default */].getOrderStat().then(function (res) {
                console.log(res, "resNUMapi2");
                if (res.data.code == 200) {
                    _this6.wait_payment = res.data.data.wait_payment;
                    _this6.dealt = res.data.data.dealt;
                }
            });
        }
    },
    components: {}
});

/***/ })

});