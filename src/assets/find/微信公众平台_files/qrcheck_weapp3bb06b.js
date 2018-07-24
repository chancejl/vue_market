define("tpl/pagebar.html.js",[],function(){
return'<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});define("tpl/qrcheck.html.js",[],function(){
return'<div class="qrcode_wrp qrcode_scan qrcode_scan_light">\n    <div class="qrcode_loading js_qrcheck_img_loading">\n        <div class="loading_qrcode"></div>\n        <div class="gif_loading"></div>\n    </div>\n    <img class="js_qrcheck_img qrcode" style="display:none"/>\n    <div class="js_qrcheck_tips qrcode_tips">\n        <div class="js_qrcheck_content qrcheck_content">\n        </div>\n        <div class="js_qrcheck_ret_0 js_qrcheck_tpl">\n            <div class="page_msg small small_gap">\n                <p class="desc">为了验证你的身份，请用绑定了{name}本人银行卡的微信扫描二维码。本验证方式不扣除任何费用。</p>\n                <p class="desc">若微信没有绑定银行卡，请先绑定。<a target="_blank" href="http://kf.qq.com/faq/120911VrYVrA141111MFVVvU.html">如何绑定</a></p>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_fail js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>二维码获取失败</h4>\n                    <p>请<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码</p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_login js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>登录超时</h4>\n                    <p>需要<a href="/">重新登录</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_1 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan succ"></i>\n                <div class="status_txt">\n                    <h4>身份验证成功</h4>\n                    <p>{name}将作为该公众号的{name_title}</p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_1 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>请更换运营者</h4>\n                    <p>该身份证号已绑定了5个公众平台帐号，不可继续绑定，请更换运营者，<a href=\'https://kf.qq.com/faq/120911VrYVrA140428naUJVv.html\' target=\'_blank\'>查看详情</a>。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_5 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>身份验证失败</h4>\n                    <p>该微信号已作为多个公众号{name_title}，无法再次作为{name_title}绑定公众平台。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_6 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>该银行卡已被使用</h4>\n                    <p>该银行卡已被使用注册公众帐号，不可继续注册。</p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_13 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>请更换微信号</h4>\n                    <p>该微信号已绑定了5个公众平台帐号，不可继续绑定，请更换微信号，<a href=\'https://kf.qq.com/faq/120911VrYVrA140428naUJVv.html\' target=\'_blank\'>查看详情</a>。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_14 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>操作失败</h4>\n                    <p>你的微信尚未绑定手机号，无法绑定公众号管理员。如需绑定手机号，请在微信中，点击“我”-“设置”-“帐号与安全”-“手机号”进行绑定。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_15 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>请更换微信号</h4>\n                    <p>该微信号已绑定了五个公众号的赞赏功能，请刷新二维码，使用绑定有注册人{name}的银行卡的其他微信号重新扫描二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_16 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>微信未实名</h4>\n                    <p>该微信号未绑定银行卡，或银行卡不可用。请重新绑定注册人{name}的银行卡，并刷新二维码重试。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_101 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>姓名不匹配</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。如身份信息有过更改，请根据手机上的提示更新微信支付实名信息。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_102 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>身份证不匹配</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。如身份信息有过更改，请根据手机上的提示更新微信支付实名信息。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_103 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>姓名、身份证不匹配</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_116 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>未能验证实名信息</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a> <a href="http://kf.qq.com/faq/170209jaAbae170209rAbEFN.html" target="_blank">查看原因</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_117 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>请重新绑卡</h4>\n                    <p>请尝试将银行卡解除绑定后重新绑定，并<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码再试。<a href="http://kf.qq.com/faq/120911VrYVrA141201zeU3Ij.html" target="_blank">如何解绑</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_118 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>请重新绑卡</h4>\n                    <p>当前绑定的银行卡暂不支持实名验证，请尝试绑定其他银行的银行卡，并<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码后重试。<a href="http://kf.qq.com/faq/130807me2YZf130807BJBBNr.html" target="_blank">如何绑定</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_119 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>未能验证身份</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a> <a href="http://kf.qq.com/faq/170209jaAbae170209rAbEFN.html" target="_blank">查看原因</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_120 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>未能验证实名信息</h4>\n                    <p>请用绑定有{name}的银行卡微信扫描此二维码。<a href="javascript:;" class="js_qrcheck_reloading">刷新</a> <a href="http://kf.qq.com/faq/170209jaAbae170209rAbEFN.html" target="_blank">查看原因</a></p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_121 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>未能验证实名信息</h4>\n                    <p>\n                        与开通微信支付时注册的身份证号码不一致，请点击手机上的提示链接将身份证信息更新后再试。                        <a href="javascript:;" class="js_qrcheck_reloading">刷新</a> <a href="http://kf.qq.com/faq/170209jaAbae170209rAbEFN.html" target="_blank">查看原因</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_60411 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>系统错误</h4>\n                    <p>\n                        请<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_60411 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>系统错误</h4>\n                    <p>\n                        请<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_2_60412 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>身份证信息错误</h4>\n                    <p>\n                        请<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="js_qrcheck_ret_3 js_qrcheck_tpl">\n            <div class="status">\n                <i class="icon_qrcode_scan warn"></i>\n                <div class="status_txt">\n                    <h4>二维码已过期</h4>\n                    <p>请<a href="javascript:;" class="js_qrcheck_reloading">刷新</a>二维码，并重新扫描</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n';
});define("tpl/register/banklist.html.js",[],function(){
return'{if list.length>0}\n<div class="frm_controls">\n	{each list as item}\n	<label class="frm_radio_label">\n		<i class="icon_radio"></i>\n		<span class="lbl_content js_txt_bank_name">{item}</span>\n		<input type="radio" name="bank" class="frm_radio" value="{item}">\n	</label>\n	{/each}\n</div>\n{else}\n	<!-- <div>未搜索到与“{keyword}”相关的银行，请重新搜索或<a class="js_btn_reset_search" href="javascript:;">查看全部银行</a> -->\n	<div class="empty_bank_list">\n		没有找到该银行信息，请核实，若开户银行不在列表中，可采用人工验证方式。		<a class="js_btn_reset_search" href="javascript:;">查看全部银行</a>\n	</div>\n{/if}';
});define("tpl/register/bankdialog.html.js",[],function(){
return'<div>\n<!--Begin 银行-->\n	<div class="sub_title_bar white group">\n		\n		<p class="r js_div_title"></p>\n		<form class="js_form_search frm_input_box search append l">\n			<a class="del_btn js_btn_reset_search" href="javascript:">\n				<i class="icon_search_del"></i>&nbsp;\n			</a>\n			<a href="javascript:void(0);" class="frm_input_append js_btn_search">\n				<i class="icon16_common search_gray">\n					搜索				</i>\n				&nbsp;\n			</a>\n			<input type="text" placeholder="请输入银行名称" value="" class="frm_input js_input_search">\n		</form>\n		<a style="margin-left:20px" href="http://kf.qq.com/faq/120911VrYVrA150526NRbyeu.html" target="_blank">找不到银行？</a>\n		<!-- <span style="margin-left: 20px;">若找不到银行可采用人工验证方式</span> -->\n	</div>\n\n	<div class="js_div_loading">\n		<div class="load_bank">\n            <i class="icon_loading_small white"></i>\n        </div>\n	</div>\n\n	<div class="js_div_banklist banklist" style="display:none"></div>\n\n	<div class="js_div_pagebar"></div>\n\n<!--End 银行-->\n</div>';
});define("common/wx/pagebar.js",["widget/pagination.css","tpl/pagebar.html.js","common/qq/Class.js","common/wx/Tips.js"],function(t,e){
"use strict";
var i,n,s,a=(t("widget/pagination.css"),t("tpl/pagebar.html.js")),r=t("common/qq/Class.js"),h=t("common/wx/Tips.js");
s=template.compile(a),i=e,n={
first:"首页",
last:"末页",
prev:"上页",
next:"下页",
startPage:1,
initShowPage:1,
perPage:10,
startRange:1,
midRange:3,
endRange:1,
totalItemsNum:0,
container:"",
callback:null,
isNavHide:!1,
isSimple:!0
};
var o=function(t,e,i){
var n;
return n=t+(e-1),n=n>i?i:n;
},g=function(t,e,i){
var n;
return n=i%2===0?e-(i/2-1):e-(i-1)/2,n=t>n?t:n;
},u=function(t,e,i){
var n;
return n=e%2===0?parseInt(t)+e/2:parseInt(t)+(e-1)/2,n=n>i?i:n;
},c=function(t,e,i){
var n;
return n=e-(i-1),n=t>n?t:n;
},l=function(t,e){
if(e[t]&&isNaN(e[t]))throw new Error("Invalid arguments: "+t+" should be a number");
},p=function(t){
if(l("perPage",t),l("totalItemsNum",t),l("startPage",t),l("startRange",t),l("midRange",t),
l("endRange",t),l("initShowPage",t),void 0!==t.callback&&null!==t.callback&&!$.isFunction(t.callback))throw new Error("Invalid arguments: callback should be a function");
},d=function(t,e,i){
var n=t.container.find(".page_"+i);
if("string"==typeof e){
var s=$(e);
0!==s.length&&(n=s);
}else{
if(e!==!1)throw new Error("Invalid Paramter: '"+i+"' should be a string or false");
n.hide();
}
return n;
},P=r.declare({
init:function(t){
if(t.totalItemsNum){
var e;
if(p(t),e=$.extend(!0,{},n,t),this._init(e),e.initShowPage<e.startPage)throw new Error("Invalid arguments: initShowPage should be larger than startPage");
if(e.initShowPage>e.endPage)throw new Error("Invalid arguments: initShowPage should be smaller than endPage");
this.paginate();
}
},
_init:function(t){
this.currentPage=t.initShowPage,this._isNextButtonShow=!0,this._isPrevButtonShow=!0,
this.uid="wxPagebar_"+ +new Date,this.initEventCenter(),this.optionsForTemplate={},
$.extend(this,t),this.container=$(t.container),this.optionsForTemplate.isSimple=t.isSimple,
this.optionsForTemplate.firstButtonText=0===$(t.first).length?t.first:n.first,this.optionsForTemplate.lastButtonText=0===$(t.last).length?t.last:n.last,
this.optionsForTemplate.nextButtonText=0===$(t.next).length?t.next:n.next,this.optionsForTemplate.prevButtonText=0===$(t.prev).length?t.prev:n.prev,
this.optionsForTemplate.isNavHide=t.isNavHide,this.generatePages(parseInt(this.totalItemsNum)),
this.gapForStartRange=this.container.find(".gap_prev"),this.gapForEndRange=this.container.find(".gap_next"),
this.firstButton=d(this,t.first,"first"),this.lastButton=d(this,t.last,"last"),this.prevButton=d(this,t.prev,"prev"),
this.nextButton=d(this,t.next,"next"),this.bindEvent();
},
initEventCenter:function(){
this.eventCenter={
eventList:[],
bind:function(t,e){
this.eventList[t]||(this.eventList[t]=[]),this.eventList[t].push(e);
},
trigger:function(t){
var e,i;
this.eventList[t]||(this.eventList[t]=[]),e=this.eventList[t];
for(var n=0;n<e.length;n++)if(i=Array.prototype.slice.call(arguments,1),e[n].apply(this,i)===!1)return!1;
},
unbind:function(t,e){
if(!this.eventList)throw new Error("The eventList was undefined");
if(!this.eventList[t])throw new Error("The event type "+t+" was not found");
if(void 0===e)this.eventList[t]=[];else for(var i=this.eventList[t],n=i.length,s=0;n>s;s++)if(i[s]===e){
i.splice(s,1);
break;
}
}
};
},
generatePages:function(t){
var e,i,n,a,r,h;
for(this.pageNum=Math.ceil(t/this.perPage),this.endPage=this.startPage+this.pageNum-1,
this.gapForStartRange=null,this.gapForEndRange=null,this.optionsForTemplate.startRange=[],
this.optionsForTemplate.midRange=[],this.optionsForTemplate.endRange=[],i=o(this.startPage,this.startRange,this.endPage),
n=g(this.startPage,this.currentPage,this.midRange),a=u(this.currentPage,this.midRange,this.endPage),
r=c(this.startPage,this.endPage,this.endRange),i>=r&&(r=i+1),e=this.startPage;i>=e;e+=1)this.optionsForTemplate.startRange.push(e);
for(var l=0,e=n;l<this.midRange;l+=1,e+=1)this.optionsForTemplate.midRange.push(e);
for(e=r;e<=this.endPage;e+=1)this.optionsForTemplate.endRange.push(e);
this.optionsForTemplate.endPage=this.endPage,this.optionsForTemplate.initShowPage=this.initShowPage,
h=s(this.optionsForTemplate),this.container.html(h),1==this.pageNum?this.container.hide():this.container.show(),
this.pages=this.container.find(".page_nav"),this.midPages=this.container.find(".js_mid"),
this.labels=this.container.find(".page_num label"),this.container.find(".pagination").attr("id",this.uid);
},
paginate:function(){
var t,e,i,n,s,a,r,h,l,p;
if(this.isSimple===!0)for(var d=0,P=this.labels.length;P>d;d++)d%2===0&&$(this.labels[d]).html(this.currentPage);else{
e=o(this.startPage,this.startRange,this.endPage),a=g(this.startPage,this.currentPage,this.midRange),
r=u(this.currentPage,this.midRange,this.endPage),h=c(this.startPage,this.endPage,this.endRange),
e>=h&&(h=e+1),e>=a&&(a=e+1),r>=h&&(r=h-1),this.pages.show(),this.pages.removeClass("current"),
p=parseInt(this.midPages.length/this.midRange);
for(var d=0,P=p;P>d;d++){
for(s=0,t=a;r>=t;t+=1)n=this.midRange*d+(t-a),l=$(this.midPages[n]),l.html(t),s+=1,
t==this.currentPage&&l.addClass("current");
for(n=this.midRange*d+s;s<this.midRange;s+=1)l=$(this.midPages[n]),l.hide(),l.removeClass("current"),
n+=1;
}
for(var d=0,P=this.pages.length;P>=d;d++)i=$(this.pages[d]),t=parseInt(i.html()),
t===parseInt(this.currentPage)&&i.addClass("current");
if(a>e+1?this.gapForStartRange.show():this.gapForStartRange.hide(),h>r+1?this.gapForEndRange.show():this.gapForEndRange.hide(),
this.isNavHide){
for(var d=this.startPage;d<=this.endPage;d+=1)this.pages.hide();
this.gapForStartRange.hide(),this.gapForEndRange.hide();
}
}
this.checkButtonShown();
},
destroy:function(){
this.container.off("click","#"+this.uid+" a.page_nav"),this.container.off("click","#"+this.uid+" a.page_go"),
this.container.off("keydown","#"+this.uid+" .goto_area input"),this.nextButton.off("click"),
this.prevButton.off("click"),this.firstButton.off("click"),this.lastButton.off("click");
},
bindEvent:function(){
this.container.on("click","#"+this.uid+" a.page_nav",this.proxy(function(t){
var e=$(t.target);
return e.hasClass("current")?!1:(this.clickPage(parseInt(e.html())),!1);
},this)),this.nextButton.on("click",this.proxy(function(t){
$(t.target);
return this.nextPage(),!1;
},this)),this.prevButton.on("click",this.proxy(function(t){
$(t.target);
return this.prevPage(),!1;
},this)),this.firstButton.on("click",this.proxy(function(t){
$(t.target);
return this.goFirstPage(),!1;
},this)),this.lastButton.on("click",this.proxy(function(t){
$(t.target);
return this.goLastPage(),!1;
},this)),this.container.on("click","#"+this.uid+" a.page_go",this.proxy(function(t){
var e=$(t.target).prev();
return this.goPage(e.val()),!1;
},this)),this.container.on("keydown","#"+this.uid+" .goto_area input",this.proxy(function(t){
return wx.isHotkey(t,"enter")?(this.container.find("a.page_go").click(),!1):void 0;
},this));
},
on:function(t,e){
this.eventCenter.bind(t,this.proxy(e,this));
},
callbackFunc:function(t){
var e={
currentPage:this.currentPage,
perPage:this.perPage,
count:this.pageNum
};
return $.isFunction(this.callback)&&this.callback(e)===!1?!1:this.eventCenter.trigger(t,e)===!1?!1:void this.paginate();
},
proxy:function(t,e){
return function(){
var i=Array.prototype.slice.call(arguments,0);
return t.apply(e,i);
};
},
nextPage:function(){
this.currentPage!==this.endPage&&(this.currentPage++,this.callbackFunc("next")===!1&&this.currentPage--);
},
prevPage:function(){
this.currentPage!==this.startPage&&(this.currentPage--,this.callbackFunc("prev")===!1&&this.currentPage++);
},
goFirstPage:function(){
var t=this.currentPage;
this.currentPage=this.startPage,this.callbackFunc("goFirst")===!1&&(this.currentPage=t);
},
goLastPage:function(){
var t=this.currentPage;
this.currentPage=this.endPage,this.callbackFunc("goLast")===!1&&(this.currentPage=t);
},
checkButtonShown:function(){
+this.currentPage===+this.startPage?this.hidePrevButton():this.showPrevButton(),
+this.currentPage===+this.endPage?this.hideNextButton():this.showNextButton();
},
goPage:function(t){
var e=this.currentPage,t=Math.round(t);
return t===this.currentPage?!1:isNaN(t)?(h.err("请输入正确的页码"),!1):""===t?!1:t<this.startPage?(h.err("请输入正确的页码"),
!1):t>this.endPage?(h.err("请输入正确的页码"),!1):(this.currentPage=t,void(this.callbackFunc("go")===!1&&(this.currentPage=e)));
},
clickPage:function(t){
var e=this.currentPage;
isNaN(t)&&(t=this.startPage),this.currentPage=t<this.startPage?this.startPage:t>this.endPage?this.endPage:t,
this.callbackFunc("click")===!1&&(this.currentPage=e);
},
showNextButton:function(){
this.nextButton&&this._isNextButtonShow===!1&&(this.nextButton.show(),this._isNextButtonShow=!0);
},
showPrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!1&&(this.prevButton.show(),this._isPrevButtonShow=!0);
},
hideNextButton:function(){
this.nextButton&&this._isNextButtonShow===!0&&(this.nextButton.hide(),this._isNextButtonShow=!1);
},
hidePrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!0&&(this.prevButton.hide(),this._isPrevButtonShow=!1);
}
});
return e=P;
});define("common/wx/qrcheck_msg.js",["tpl/qrcheck.html.js"],function(r,s,a){
"use strict";
function e(r,s,a,e){
s=s+""||"0",a=a+""||"0",e=e+""||"0";
var l="";
if("0"==s){
var t=c.find(".js_qrcheck_ret_"+a+"_"+e);
if(t&&t.length>0&&(l=t.html()),!l)if("2"==a){
var i=a+"_"+e;
l=_[i];
}else l=_[a];
l||(l=_["2_unknown"]);
}else l=_.sys_error;
return l='<div class="qrcheck_msg">'+l+"</div>",wx.T(l,r);
}
var c=$(r("tpl/qrcheck.html.js")),_={
sys_error:'系统错误 <a href="javascript:;" class="js_qr_reload">刷新二维码</a>',
0:"请使用{name}微信扫描二维码进行验证",
1:'<a href="javascript:;" class="js_qr_reload">返回二维码</a>',
3:'二维码已过期 <a href="javascript:;" class="js_qr_reload">刷新</a>',
4:'<a href="javascript:;" class="js_qr_reload">返回二维码</a>',
"2_unknown":'验证失败 <a href="javascript:;" class="js_qr_reload">刷新二维码</a>'
};
c.hide(),a.exports={
get:e
};
});define("tpl/qrcheck/popup.html.js",[],function(){
return'<div class="qrcheck_box">\n	<div class="qrcheck_title">{tips}</div>\n	<div class="js_div_qrcheck"></div>\n	<div class="qrcheck_msg_area js_div_qrcheck_msg"></div>\n</div>\n';
});define("tpl/qrcheck/qrcode.html.js",[],function(){
return'<div class="qrcheck_qrcode_area">\n    {if (status == \'loading\')}\n        <!-- 等待二维码，转菊花 -->\n        <div class="js_qr_loading qrcheck_loading_area qrcheck_mask">\n            <i class="qrcheck_loading_icon icon_loading_small white"></i>\n            <span class="vm_box"></span>\n        </div>\n    {else if (status == \'waiting\')}\n        <!-- 等待扫描 -->\n        <div class="js_qr_img qrcheck_img_area">\n            <img class="qrcheck_img" src="{img}" alt="">\n        </div>\n    {else if (status == \'info\')}\n        <!-- 已扫描 -->\n            {if (infoType == \'pending\')}\n            <div class="qrcheck_msg_area_primary qrcheck_mask mask_all">\n                <div class="qrcheck_msg">\n                  \n                    <i class="icon_msg phone"></i>\n                    \n                     {if (showImgInfo)}<p>扫描成功<br/>在手机上进行确认</p>{/if}\n                     <a href="javascript:;" class="js_qr_reload qrcheck_minor_btn">重新扫描</a>\n                </div>\n                <span class="vm_box"></span>\n            </div>\n            {else if (infoType == \'success\')}\n            <!-- 确认成功 -->\n            <div class="qrcheck_msg_area_primary qrcheck_mask">\n                <div class="qrcheck_msg">\n                    <i class="icon_msg_small success"></i>\n                </div>\n                <span class="vm_box"></span>\n            </div>\n            {else if (infoType == \'fail\')}\n            <div class="qrcheck_msg_area_primary qrcheck_mask">\n                <div class="qrcheck_msg">\n                    <i class="icon_msg_small warn"></i>\n                     {if (showImgInfo)}<p>扫描失败<br/><a href="javascript:;" class="js_qr_reload">刷新重试</a></p>{/if}\n                </div>\n                <span class="vm_box"></span>\n            </div>\n            {else if (infoType == \'error\')}\n            <div class="qrcheck_msg_area_primary qrcheck_mask">\n                <div class="qrcheck_msg">\n                    <i class="icon_msg_small warn"></i>\n                     {if (showImgInfo)}<p>系统错误<br/><a href="javascript:;" class="js_qr_reload">刷新重试</a></p>{/if}\n                </div>\n                <span class="vm_box"></span>\n            </div>\n            {else}\n            <div class="qrcheck_msg_area_primary qrcheck_mask">\n                <div class="qrcheck_msg">\n                    <i class="icon_msg_small warn"></i>\n                </div>\n                <span class="vm_box"></span>\n            </div>\n            {/if}\n\n    {/if}\n</div>\n<div class="qrcheck_msg_area js_qr_msg"></div>\n<!-- \ncomplete html\n<div class="qrcheck_box">\n    <div class="qrcheck_qrcode_area">....</div>\n    <div class="qrcheck_msg_area">\n        <div class="qrcheck_msg">\n            <div class="qrcheck_msg_inner">\n                <p>请使用xxx扫码</p>\n            </div>\n        </div>\n        <div class="qrcheck_msg with_icon">\n            <div class="qrcheck_msg_inner">\n                <i class="icon_msg_mini info"></i>\n                <p class="qrcheck_msg_title">请使用xxx扫码</p>\n                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>\n            </div>\n        </div>\n    </div>\n</div>\n-->\n\n';
});define("tpl/preview.html.js",[],function(){
return'<div class="mask preview_mask"></div>\n<div class="img_preview_container" id="preview_container">\n    <div class="img_preview_inner" id="img_container">\n        <img src="/mpres/htmledition/images/icon/common/icon32_loading_dark.gif" id="loading_dom">\n        <span class="img_preview_wrp" style="display:none;" id="img_dom">\n            <img src="{imgsrc}">\n            <!--#0001#-->\n            <a href="javascript:;" class="img_preview_close" id="closebtn" title="关闭"><i class="icon_img_preview_close">关闭</i></a>\n            <!--%0001%-->\n        </span>\n        <span class="vm_box"></span>\n    </div>\n    <span class="vm_box"></span>\n    {if !prev}\n    <div class="img_preview_opr_container prev_disabled" id="img_opr_container">\n    {else if !next}\n    <div class="img_preview_opr_container next_disabled" id="img_opr_container">\n    {else}\n    <div class="img_preview_opr_container" id="img_opr_container">\n    {/if}\n        <ul class="img_preview_opr_list">\n            <li class="img_preview_opr_item"><a href="javascript:;" id="btnview" title="查看原图"><i class="icon_img_preview origin">查看原图</i>&nbsp;</a></li>\n            {if view}<li class="img_preview_opr_item"><a href="javascript:;" id="btnprev" title="查看上一个"><i class="icon_img_preview prev">上一个</i>&nbsp;</a></li>{/if}\n            {if view}<li class="img_preview_opr_item"><a href="javascript:;" id="btnnext" title="查看下一个"><i class="icon_img_preview next">下一个</i>&nbsp;</a></li>{/if}\n            {if downsrc}<li class="img_preview_opr_item"><a href="{downsrc}" id="btndown" title="下载图片"><i class="icon_img_preview download">下载图片</i>&nbsp;</a></li>{/if}\n        </ul>\n    </div>\n</div>\n';
});define("tpl/biz_web/ui/dropdown.html.js",[],function(){
return'<a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel" {if search}contenteditable="true"{/if}>{label}</label><i class="arrow"></i></a>\n<div class="dropdown_data_container jsDropdownList">\n    <ul class="dropdown_data_list">\n        {if renderHtml}\n        {=renderHtml}\n        {else}\n            {each data as o index}\n            <li class="dropdown_data_item {if o.className}{o.className}{/if}">  \n                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="{o.value}" data-index="{index}" data-name="{o.name}">{o.name}</a>\n            </li>\n            {/each}        \n        {/if}\n    </ul>\n</div>\n';
});define("register/mod/mod_banklist.js",["common/wx/Cgi.js","biz_web/ui/checkbox.js","common/wx/popup.js","common/wx/pagebar.js","tpl/register/bankdialog.html.js","tpl/register/banklist.html.js"],function(t,n,i){
"use strict";
function e(t,n){
w.get({
url:"/cgi-bin/getcmsdata?action=bank_list&f=json",
data:{
key:N,
begin:(t-1)*C,
count:C
}
},function(t){
if(t&&0==t.base_resp.ret){
var i=JSON.parse(t.data);
D=i.total;
for(var e=[],a=0;a<i.key_list.length;a++)e.push(i.key_list[a].name);
n(e);
}else n([]);
});
}
function a(t,n){
g.show(),_.hide(),f.disable(),S="",e(t,function(t){
var i=template.compile(y)({
list:t,
keyword:N
});
g.hide(),_.html(i).show(),_.find("input[type=radio]").checkbox({
onChanged:function(t){
S=t.val(),f.enable();
}
}),k.popup("resetPosition"),""!=N?(b.html("搜索到%s个银行".sprintf(t.length)),p.find(".js_txt_bank_name").each(function(){
var t=$(this).html();
t=t.replace(N,'<span class="highlight">'+N+"</span>"),$(this).html(t);
})):b.html(""),n&&n();
});
}
function o(){
j.html("");
new v({
container:j,
first:!1,
last:!1,
midRange:5,
initShowPage:1,
perPage:C,
totalItemsNum:D,
callback:function(t){
a(t.currentPage);
}
});
}
function s(){
k=$(x).popup({
title:"选择银行",
className:"bank_dialog",
width:786,
autoShow:!1,
data:{},
buttons:[{
text:"确定",
type:"primary",
click:function(){
this.hide(),P.onGettingBank.call(this,S);
}
},{
text:"取消",
type:"default",
click:function(){
this.hide();
}
}]
}),p=$(k.get()[0]),h=p.find(".js_form_search"),f=p.find(".btn_primary"),m=p.find(".js_btn_search"),
d=p.find(".js_input_search"),b=p.find(".js_div_title"),g=p.find(".js_div_loading"),
_=p.find(".js_div_banklist"),j=p.find(".js_div_pagebar");
}
function c(){
a(1,function(){
o();
}),m.on("click",function(t){
return t.preventDefault(),h.submit(),!1;
}),p.on("click",".js_btn_reset_search",function(t){
t.preventDefault(),N="",d.val(""),b.html(""),a(1,function(){
o();
});
}),h.on("submit",function(t){
return t.preventDefault(),(N=$.trim(d.val()))?(a(1,function(){
o();
}),!1):!1;
});
}
function l(t){
P=$.extend(!0,{},P,t),s(),c();
}
function r(){
k.popup("show");
}
function u(){
k.popup("hide");
}
var p,h,f,m,d,b,g,_,j,k,w=(template.render,t("common/wx/Cgi.js")),v=(t("biz_web/ui/checkbox.js"),
t("common/wx/popup.js"),t("common/wx/pagebar.js")),x=t("tpl/register/bankdialog.html.js"),y=t("tpl/register/banklist.html.js"),P={},C=21,D=0,N="",S="";
i.exports={
init:l,
show:r,
hide:u
};
});define("register/data_bank_city.js",[],function(){
"use strict";
var e={
"北京市":["北京市"],
"安徽省":["黄山市","马鞍山市","宣城市","铜陵市","淮南市","巢湖地区","芜湖市","六安地区","阜阳市","池州地区","安庆市","合肥市","滁州市","亳州市","淮北市","蚌埠市","宿州市"],
"重庆市 ":["重庆市","巫溪县","大足县","奉节县","石柱土家族","綦江县","丰都县","云阳县","彭水苗族","荣昌县","酉阳土家族","双桥市","垫江县","江津市","开县","万州市","璧山县","巫山县","忠县","万盛市","永川市","潼南县","铜梁县","武隆县","黔江市","长寿市","合川市","南川市","梁平县","秀山土家族","城口县","涪陵市"],
"福建省":["南平市","莆田市","龙岩市","福州市","漳州市","三明市","宁德市","泉州市","厦门市"],
"广东省":["中山市","潮州市","肇庆市","湛江市","佛山市","珠海市","广州市","揭阳市","梅州市","深圳市","汕尾市","汕头市","江门市","茂名市","惠州市","河源市","东莞市","清远市","阳江市","韶关市","云浮市"],
"甘肃省":["定西地区","兰州市","玉门市","酒泉市","临夏州","张掖市","平凉地区","甘南州","武威市","庆阳地区","天水市","白银市","陇南地区","金昌市","嘉峪关市"],
"广西壮族自治区":["百色地区","南宁市","柳州市","来宾市","玉林市","防城港市","崇左市","梧州市","钦州市","北海市","桂林市","河池地区","贺州市","贵港市"],
"贵州省":["黔西南州","六盘水市","铜仁地区","贵阳市","黔南州","安顺地区","遵义市","毕节地区","黔东南州"],
"湖南省":["张家界市","益阳市","衡阳市","长沙市","永州市","岳阳市","邵阳市","娄底市","湘西土家族","湘潭市","常德市","株洲市","郴州市","怀化市"],
"海南省":["临高县","三亚市","乐东县","东方市","琼中县","保亭县","五指山市","白沙县","儋州市","定安县","琼山市","海口市","万宁市","琼海市","陵水县","澄迈县","屯昌县","文昌市","昌江县"],
"湖北省":["武汉市","秭归县","五峰县","潜江市","枝江市","仙桃市","兴山县","大冶市","当阳市","神农架林区","黄冈市","荆门市","咸宁市","鄂州市","宜都市","宜昌市","远安县","长阳县","随州市","十堰市","孝感市","襄樊市","黄石市","荆州市","恩施州","天门市"],
"河北省":["石家庄市","邯郸市","鹿泉市","保定市","唐山市","衡水市","张家口市","廊坊市","秦皇岛市","邢台市","承德市","沧州市"],
"黑龙江省":["齐齐哈尔市","鸡西市","大兴安岭","尚志市","双鸭山市","绥化市","大庆市","延寿县","佳木斯市","巴彦县","木兰县","依兰县","绥化","哈尔滨市","通河县","牡丹江市","七台河市","伊春市","方正县","黑河市","鹤岗市","五常市"],
"河南省":["郑州市","三门峡市","开封市","洛阳市","南阳市","鹤壁市","平顶山市","濮阳市","驻马店市","焦作市","周口市","漯河市","许昌市","信阳市","安阳市","新乡市","商丘市"],
"天津市":["天津市"],
"西藏自治区":["那曲地区","阿里地区","山南地区","昌都地区","日喀则地区","拉萨市","樟木口岸","林芝地区"],
"青海省":["黄南州","果洛州","海东地区","西宁市","海北州","海南州","海西州","格尔木市","玉树州"],
"浙江省":["嘉兴市","诸暨市","温州市","台州市","衢州市","丽水市","宁波市","杭州市","舟山市","金华市","义乌市","湖州市","绍兴市"],
"辽宁省":["盘锦市","大连市","抚顺市","本溪市","沈阳市","锦州市","丹东市","铁岭市","葫芦岛市","辽阳市","营口市","鞍山市","朝阳市","阜新市"],
"江西省":["上饶市","景德镇市","萍乡市","鹰潭市","赣州市","吉安地区","新余市","抚州地区","南昌市","九江市","宜春地区"],
"新疆维吾尔自治区":["乌鲁木齐市","吐鲁番地区","博尔塔拉","五家渠市","塔城地区","昌吉回族","阿拉尔市","阿勒泰地区","阿克苏地区","巴音郭楞","克孜勒","伊犁哈萨克","和田地区","库尔勒市","石河子市","喀什地区","哈密地区","克拉玛依市","图木舒克市"],
"陕西省":["西安市","榆林市","宝鸡市","商洛市","铜川市","汉中市","安康市","延安市","渭南市","咸阳市"],
"江苏省":["江阴市","镇江市","徐州市","张家港市","宿迁市","南京市","连云港市","常州市","泰州市","无锡市","扬州市","盐城市","淮安市","苏州市","南通市"],
"吉林省":["吉林市","白城市","延边自治州","松原市","白山市","四平市","通化市","辽源市","长春市"],
"云南省":["丽江市","保山地区","昆明市","曲靖市","怒江州","临沧地区","西双版纳州","思茅地区","红河州","迪庆州","楚雄州","昭通地区","大理州","文山州","玉溪市","德宏州"],
"宁夏回族自治区":["吴忠市","固原地区","石嘴山市","银川市"],
"上海市":["上海市"],
"山东省":["泰安市","菏泽地区","济宁市","滨州市","烟台市","德州市","东营市","日照市","威海市","聊城市","潍坊市","临沂市","枣庄市","莱芜市","淄博市","青岛市","济南市"],
"四川省":["遂宁市","阿坝州","达川市","资阳地区","广安市","宜宾市","雅安地区","泸州市","内江市","乐山市","自贡市","南充市","德阳市","甘孜州","广元市","绵阳市","攀枝花市","成都市","眉山市","凉山州","巴中地区"],
"山西省":["大同市","长治市","太原市","运城市","朔州市","吕梁市","榆次市","晋中市","晋城市","忻州市","阳泉市","临汾市"],
"内蒙古自治区":["呼伦贝尔市","赤峰市","呼和浩特市","伊克昭盟","锡林郭勒盟","阿拉善盟市","巴彦淖尔盟","哲里木盟","包头市","乌兰察布盟","鄂尔多斯市","通辽市","兴安盟","乌海市"]
},r=[],a={};
for(var n in e){
r.push({
name:n,
value:n
}),a[n]=[];
for(var t=0;t<e[n].length;t++)a[n].push({
name:e[n][t],
value:e[n][t]
});
}
return{
province:r,
city:a
};
});define("tpl/biz_web/ui/checkbox.html.js",[],function(){
return'<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});define("common/wx/qrcheck_weapp.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","widget/qrcheck.css","tpl/qrcheck/qrcode.html.js","tpl/qrcheck/popup.html.js","common/wx/qrcheck_msg.js"],function(t,s,e){
"use strict";
function i(t){
this._init(t);
}
function o(t){
return new i(t);
}
function a(t){
var s,e=$(wx.T(c,{
tips:t.popupTips||""
})),o=e.popup({
title:t.popupTitle||"扫码验证",
width:t.popupWidth||600,
className:t.popupClassName||"",
autoShow:!1,
onShow:function(){
o.popup("resetPosition"),t.onPopupShow&&t.onPopupShow.call(s);
},
onHide:function(){
console.log("onHide"),o.popup("remove"),t.onPopupHide&&t.onPopupHide.call(s),s.popup=null,
s.destroy();
}
});
return t.container=$(o.get()).find(".js_div_qrcheck"),s=new i(t),s.popup=o,s;
}
var n=(template.render,t("common/wx/Cgi.js")),p=t("common/wx/Tips.js"),r=(t("common/wx/popup.js"),
t("widget/qrcheck.css"),t("tpl/qrcheck/qrcode.html.js")),c=t("tpl/qrcheck/popup.html.js"),h=t("common/wx/qrcheck_msg.js"),d={
container:"",
container_class:"",
scene:0,
typeid:0,
size:165,
data:{},
extra:{},
askExtra:{},
msgData:{
name:"管理员"
},
showImgInfo:!0,
askSpeed:5,
askMaxNum:60,
cgiURI:"",
onSuccess:function(){},
onFail:function(){},
onTimeout:function(){},
onMsgUpdate:function(){}
};
i.prototype._init=function(t){
this.opt=$.extend(!0,{},d,t),this.renderData={
status:"loading",
infoType:"pending",
img:"",
size:t.size,
showImgInfo:this.opt.showImgInfo
},this.popup=null,this.$dom=$(t.container),t.container_class&&this.$dom.addClass(t.container_class),
this._isStopped=!0,this._askID=null,this._askNum=0,this._askLatestAjaxID=0,this._askPreview=null,
this._ticket="",this._cgiResp=null;
},i.prototype.load=function(){
var t=this;
return this._render(),this.$dom.off("click",".js_qr_reload, .js_qrcheck_reloading","**"),
this.$dom.on("click",".js_qr_reload, .js_qrcheck_reloading",function(){
return t.reload(),!1;
}),this.$dom.off("click",".js_qr_refresh, .js_qrcheck_refresh","**"),this.$dom.on("click",".js_qr_refresh, .js_qrcheck_refresh",function(){
return t.refresh(),!1;
}),this.popup&&(this.popup.popup("show"),this.popup.popup("resetPosition")),this._requestTicket(),
this;
},i.prototype.destroy=function(){
this._stopAsk(),this.$dom.off("click","**"),this.$dom.empty(),this.popup&&this.popup.popup("remove");
},i.prototype.reload=function(){
this._requestTicket();
},i.prototype.refresh=function(){
this._showQRCode(),this._startAsk();
},i.prototype.getTicket=function(){
return this._ticket||"";
},i.prototype._render=function(){
this.$dom.html(wx.T(r,this.renderData)),this.$msg=this.$dom.find(".js_qr_msg");
},i.prototype._showLoading=function(){
this.renderData.status="loading",this._render();
},i.prototype._showInfo=function(t){
this.renderData.status="info",this.renderData.infoType=t,this._render();
},i.prototype._requestTicket=function(){
var t=this;
t._showLoading(),t._stopAsk(),t._isStopped=!1;
var s={
action:"getticket",
size:t.opt.size,
scene:t.opt.scene,
typeid:t.opt.typeid,
data:JSON.stringify(t.opt.data),
extra:JSON.stringify(t.opt.extra)
};
s=$.extend(!0,s,t.opt.data),n.post({
url:t.opt.cgiURI+"?action=getticket",
mask:!1,
data:s
},{
done:function(s){
1!=t._isStopped&&(0==s.base_resp.ret?(t._ticket=s.qrcheck_ticket,t._showQRCode(),
t._startAsk()):t._triggerStatus(s.base_resp.ret));
},
fail:function(){
t._triggerStatus(-1);
}
});
},i.prototype._showQRCode=function(){
var t=this.opt.cgiURI+"?action=getqrcode&qrcheck_ticket="+this._ticket+"&random="+(new Date).getTime();
t+="&size="+this.opt.size,this.opt.data&&this.opt.data.appid&&(t+="&appid="+this.opt.data.appid),
this.opt.data&&this.opt.data.__biz&&(t+="&__biz="+this.opt.data.__biz),window.wx&&window.wx.data&&window.wx.data.param&&(t+=window.wx.data.param),
this.renderData.status="waiting",this.renderData.img=t,this._render();
},i.prototype._doAsk=function(){
var t=this;
if(t._askNum++,t._askNum>t.opt.askMaxNum)return void t._triggerStatus(0,3);
t._askLatestAjaxID++;
var s=t._askLatestAjaxID,e={
qrcheck_ticket:t._ticket
};
if(t.opt.data&&t.opt.data.appid&&(e.appid=t.opt.data.appid),t.opt.data&&t.opt.data.__biz&&(e.__biz=t.opt.data.__biz),
t.opt.askExtra)for(var i in t.opt.askExtra)t.opt.askExtra[i]&&(e[i]=t.opt.askExtra[i]);
n.get({
url:t.opt.cgiURI+"?action=ask",
data:e,
mask:!1
},{
done:function(e){
1!=t._isStopped&&(s<t._askLatestAjaxID||(t._cgiResp=e,e&&0==e.base_resp.ret?t._triggerStatus(0,e.status,e.result,e.self_check_err_code):(t._stopAsk(),
t._triggerStatus(e.base_resp.ret))));
},
fail:function(){}
});
},i.prototype._startAsk=function(){
var t=this;
t._stopAsk(),t._isStopped=!1,t._triggerStatus(0,0),t._askID=setInterval(function(){
t._doAsk();
},1e3*t.opt.askSpeed);
},i.prototype._stopAsk=function(){
var t=this;
clearInterval(t._askID),t._isStopped=!0,t._askNum=0,t._askPreview=null,t._askLatestAjaxID=0;
},i.prototype._triggerStatus=function(t,s,e,i){
if(0==t){
if(s===this._askPreview)return;
this._askPreview=s,0!=s&&4!=s&&this._stopAsk(),0==s?this.renderData.status="waiting":1==s?(this.renderData.status="info",
this.renderData.infoType="success"):3==s?(this.renderData.status="info",this.renderData.infoType="fail"):4==s?(this.renderData.status="info",
this.renderData.infoType="pending"):2==s?(this.renderData.status="info",this.renderData.infoType="fail"):(this.renderData.status="info",
this.renderData.infoType=""),this._render();
}else p.err(-3==t?"登录超时，请重新登录":"二维码获取失败，请重试"),this.renderData.status="info",this.renderData.infoType="error",
this._render();
var o=void 0;
if("function"==typeof this.opt.onMsgUpdate){
var a=60411==e?i:e;
o=this.opt.onMsgUpdate.call(this,t,s,a);
}
void 0===o&&(o=h.get(this.opt.msgData,t,s,e)),this.$msg.html(o),0==t&&0==s||0==t&&4==s||(0==t&&1==s?"function"==typeof this.opt.onSuccess&&this.opt.onSuccess.call(this,this._ticket,this._cgiResp):0==t&&3==s?"function"==typeof this.opt.onTimeout&&this.opt.onTimeout.call(this):"function"==typeof this.opt.onFail&&this.opt.onFail.call(this,t,s,e));
},e.exports={
init:o,
initPopup:a
};
});