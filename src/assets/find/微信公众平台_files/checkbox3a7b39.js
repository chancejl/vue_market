define("common/wx/subjectAppealDialog.js",["common/wx/dialog.js"],function(o){
"use strict";
var t=o("common/wx/dialog.js"),n=function(o){
var n=o.reason||"该主体信息曾因涉嫌违规，违反《微信公众平台运营规范》，暂无法使用。如有异议，请发起申诉。",e=[{
text:"确定",
click:function(){
this.remove();
}
}];
o.canAppeal&&e.push({
text:"发起申诉",
click:function(){
window.location.href=o.jumpUrl+"&appeal_ticket="+o.appealTicket;
}
}),t.show({
type:"warn",
msg:"该主体信息暂无法使用|"+n,
buttons:e
});
};
return n;
});define("common/wx/overseasList.js",[],function(){
"use strict";
var e={
1e3:{
country:"阿联酋",
mobilePrefix:"+971"
},
1005:{
country:"澳大利亚",
mobilePrefix:"+61"
},
1014:{
country:"加拿大",
mobilePrefix:"+1"
},
1017:{
country:"中国大陆",
mobilePrefix:"+86"
},
1018:{
country:"德国",
mobilePrefix:"+49"
},
1022:{
country:"法国",
mobilePrefix:"+33"
},
1023:{
country:"英国",
mobilePrefix:"+44"
},
1031:{
country:"香港",
mobilePrefix:"+852"
},
1034:{
country:"印度尼西亚",
mobilePrefix:"+62"
},
1040:{
country:"意大利",
mobilePrefix:"+39"
},
1042:{
country:"日本",
mobilePrefix:"+81"
},
1043:{
country:"柬埔寨",
mobilePrefix:"+855"
},
1045:{
country:"韩国",
mobilePrefix:"+82"
},
1054:{
country:"澳门",
mobilePrefix:"+853"
},
1059:{
country:"马来西亚",
mobilePrefix:"+60"
},
1062:{
country:"荷兰",
mobilePrefix:"+31"
},
1063:{
country:"新西兰",
mobilePrefix:"+64"
},
1065:{
country:"菲律宾",
mobilePrefix:"+63"
},
1070:{
country:"俄罗斯",
mobilePrefix:"+7"
},
1074:{
country:"新加坡",
mobilePrefix:"+65"
},
1077:{
country:"泰国",
mobilePrefix:"+66"
},
1080:{
country:"台湾",
mobilePrefix:"+886"
},
1082:{
country:"美国",
mobilePrefix:"+1"
},
1084:{
country:"越南",
mobilePrefix:"+84"
},
1113:{
country:"芬兰",
mobilePrefix:"+358"
}
},r={},i=[];
for(var o in e)i.push(parseInt(o)),r[o]=e[o].mobilePrefix;
return{
mobilePrefix:r,
countryCode:i
};
});define("biz_web/lib/spin.js",[],function(){
var t=function(){
function t(t,n){
for(var e=~~((t[f]-1)/2),r=1;e>=r;r++)n(t[2*r-1],t[2*r]);
}
function n(n){
var e=document.createElement(n||"div");
return t(arguments,function(t,n){
e[t]=n;
}),e;
}
function e(t,n,r){
return r&&!r[z]&&e(t,r),t.insertBefore(n,r||null),t;
}
function r(t,n){
var e,r=[h,n,~~(100*t)].join("-"),i="{"+h+":"+t+"}";
if(!A[r]){
for(e=0;e<T[f];e++)try{
D.insertRule("@"+(T[e]&&"-"+T[e].toLowerCase()+"-"||"")+"keyframes "+r+"{0%{"+h+":1}"+n+"%"+i+"to"+i+"}",D.cssRules[f]);
}catch(o){}
A[r]=1;
}
return r;
}
function i(t,n){
var e,r,i=t[g];
if(void 0!==i[n])return n;
for(n=n.charAt(0).toUpperCase()+n.slice(1),r=0;r<T[f];r++)if(e=T[r]+n,void 0!==i[e])return e;
}
function o(n){
return t(arguments,function(t,e){
n[g][i(n,t)||t]=e;
}),n;
}
function s(n){
return t(arguments,function(t,e){
void 0===n[t]&&(n[t]=e);
}),n;
}
var a,u="width",f="length",l="radius",c="lines",d="trail",p="color",h="opacity",v="speed",m="shadow",g="style",w="height",b="left",x="top",y="px",k="childNodes",$="firstChild",z="parentNode",C="position",M="relative",R="absolute",j="animation",B="transform",N="Origin",E="Timeout",L="coord",O="#000",S=g+"Sheets",T="webkit0Moz0ms0O".split(0),A={};
e(document.getElementsByTagName("head")[0],n(g));
var D=document[S][document[S][f]-1],H=function(t){
this.opts=s(t||{},c,12,d,100,f,7,u,5,l,10,p,O,h,.25,v,1);
},I=H.prototype={
spin:function(t){
var n=this,r=n.el=n[c](n.opts);
if(t&&e(t,o(r,b,~~(t.offsetWidth/2)+y,x,~~(t.offsetHeight/2)+y),t[$]),!a){
var i=n.opts,s=0,u=20/i[v],f=(1-i[h])/(u*i[d]/100),l=u/i[c];
!function p(){
s++;
for(var t=i[c];t;t--){
var e=Math.max(1-(s+t*l)%u*f,i[h]);
n[h](r,i[c]-t,e,i);
}
n[E]=n.el&&window["set"+E](p,50);
}();
}
return n;
},
stop:function(){
var t=this,n=t.el;
return window["clear"+E](t[E]),n&&n[z]&&n[z].removeChild(n),t.el=void 0,t;
}
};
I[c]=function(t){
function i(e,r){
return o(n(),C,R,u,t[f]+t[u]+y,w,t[u]+y,"background",e,"boxShadow",r,B+N,b,B,"rotate("+~~(360/t[c]*k)+"deg) translate("+t[l]+y+",0)","borderRadius","100em");
}
for(var s,a=o(n(),C,M),g=r(t[h],t[d]),k=0;k<t[c];k++)s=o(n(),C,R,x,1+~(t[u]/2)+y,B,"translate3d(0,0,0)",j,g+" "+1/t[v]+"s linear infinite "+(1/t[c]/t[v]*k-1/t[v])+"s"),
t[m]&&e(s,o(i(O,"0 0 4px "+O),x,2+y)),e(a,e(s,i(t[p],"0 0 1px rgba(0,0,0,.1)")));
return a;
},I[h]=function(t,n,e){
t[k][n][g][h]=e;
};
var U="behavior",V="url(#default#VML)",W="group0roundrect0fill0stroke".split(0);
return function(){
var t,r=o(n(W[0]),U,V);
if(!i(r,B)&&r.adj){
for(t=0;t<W[f];t++)D.addRule(W[t],U+":"+V);
I[c]=function(){
function t(){
return o(n(W[0],L+"size",d+" "+d,L+N,-a+" "+-a),u,d,w,d);
}
function r(r,i,f){
e(v,e(o(t(),"rotation",360/s[c]*r+"deg",b,~~i),e(o(n(W[1],"arcsize",1),u,a,w,s[u],b,s[l],x,-s[u]/2,"filter",f),n(W[2],p,s[p],h,s[h]),n(W[3],h,0))));
}
var i,s=this.opts,a=s[f]+s[u],d=2*a,v=t(),g=~(s[f]+s[l]+s[u])+y;
if(s[m])for(i=1;i<=s[c];i++)r(i,-2,"progid:DXImage"+B+".Microsoft.Blur(pixel"+l+"=2,make"+m+"=1,"+m+h+"=.3)");
for(i=1;i<=s[c];i++)r(i);
return e(o(n(),"margin",g+" 0 0 "+g,C,M),v);
},I[h]=function(t,n,e,r){
r=r[m]&&r[c]||0,t[$][k][n+r][$][$][h]=e;
};
}else a=i(r,j);
}(),H;
}();
$.fn.spin=function(n,e){
return this.each(function(){
var r=$(this),i=r.data();
i.spinner&&(i.spinner.stop(),delete i.spinner),n!==!1&&(n=$.extend({
color:e||r.css("color")
},$.fn.spin.presets[n]||n),i.spinner=new t(n).spin(this));
});
},$.fn.spin.presets={
tiny:{
lines:8,
length:2,
width:2,
radius:3
},
small:{
lines:8,
length:4,
width:3,
radius:5
},
large:{
lines:10,
length:8,
width:4,
radius:8
}
};
});define("tpl/biz_web/ui/multiupload.html.js",[],function(){
return'<div class="frm_control_group">\n    <label for="" class="frm_label">{title}</label>\n    <div class="frm_controls frm_vertical_pt">\n	    <div class="upload_box">\n	        <p class="upload_tips">\n	            {if (desc)}\n	                {=desc}<br/>\n	            {/if}\n	            支持.jpg .jpeg .bmp .gif .png格式照片，大小不超过5M。	        </p>\n	        <span class="upload_area"><a href="javascript:;" id="js_btn_multiupload_{name}" class="btn btn_upload js_btn_multiupload">选择文件</a></span>\n	        <span>还可以上传{remainNum}张</span>\n	        <div class="upload_preview">\n	            {each files as file}\n		            {if (file.id)}\n			            {if (noPreview)}\n		            		<p class="js_item" data-file="{file.id}">\n				            	<span>{file.title}</span>\n				            	<a href="javascript:;" class="js_btn_preview">预览</a>\n				            	<a class="js_btn_delete" href="javascript:;">删除</a>\n			            	</p>\n			            {else}\n			            	<span class="js_item" data-file="{file.id}">\n			            		<a href="javascript:;" class="js_btn_preview"><img src="{$preview file.id file.preview}"></a>\n					            <a class="js_btn_delete" href="javascript:;">删除</a>\n				            </span>\n		            	{/if}\n	            	{/if}\n	            {/each}\n	        </div>\n	        <span class="frm_tips"></span>\n	        {each inputs as item}\n		        <input type="hidden" class="file_field js_input_multiupload" value="{item.value}" name="{item.name}" data-filename="{item.title}" />\n	        {/each}\n	    </div>       \n	</div>\n</div>';
});define("biz_web/utils/upload.js",["widget/upload.css","biz_web/lib/webuploader.js","common/wx/dialog.js","common/wx/Tips.js","tpl/uploader.html.js"],function(e){
"use strict";
function i(e){
g.src="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7839&flag2=4&flag3=5&1="+e;
}
e("widget/upload.css");
var n=e("biz_web/lib/webuploader.js"),a=e("common/wx/dialog.js"),t=e("common/wx/Tips.js"),o=e("tpl/uploader.html.js"),r=wx.T,s=wx.path.webuploader,p=~location.hostname.search(/^mp/)?"https://mp.weixin.qq.com":"",l={
2:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:5242880
},
3:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:5242880
},
4:{
accept:{
extensions:"rm,rmvb,wmv,avi,mpg,mpeg,mp4",
mimeTypes:"video/rm,video/rmvb,video/wmv,video/avi,video/mpg,video/mpeg,video/mp4"
},
fileSingleSizeLimit:20971520
},
5:{
accept:{
extensions:"pdf",
mimeTypes:"application/pdf"
},
fileSingleSizeLimit:10485760
},
6:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif,pdf",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif,application/pdf"
},
fileSingleSizeLimit:5242880
},
7:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:5242880
},
8:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg"
},
fileSingleSizeLimit:5242880
},
9:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:204800
},
10:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:5242880
},
11:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg"
},
fileSingleSizeLimit:5242880
},
12:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:31457280
},
13:{
accept:{
extensions:"png,bmp,jpeg,jpg,gif",
mimeTypes:"image/png,image/bmp,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:2097152
}
};
l[15]=l[4];
var m=function(e){
a.show({
type:"warn",
msg:"警告|"+e,
mask:!0,
buttons:[{
text:"确定",
click:function(){
this.remove();
}
}]
});
},c=function(e){
var i=n.Uploader;
0==i.support("flash")?m("<p>未安装或未正确配置flash插件，请检查后重试。<br><a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>到adobe去下载flash插件</a></p>"):0==i.support()?m("<p>您的浏览器不支持上传</p>"):e.refresh();
},d=function(e){
e&&wx.jslog({
src:"common/wx/upload.js"
},null,e);
},u={
swf:s,
auto:!0,
pick:{
multiple:!0
},
fileNumLimit:20,
threads:3,
sendAsBinary:!1,
runtimeOrder:"html5,flash",
compress:{
width:1280,
height:1e8,
quality:90,
afterCompressSizeLimit:2097152,
compressSize:0,
resizeSize:2097152,
maxResolution:6e6,
noCompressIfLarger:!0
},
imageSize:!0,
chunked:!1,
duplicate:!0
},g=new Image,f={},h=function(e){
if(!e.url)throw"missing url";
var a,s,p,m=$('<ul class="upload_file_box" style="display:none"></ul>'),g=$(e.container);
g.on("click",function(){
Math.random()<.1&&d(12),c(a);
}).parent().append(m),function(){
n&&0==n.Uploader.support("html5")&&0==n.Uploader.support("flash")&&((new Image).src="/misc/jslog?level=error&id=36&content=[pageurl:"+encodeURIComponent(location.href)+",ua:"+encodeURIComponent(window.navigator.userAgent)+"]");
}(),e.only_cdn&&(e.url+="&only_cdn=1"),s={
server:wx.url(e.url+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&svr_time="+wx.data.time),
pick:{
id:g,
multiple:e.multi
},
fileNumLimit:e.queueSizeLimit
},p=l[e.type]||l[2],e=$.extend(!0,{},u,s,p,e);
e.server;
n&&0==n.Uploader.support("html5")&&e.compress&&(e.compress.quality=70);
try{
a=n.create(e);
}catch(h){
if(!a)return;
}
return m.on("click",".js_cancel",function(){
var e=$(this).data("id");
a.cancelFile(e),$(this).hide();
}),a.on("beforeFileQueued",function(i){
return Math.random()<.1&&d(13),e.canContinueUpload&&!e.canContinueUpload()?!1:!(e.onSelect&&e.onSelect(null,i.id,i)===!1);
}),a.on("fileQueued",function(e){
var i={
id:e.id,
fileName:e.name,
size:n.formatSize(e.size)
};
m.append(r(o,i)).show();
}),a.on("fileDequeued",function(){
Math.random()<.1&&d(14),e.onCancel&&e.onCancel();
}),a.on("uploadProgress",function(i,n){
var a="#uploadItem%s".sprintf(i.id),t=m.find(a).find(".progress_bar_thumb");
t.width("%s%".sprintf(100*n)),1==n&&m.find(a).find(".js_cancel").remove(),e.onProgress&&e.onProgress(null,i.id,i,{
percentage:n
});
}),a.on("uploadStart",function(e){
f[e.id]=+new Date;
}),a.on("uploadSuccess",function(n,a,o){
if(Math.random()<.1&&d(16),a&&a.base_resp){
var r=+a.base_resp.ret;
if(0==r)Math.random()<.1&&(d(17),f[n.id]&&i(+new Date-f[n.id]));else switch(n.setStatus("invalid"),
r){
case-18:
case 200018:
t.err("页面停留时间过久，请刷新页面后重试！");
break;

case-20:
case 200020:
t.err("无法解释该图片，请使用另一图片或截图另存");
break;

case-13:
case 200013:
t.err("上传文件过于频繁，请稍后再试");
break;

case-10:
case 200010:
t.err("上传文件过大");
break;

case-22:
case 200022:
t.err("上传音频文件不能超过60秒");
break;

case-39:
case 200039:
t.err("上传图片高度（像素）与宽度（像素）的乘积不能超过600万");
break;

case 220001:
t.err('"素材管理"中的存储数量已达到上限，请删除后再操作。');
break;

case 220002:
t.err("你的图片库已达到存储上限，请进行清理。");
break;

default:
t.err("上传文件发送出错，请刷新页面后重试！");
}
}
e.onComplete&&e.onComplete(null,n.id,n,a,{
fileCount:o.numOfProgress+o.numOfQueue
});
}),a.on("uploadFinished",function(i){
this.reset(),m.fadeOut().html(""),f={},0==i.numOfInvalid&&i.numOfSuccess>0&&e.onAllComplete&&e.onAllComplete(null,{
errors:i.numOfCancel+i.numOfInvalid+i.numOfUploadFailed+i.numofDeleted+i.numofInterrupt,
filesUploaded:i.numOfSuccess
});
}),a.on("uploadError",function(){
Math.random()<.1&&d(15),e.onError&&e.onError();
}),a.on("error",function(i,a,o){
switch("object"==typeof a&&(o=a),i){
case"Q_EXCEED_NUM_LIMIT":
t.err("一次上传最多只能上传%s个文件".sprintf(a));
break;

case"F_EXCEED_SIZE":
t.err("文件大小不能超过%s".sprintf(n.formatSize(a,"0")));
break;

case"F_EXCEED_COMPRESS_SIZE":
t.err("图片尺寸太大，压缩后不能超过%s，请缩小图片尺寸再试".sprintf(e.compress.afterCompressSizeLimit?e.compress.afterCompressSizeLimit/1048576+"M":"2M")),
d(42);
break;

case"Q_TYPE_DENIED":
t.err(e.errTypeMsg||"文件必须为以下格式：%s".sprintf(e.accept.extensions).replace(/,/g,", "));
}
}),a;
},b=function(e){
return function(i){
return i.url=e,h(i);
};
},w=function(e){
return function(i){
return wx.url(e+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&id="+i);
};
};
return{
uploadFile:h,
uploadBizFile:b(p+"/cgi-bin/filetransfer?action=upload_material&f=json"),
uploadTmpFile:b(p+"/cgi-bin/filetransfer?action=preview&f=json"),
uploadCdnFile:b(p+"/cgi-bin/filetransfer?action=upload_cdn&f=json"),
uploadShopFile:b(p+"/merchant/goodsimage?action=uploadimage"),
uploadShopUnsaveFile:b(p+"/merchant/goodsimage?action=uploadimage&save=0"),
uploadVideoCdnFile:b(p+"/cgi-bin/filetransfer?action=upload_video_cdn&f=json"),
uploadRegisterFile:b(p+"/acct/realnamesubmit?type=2&action=file_set"),
uploadUpgradeFile:b(p+"/acct/servicetypeupgrade?type=2&action=file_set"),
uploadPoiFile:b(p+"/misc/setlocation?action=upload"),
mediaFile:b(p+"/cgi-bin/filetransfer?action=bizmedia"),
uploadBbsCdnFile:b(p+"/filetransfer?action=upload_cdn&f=json"),
uploadCdnFileFromAd:function(e){
return b(p+"/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json&width="+e.w+"&height="+e.h+"&limit_size="+e.size);
},
uploadImageLibFile:function(e){
return e.url=p+"/cgi-bin/filetransfer?action=upload_material&f=json","undefined"!=typeof e.scene&&(e.url+="&scene="+e.scene),
1==e.doublewrite&&(e.url+="&writetype=doublewrite&groupid="+(e.groupid||1)),h(e);
},
uploadCdnFileWithCheck:function(e){
var i={
height:0,
width:0,
size:0,
min_height:0,
min_width:0,
min_size:0
};
e=$.extend(!0,i,e);
var n=[];
for(var a in e)n.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));
return b(p+"/cgi-bin/filetransfer?action=upload_cdn_check_range&f=json&"+n.join("&"),"tmpfile");
},
uploadTmpFileWithCheck:function(e){
var i={
height:0,
width:0,
size:0,
min_height:0,
min_width:0,
min_size:0
};
e=$.extend(!0,i,e);
var n=[];
for(var a in e)n.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));
return b(p+"/cgi-bin/filetransfer?action=preview_check_range&f=json&"+n.join("&"));
},
tmpFileUrl:w(p+"/cgi-bin/filetransfer?action=preview"),
mediaFileUrl:w(p+"/cgi-bin/filetransfer?action=bizmedia"),
multimediaFileUrl:w(p+"/cgi-bin/filetransfer?action=multimedia")
};
});define("common/wx/preview.js",["common/wx/Tips.js","widget/img_preview.css","tpl/preview.html.js"],function(t,n,i){
"use strict";
var e=t("common/wx/Tips.js"),r=(t("widget/img_preview.css"),t("tpl/preview.html.js")),m=function(t){
this._initData(t),this._render(),this._initEvent();
};
m.prototype={
_moImgData:[],
_msTmplHtml:r,
_moCurrentImgIdx:0,
_initData:function(t){
return this._moImgData=t.imgdata||[],this._moCurrentImgIdx="undefined"==typeof t.current?0:"number"==typeof t.current?t.current:this._inArray(t.current,t.imgdata),
this._moImgData.length<1?void this._throwErr():((this._moCurrentImgIdx<0||this._moCurrentImgIdx>=this._moImgData.length)&&(this._moCurrentImgIdx=0),
void(this._moCfg={
view:this._moImgData.length>1?!0:!1,
imgsrc:this._moImgData[this._moCurrentImgIdx].imgsrc,
downsrc:this._moImgData[this._moCurrentImgIdx].downsrc,
prev:this._moCurrentImgIdx-1>-1?!0:!1,
next:this._moCurrentImgIdx+1<this._moImgData.length?!0:!1
}));
},
_render:function(){
$(template.compile(this._msTmplHtml)(this._moCfg)).appendTo("body");
},
_prev:function(){
this._moCurrentImgIdx>0&&($.extend(this._moCfg,{
imgsrc:this._moImgData[this._moCurrentImgIdx-1].imgsrc,
downsrc:this._moImgData[this._moCurrentImgIdx-1].downsrc,
prev:this._moCurrentImgIdx-1>0?!0:!1,
next:!0
}),this._changeImg(),this._moCurrentImgIdx--);
},
_next:function(){
this._moCurrentImgIdx+1<this._moImgData.length&&($.extend(this._moCfg,{
imgsrc:this._moImgData[this._moCurrentImgIdx+1].imgsrc,
downsrc:this._moImgData[this._moCurrentImgIdx+1].downsrc,
next:this._moCurrentImgIdx+2<this._moImgData.length?!0:!1,
prev:!0
}),this._moCurrentImgIdx++,this._changeImg());
},
_changeImg:function(){
var t=$("#img_opr_container");
this._moCfg.next?t.removeClass("next_disabled"):t.addClass("next_disabled"),this._moCfg.prev?t.removeClass("prev_disabled"):t.addClass("prev_disabled"),
$("#img_dom").hide(),$("#loading_dom").show(),$("#img_dom").find("img").attr("src",""),
$("#img_dom").find("img").attr("src",this._moCfg.imgsrc),$("#btndown").attr("href",this._moCfg.downsrc);
},
_destory:function(){
$(".preview_mask").remove(),$("#preview_container").remove();
},
_throwErr:function(){
alert("系统错误，请重试");
},
_initEvent:function(){
var t=this;
$("#preview_container").on("click",function(n){
var i=n.srcElement||n.target;
$.contains($("#img_container")[0],i)||$.contains($("#img_opr_container")[0],i)||t._destory();
}),$("#closebtn").on("click",function(){
return t._destory(),!1;
}),$("#btnview").on("click",function(){
return""!=t._moCfg.imgsrc?window.open(t._moCfg.imgsrc):e.err("图片资源加载失败。"),!1;
}),$("#btnnext").on("click",function(){
t._next();
}),$("#btnprev").on("click",function(){
t._prev();
}),$(document).keyup(function(n){
27==n.keyCode&&t._destory(),37==n.keyCode&&t._prev(),39==n.keyCode&&t._next();
}),$("#img_dom").find("img").on("load",function(){
$("#img_dom").show(),$("#loading_dom").hide();
});
},
_inArray:function(t,n){
for(var i,e=0;i=n[e];e++)if(t==i.imgsrc)return e;
return-1;
}
},i.exports={
close:function(){
m._destory();
},
show:function(t){
return new m(t);
}
};
});define("tpl/uploader.html.js",[],function(){
return'<li id="uploadItem{id}" data-status="{className}" class="upload_file">\n    <strong class="upload_file_name">{fileName}</strong>\n    <span class="upload_file_size">({size})</span>\n    <div class="progress_bar"><div class="progress_bar_thumb" style="width:0%"></div></div>\n    <a href="javascript:;" data-id="{id}" class="upload_file_cancel js_cancel">取消</a>\n</li>\n';
});define("biz_web/ui/dropdown.js",["biz_web/widget/dropdown.css","tpl/biz_web/ui/dropdown.html.js"],function(e){
"use strict";
function t(e){
e.render&&(e.renderHtml="",$.each(e.data,function(t,a){
e.renderHtml+=e.render(a);
})),e=$.extend(!0,{},d,e);
var t=this;
t.container=$(e.container),t.container.addClass(e.search?i+" search":i),this.isDisabled=e.disabled,
e.disabled?t.container.addClass("disabled"):t.container.removeClass("disabled"),
t.opt=e,t.container.html(template.compile(n)(e)).find(".jsDropdownList").hide(),
t.bt=t.container.find(".jsDropdownBt"),t.dropdown=t.container.find(".jsDropdownList"),
$.each(e.data,function(e,a){
$.data(t.dropdown.find(".jsDropdownItem")[e],"value",a.value),$.data(t.dropdown.find(".jsDropdownItem")[e],"name",a.name),
$.data(t.dropdown.find(".jsDropdownItem")[e],"item",a);
}),"undefined"!=typeof e.index&&0!==e.data.length&&(t.bt.find(".jsBtLabel").html(e.data[e.index].name||e.label),
t.value=e.data[e.index].value),t.bt.on("click",function(){
return a(),e.disabled||(t.dropdown.show(),t.container.addClass("open")),!1;
}),e.search&&t.bt.find(".jsBtLabel").on("keyup",function(e){
if(!t.disabled){
var a=$(this);
if(13==e.keyCode)t.value?(a.html(a.data("name")).removeClass("error"),t.dropdown.hide()):a.find("div").remove();else{
var n=a.html().trim(),d=[];
t.value=null,t.dropdown.show().find(".jsDropdownItem").each(function(){
var e=$(this);
e.hasClass("js_empty")||(e.data("name").indexOf(n)>-1?(e.parent().show(),d.push({
name:e.data("name"),
value:e.data("value")
})):e.parent().hide());
}),0==d.length?0==t.dropdown.find(".js_empty").length&&t.dropdown.append('<li class="jsDropdownItem js_empty empty">未找到"'+n+'"</li>'):(t.dropdown.find(".js_empty").remove(),
1==d.length&&(d[0].name==n?a.removeClass("error"):a.data("name",d[0].name),t.value=d[0].value));
}
}
}).on("blur",function(){
if(!t.disabled){
var a=$(this);
t.value?$(this).html()!=$(this).data("name")&&(a.addClass("error"),t.value=null):""!=a.html()?a.addClass("error"):(a.html(e.label).removeClass("error"),
t.value=null);
}
}).on("focus",function(){
if(!t.disabled){
var a=$(this),n=$(this).html().trim();
n==e.label&&a.html("").removeClass("error"),""==n&&a.removeClass("error"),t.dropdown.show(),
t.container.addClass("open");
}
}),$(document).on("click",a),t.dropdown.on("click",".jsDropdownItem",function(){
if("disabled"==$(this).attr("disabled"))return!1;
var a=$(this).data("value"),n=$(this).data("name"),d=$(this).data("index"),i=$(this).parents(".jsDropdownList").siblings(".jsDropdownBt").find(".jsBtLabel").attr("data-value");
if((!t.value||t.value&&t.value!=a)&&(t.value=a,t.name=n,e.callback&&"function"==typeof e.callback)){
var o=e.callback(a,n,d,$(this).data("item"),i)||n,s=$(this).data("value");
e.search?t.bt.find(".jsBtLabel").html(o).data("name",o).removeClass("error"):t.bt.find(".jsBtLabel").attr("data-value",s).html(o);
}
t.dropdown.hide();
});
}
function a(){
$(".jsDropdownList").hide(),$(".dropdown_menu").each(function(){
!$(this).hasClass("dropdown_checkbox")&&$(this).removeClass("open");
});
}
e("biz_web/widget/dropdown.css");
var n=e("tpl/biz_web/ui/dropdown.html.js"),d={
label:"请选择",
data:[],
callback:$.noop,
render:$.noop,
delay:500,
disabled:!1,
search:!1
},i="dropdown_menu";
return t.prototype={
selected:function(e,t){
var a=this;
if("number"==typeof e){
if(this.opt.data&&this.opt.data[e]){
var n=this.opt.data[e].name,d=this.opt.data[e].value;
0==t||this.dropdown.find(".jsDropdownItem:eq("+e+")").trigger("click",d),this.bt.find(".jsBtLabel").html(n);
}
}else $.each(this.opt.data,function(n,i){
return e==i.value||e==i.name?(0==t||a.dropdown.find(".jsDropdownItem:eq("+n+")").trigger("click",d),
a.bt.find(".jsBtLabel").html(i.name),!1):void 0;
});
return this;
},
reset:function(){
return this.bt.find(".jsBtLabel").html(this.opt.label),this.value=null,this;
},
hidegreater:function(e){
var t=this;
return"number"==typeof e&&t.opt.data&&t.opt.data[e]&&(t.dropdown.find(".jsDropdownItem").show(),
t.dropdown.find(".jsDropdownItem:gt("+e+")").hide()),this;
},
destroy:function(){
return this.isDisabled&&this.container.removeClass("disabled"),this.container.children().remove(),
this.container.off(),this;
},
enable:function(){
return this.opt.disabled=!1,this.container.removeClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!0),
this;
},
disable:function(){
return this.opt.disabled=!0,this.container.addClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!1),
this;
}
},t;
});define("tpl/tooltips.html.js",[],function(){
return'<div class="popover {parentClass}" style="display:none;position:{container_mode};{if offset.left}left:{offset.left}px;top:{offset.top}px;{/if}">\n    <div class="popover_inner">\n        <div class="js_content popover_content">{=content}</div>\n        {if container_close}\n        <!--#0001#-->\n        <a href="javascript:;" class="popover_close icon16_common close_flat js_popover_close">关闭</a>\n        <!--%0001%-->\n        {/if}\n        {if buttons.length > 0}\n        <div class="popover_bar">\n			{each buttons as o index}\n			<a onclick="return false;" href="javascript:;" class="js_btn btn {o.type}">{o.text}</a>\n			{/each}\n        </div>\n        {/if}\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});define("register/mod/mod_legal_qrcheck.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/qrcheck_weapp.js"],function(e,t,n){
"use strict";
function a(e,t){
b=e,M=t,i();
}
function r(e,t){
L=e,O=t,i();
}
function c(){
return $('input[name="register_type_select"]:checked').val();
}
function o(){
return k.val();
}
function i(){
l(),M&&O&&3==c()&&(clearTimeout(T),setTimeout(function(){
v.hide(),h.show();
var e={
container:h,
container_class:"qrcheck_box primary",
cgiURI:"findacct"==g.getData().current_page?"/cgi-bin/basesafeqrcode":"/cgi-bin/mastersafeqrcode",
showImgInfo:!1,
size:120,
typeid:"findacct"==g.getData().current_page?36:26,
msgData:{
name:b,
name_title:"法定代表人"
},
data:{
operator_name:b,
operator_id:L
},
extra:{
operator_name:b,
operator_id:L,
subject:$("input[name=name]").val(),
refill:"true"==g.getData().refill?1:0,
service_type:g.getData().service_type,
is_from_legal_person:1
},
onSuccess:function(e){
k.val(e),D.mods.legal_person.setLegalInfo();
},
onFail:function(e,t){
q.val(t),D.mods.legal_person.setLegalInfo();
},
onMsgUpdate:function(e,t,n){
console.log("onMsgUpdate:",e,t,n);
var a={
name:b,
name_title:"法定代表人"
};
q.val(t),D.mods.legal_person.setLegalInfo();
var r=void 0,c=t;
if(2==t&&(c=t+"_"+n),"0"==t&&4==g.getData().service_type){
var o=$(".js_qrcheck_ret_0").clone().wrap("<div></div>").parent().html();
r=wx.T(o,a);
}else $("#tpl_legal_person_qrcheck_ret_"+c).length>0?r=w("tpl_legal_person_qrcheck_ret_"+c,a):$("#tpl_qrcheck_ret_"+c).length>0&&(r=w("tpl_qrcheck_ret_"+c,a));
return r;
}
};
"findacct"==g.getData().current_page&&(e.data.appid=g.getData().appid);
var t=$.extend(!0,e,I);
y=x.init(t),$.trim(L)&&$.trim(b)&&y.load();
},500));
}
function l(){
clearTimeout(T),y&&y.destroy(),v.show(),h.html("").hide(),k.val(""),q.val("");
}
function s(e){
I=e||{};
}
function _(){
h=f.find("#js_div_legal_qrcheck"),v=f.find("#js_div_legal_qrcheck_none"),k=f.find('input[name="legal_person_ticket"]'),
q=f.find('input[name="legal_person_status"]');
}
function d(){
v.show(),h.hide();
}
function p(){}
function u(){
$.validator.addMethod("legal_qrcheck",function(){
return"1"==q.val()?!0:!1;
}),q.rules("add",{
legal_qrcheck:{
depends:function(){
return 3==c();
}
},
messages:{
legal_qrcheck:"请扫描二维码验证法定代表人身份"
}
}),k.rules("add",{
required:{
depends:function(){
return 3==c();
}
},
messages:{
required:"请完善法定代表人身份信息"
}
});
}
function m(e){
g=e.model,f=$(e.form),D=$.extend(!1,D,e),j=!0,_(),d(),p(),u();
}
var g,f,h,v,k,q,w=template.render,x=(e("common/wx/Cgi.js"),e("common/wx/Tips.js"),
e("common/wx/qrcheck_weapp.js")),j=!1,D={},y=null,I={},T=null,b="",L="",M=!1,O=!1;
n.exports={
init:m,
setQrcheckOpt:s,
getTicket:o,
setOperatorIdcard:r,
setOperatorName:a,
initQrcheck:i
};
});define("register/mod/mod_legal_person.js",["common/wx/Cgi.js","common/wx/Tips.js"],function(e){
"use strict";
function r(){
u=p.find('input[name="legal_person_name"]'),d=p.find('input[name="legal_person_idcard"]'),
m=p.find('input[name="operator_type"]');
}
function o(){
return $('input[name="register_type_select"]:checked').val();
}
function n(){}
function t(){
3==o()&&2==m.filter("input:checked").val()&&($("#js_operator_section .js_operator_use_legal_person").hide(),
$("#operator_name").val(u.val()),$("#operator_idcard").val(d.val()),$("#js_input_qrcheck_status").val($("#js_input_legal_qrcheck_status").val()),
$("#js_input_qrcheck_ticket").val($("#js_input_legal_qrcheck_ticket").val()));
}
function a(){
u.on("keyup, blur",function(){
f.mods.legal_qrcheck.setOperatorName(u.val(),u.valid()),t();
}),d.on("keyup, blur",function(){
f.mods.legal_qrcheck.setOperatorIdcard(d.val(),d.valid()),t();
}),setTimeout(function(){
""!=u.val()&&u.blur(),""!=d.val()&&d.blur();
}),m.checkbox({
onChanged:function(e){
var r=$(e).val();
1==r?($("#js_operator_section .js_operator_use_legal_person").show(),$("#operator_name").val(""),
$("#operator_idcard").val(""),$("#operator_name").blur()):t(),l.getData().operator_type=r,
setTimeout(function(){
f.mods.qrcheck&&(1==r?f.mods.qrcheck.removeQrcheck():f.mods.qrcheck.initQrcheck());
});
}
}),m.filter("input:checked").click();
}
function s(){
u.length>0&&u.rules("add",{
required:{
depends:function(){
return 3==o();
}
},
rangelength:{
depends:function(){
return 3==o();
},
param:[1,20]
},
messages:{
required:"请填写法定代表人姓名",
rangelength:$.validator.format("法定代表人姓名为{0}到{1}个中英文")
}
}),d.length>0&&d.rules("add",{
idcard:{
depends:function(){
return 3==o();
}
},
messages:{
idcard:"法定代表人身份证格式不正确，或者年龄未满18周岁，请重新填写。"
}
});
}
function i(e){
1!=h&&(l=e.model,p=$(e.form),f=$.extend(!1,f,e),h=!0,r(),n(),a(),s());
}
function c(){
$("#js_legal_person_info").show(),$("#js_operator_type_container").show();
var e=m.filter("input:checked").val();
1==e?$("#js_operator_section .js_operator_use_legal_person").show():$("#js_operator_section .js_operator_use_legal_person").hide();
}
function _(){
$("#js_legal_person_info").hide(),$("#js_operator_type_container").hide();
var e=m.filter("input:checked").val();
2==e&&$("#js_operator_section .js_operator_use_legal_person").show();
}
var l,p,u,d,m,h=(template.render,e("common/wx/Cgi.js"),e("common/wx/Tips.js"),!1),f={};
return{
init:i,
show:c,
hide:_,
setLegalInfo:t
};
});define("register/mod/mod_bank.js",["common/wx/Cgi.js","biz_web/ui/checkbox.js","biz_web/ui/dropdown.js","common/wx/Tips.js","register/mod/mod_banklist.js","register/data_bank_city.js"],function(e,a,n){
"use strict";
function t(e){
b.checkbox("disabled",!1),b.filter('[value="'+e+'"]').click();
}
function i(){
$("#js_div_register_type").hide();
}
function r(){
var e=q.val();
return"0"===e?!0:!1;
}
function d(){
b=_.find('input[name="register_type_select"]'),m=$("#js_div_register_type_0"),p=$("#js_div_register_type_1"),
f=$("#js_div_register_type_0_tips"),v=$("#js_div_register_type_1_tips"),k=$("#js_div_bank_name"),
g=$("#js_div_bank_province"),h=$("#js_div_bank_city"),y=$("#js_btn_bank_guide"),
j=$("#js_btn_show_bank"),w=_.find('input[name="name"]'),q=_.find('input[name="register_type"]'),
x=_.find('input[name="bank_acct_name"]'),D=_.find('input[name="bank_acct_num"]'),
T=_.find('input[name="bank_acct_num_confirm"]'),C=_.find('input[name="bank_name"]'),
z=_.find('input[name="bank_province"]'),A=_.find('input[name="bank_city"]'),B.init({
onGettingBank:function(e){
k.html(e),C.val(e),C.valid(),j.html("重新选择");
}
});
}
function s(){
var e,a,n=l.getData().bank_acct_info,t=!1;
n.verify_status&&0!=n.verify_status&&(t=!0),b.checkbox({
type:"radio",
onChanged:function(e){
var a=e.val();
w.rules("remove","bank_acct_name rangelength ent_name"),0==a?(m.show(),p.hide(),
f.show(),v.hide(),q.val("0"),w.rules("add",{
bank_acct_name:!0,
ent_name:!0
})):(m.hide(),p.show(),f.hide(),v.show(),q.val("1"),w.rules("add",{
rangelength:[w.data("minlen"),w.data("maxlen")]
})),""!=w.val()&&w.valid();
}
}),T.bind("copy paste",function(e){
e.preventDefault();
}),D.on("blur",function(){
T.valid();
}),j.on("click",function(e){
return e.preventDefault(),1==t?!1:void B.show();
}),setTimeout(function(){
e=new M({
container:g,
label:n.bank_province?n.bank_province:"省份",
data:Z.province,
disabled:t,
callback:function(e){
A.val(""),z.val(e),z.valid(),a&&a.destroy(),a=new M({
container:h,
label:"城市",
data:Z.city[e],
callback:function(e){
A.val(e),A.valid();
},
search:!1
});
},
search:!1
}),n.bank_province&&(a=new M({
container:h,
label:n.bank_city?n.bank_city:"城市",
data:Z.city[n.bank_province],
callback:function(e){
A.val(e),A.valid();
},
search:!1
}));
},100),1==t&&(j.addClass("btn_disabled"),D.attr("disabled","disabled").parent(".frm_input_box").addClass("disabled"),
T.attr("disabled","disabled").parent(".frm_input_box").addClass("disabled"),C.attr("disabled","disabled"),
z.attr("disabled","disabled"),A.attr("disabled","disabled")),y.click(function(){
$("#tpl_bank_guide").popup({
title:"对公账号信息填写指引",
buttons:[{
text:"我知道了",
type:"primary",
click:function(){
this.remove();
}
}],
width:900
});
});
}
function c(){
x.on("paste",function(e){
e.preventDefault();
});
}
function o(){
$.validator.addMethod("bank_acct_name",function(e){
return 1==/^[\u4e00-\u9fffa-zA-Z0-9\(\)\-\:\,\._《》（）]+$/.test(e)?!0:!1;
},"名称只能为中文、英文、数字、括号、书名号、半角冒号、点号、横线"),$.validator.addMethod("ent_name",function(e){
for(var a=0,n=0;n<e.length;n++)a+=e.charCodeAt(n)>=0&&e.charCodeAt(n)<=255?1:3;
return a>=12&&90>=a?!0:!1;
},"企业名称为4到30个中文字"),q.rules("add",{
required:!0,
messages:{
required:"请选择主体验证方式"
}
}),x.rules("add",{
required:r,
equalTo:{
param:w,
depends:function(){
return r();
}
},
messages:{
required:"请输入户名",
equalTo:"对公账户户名与申请主体不一致，请核实"
}
}),D.rules("add",{
required:r,
number:r,
rangelength:{
param:[2,35],
depends:function(){
return r();
}
},
messages:{
required:"请输入对公账户",
number:"对公账户应为数字",
rangelength:$.validator.format("对公账户为{0}到{1}个数字")
}
}),T.rules("add",{
required:r,
equalTo:{
param:D,
depends:function(){
return r();
}
},
messages:{
required:"请再次输入对公账户",
equalTo:"两次对公账户号码不一致"
}
}),C.rules("add",{
required:r,
messages:{
required:"请选择开户银行"
}
}),z.rules("add",{
required:r,
messages:{
required:"请选择开户地点"
}
}),A.rules("add",{
required:r,
messages:{
required:"请选择开户地点"
}
}),(2==l.getData().contractor_type||3==l.getData().contractor_type||1==l.getData().is_overseas)&&(b.filter('[value="1"]').click(),
b.checkbox("disabled",!0));
}
function u(e){
l=e.model,_=$(e.form),S=$.extend(!1,S,e),G=!0,4!=l.getData().service_type&&0!=l.getData().contractor_type&&(d(),
s(),c(),o());
}
var l,_,b,m,p,f,v,k,g,h,y,j,w,q,x,D,T,C,z,A,M=(template.render,e("common/wx/Cgi.js"),
e("biz_web/ui/checkbox.js"),e("biz_web/ui/dropdown.js")),B=(e("common/wx/Tips.js"),
e("register/mod/mod_banklist.js")),G=!1,S={},Z=e("register/data_bank_city.js");
n.exports={
init:u,
selectType:t,
hideSelectType:i
};
});define("register/mod/mod_onecentbank.js",["common/wx/Cgi.js","biz_web/ui/checkbox.js","biz_web/ui/dropdown.js","common/wx/Tips.js","register/data_bank_city.js"],function(e,n,t){
"use strict";
function i(e){
v.checkbox("disabled",!1),v.filter('[value="'+e+'"]').click();
}
function a(e){
var n=$("#js_div_register_type .frm_controls");
switch(e){
case 1:
i(1),n.removeClass("type_onecent_only").addClass("type_wx_verify_only"),n.find(".js_div_register_type_select_1").show(),
n.find(".js_div_register_type_select_2").hide(),n.find(".js_div_register_type_select_3").hide(),
v.checkbox("disabled",!0);
break;

case 2:
i(2),n.removeClass("type_wx_verify_only").addClass("type_onecent_only"),n.find(".js_div_register_type_select_1").hide(),
n.find(".js_div_register_type_select_3").hide(),n.find(".js_div_register_type_select_2").show(),
v.checkbox("disabled",!0);
break;

default:
n.removeClass("type_wx_verify_only").removeClass("type_onecent_only"),n.find(".js_div_register_type_select").show(),
v.checkbox("disabled",!1);
}
}
function s(e){
var n=$("#js_div_register_type .frm_controls");
n.find(".js_div_register_type_select_1").hide(),n.find(".js_div_register_type_select_2").hide(),
n.find(".js_div_register_type_select_3").hide();
for(var t=0;t<e.length;t++)n.find(".js_div_register_type_select_"+e[t]).show();
i(e[0]),0==e.length?v.checkbox("disabled",!0):v.checkbox("disabled",!1);
}
function r(){
$(".js_div_register_type_none").show(),$(".js_div_register_type_select").hide(),
B.mods&&B.mods.legal_person&&B.mods.legal_person.hide();
}
function _(){
$(".js_div_register_type_none").hide(),$(".js_div_register_type_select").show(),
B.mods&&(3==F?B.mods.legal_person&&B.mods.legal_person.show():B.mods.legal_person&&B.mods.legal_person.hide());
}
function d(){
var e=C.val();
return"2"==e?!0:!1;
}
function o(){
v=m.find('input[name="register_type_select"]'),f=$("#js_div_register_type_2"),g=$("#js_div_register_type_1"),
h=$("#js_div_register_type_1_tips"),y=$("#js_div_register_type_3_tips"),k=$("#js_div_bank_province"),
j=$("#js_div_bank_city"),w=$("#js_div_bank_name"),x=$("#js_btn_bank_guide"),q=m.find('input[name="name"]'),
C=m.find('input[name="register_type"]'),T=m.find('input[name="bank_acct_name"]'),
D=m.find('input[name="bank_acct_num"]'),z=m.find('input[name="bank_acct_num_confirm"]'),
A=m.find('input[name="bank_province"]'),M=m.find('input[name="bank_city"]'),S=m.find('input[name="bank_name"]'),
G=!1;
}
function l(){
var e,n,t=b.getData().bank_acct_info,i=!1;
t.verify_status&&0!=t.verify_status&&(i=!0),v.checkbox({
type:"radio",
onChanged:function(e){
var n=e.val();
$("#js_legal_person_info").hide(),$(".js_legal_person_tips").show(),q.rules("remove","bank_acct_name rangelength ent_name"),
$(".js_register_limit_count").val(5),1==n?(f.hide(),g.show(),y.hide(),h.show(),C.val("1")):2==n?(f.show(),
g.hide(),y.hide(),h.hide(),C.val("2"),q.rules("add",{
bank_acct_name:!0
})):($("#js_legal_person_info").show(),h.hide(),f.hide(),y.show(),C.val("3"),$(".js_legal_person_tips").hide(),
$(".js_register_limit_count").val(50)),F=n,B.mods&&B.mods.legal_person&&(3==F?B.mods.legal_person.show():B.mods.legal_person.hide()),
B.mods&&B.mods.legal_qrcheck&&B.mods.legal_qrcheck.initQrcheck(),""!=q.val()&&q.valid();
}
}),z.bind("copy paste",function(e){
e.preventDefault();
}),D.on("blur",function(){
z.valid();
}),setTimeout(function(){
e=new Q({
container:k,
label:t.bank_province?t.bank_province:"省份",
data:E.province,
disabled:i,
callback:function(e){
M.val(""),A.val(e),A.valid(),n&&n.destroy(),n=new Q({
container:j,
label:"城市",
data:E.city[e],
callback:function(e){
M.val(e),M.valid();
},
search:!1
});
},
search:!1
}),t.bank_province&&(n=new Q({
container:j,
label:t.bank_city?t.bank_city:"城市",
data:E.city[t.bank_province],
callback:function(e){
M.val(e),M.valid();
},
search:!1
}));
},100),1==i&&(D.attr("disabled","disabled").parent(".frm_input_box").addClass("disabled"),
z.attr("disabled","disabled").parent(".frm_input_box").addClass("disabled"),A.attr("disabled","disabled"),
M.attr("disabled","disabled")),x.click(function(){
$("#tpl_bank_guide").popup({
title:"对公账号信息填写指引",
buttons:[{
text:"我知道了",
type:"primary",
click:function(){
this.remove();
}
}],
width:900
});
}),new Q({
container:w,
label:t.bank_province?t.bank_name?t.bank_name:"其他银行":"请选择开户银行",
data:[{
name:"中国工商银行",
value:"中国工商银行"
},{
name:"其他银行",
value:""
}],
callback:function(e){
G=!0,S.val(e),S.valid();
}
}),t.bank_province&&(G=!0);
}
function c(){
T.on("paste",function(e){
e.preventDefault();
}),setTimeout(function(){
3==F&&i(F);
},20);
}
function u(){
$.validator.addMethod("bank_acct_name",function(e){
return 1==/^[\u4e00-\u9fffa-zA-Z0-9\(\)\-\:\,\._·《》（）]+$/.test(e)?!0:!1;
},"名称只能为中文、英文、数字、括号、书名号、半角冒号、点号、横线"),$.validator.addMethod("ent_name",function(e){
for(var n=0,t=0;t<e.length;t++)n+=e.charCodeAt(t)>=0&&e.charCodeAt(t)<=255?1:3;
return n>=12&&90>=n?!0:!1;
},"企业名称为4到30个中文字"),$.validator.addMethod("bank_name",function(e){
return d()?G?!0:e.length>0?!0:!1:!0;
}),C.rules("add",{
required:!0,
messages:{
required:"请选择主体验证方式"
}
}),T.rules("add",{
required:d,
equalTo:{
param:q,
depends:function(){
return d();
}
},
messages:{
required:"请输入户名",
equalTo:"对公账户户名与申请主体不一致，请核实"
}
}),D.rules("add",{
required:d,
number:d,
rangelength:{
param:[2,35],
depends:function(){
return d();
}
},
messages:{
required:"请输入对公账户",
number:"对公账户应为数字",
rangelength:$.validator.format("对公账户为{0}到{1}个数字")
}
}),z.rules("add",{
required:d,
equalTo:{
param:D,
depends:function(){
return d();
}
},
messages:{
required:"请再次输入对公账户",
equalTo:"两次对公账户号码不一致"
}
}),A.rules("add",{
required:d,
messages:{
required:"请选择开户地点"
}
}),M.rules("add",{
required:d,
messages:{
required:"请选择开户地点"
}
}),S.rules("add",{
bank_name:!0,
messages:{
bank_name:"请选择开户银行"
}
}),(2==b.getData().contractor_type||3==b.getData().contractor_type||1==b.getData().is_overseas)&&(v.filter('[value="1"]').click(),
v.checkbox("disabled",!0)),v.checkbox("disabled",!0);
}
function p(e){
b=e.model,m=$(e.form),B=$.extend(!1,B,e),Z=!0,4!=b.getData().service_type&&0!=b.getData().contractor_type&&(o(),
l(),c(),u());
}
var b,m,v,f,g,h,y,k,j,w,x,q,C,T,D,z,A,M,S,Q=(template.render,e("common/wx/Cgi.js"),
e("biz_web/ui/checkbox.js"),e("biz_web/ui/dropdown.js")),Z=(e("common/wx/Tips.js"),
!1),B={},E=e("register/data_bank_city.js"),F=wx.cgiData.register_type,G=!1;
t.exports={
init:p,
selectType:i,
onlyType:a,
multiType:s,
showSelectType:_,
hideSelectType:r
};
});define("biz_web/ui/checkbox.js",["tpl/biz_web/ui/checkbox.html.js"],function(t){
"use strict";
function e(t){
var e=$(t);
e.each(function(){
var t=$(this),e=t.prop("checked"),n=t.parent();
e?n.addClass("selected"):n.removeClass("selected");
});
}
function n(t){
var e=$(t);
e.each(function(){
var t=$(this).prop("disabled"),e=$(this).parent();
t?e.addClass("disabled"):e.removeClass("disabled");
});
}
function i(){
return"checkbox"+s++;
}
var a={
container:null,
label:"",
name:"",
type:"checkbox"
},c=t("tpl/biz_web/ui/checkbox.html.js"),r=wx.T,s=1,o=1,p=function(t){
this.options=$.extend(!0,{},a,t),this.options.index=o++,this.$container=$(this.options.container),
this.$dom=$(r(c,this.options)).appendTo(this.$container),this.$input=this.$dom.find("input"),
this.$input.checkbox();
};
return p.prototype={
checked:function(t){
return"undefined"!=typeof t&&(this.$input.prop("checked",t),e(this.$input)),this.$input.prop("checked");
},
disabled:function(t){
return"undefined"!=typeof t&&(this.$input.prop("disabled",t),n(this.$input)),this.$input.prop("disabled");
}
},$.fn.checkbox=function(t){
var a,c,r,s,o=!1;
"boolean"==typeof t?a=t:$.isPlainObject(t)?(a=t.multi,c=t.onChanged):"string"==typeof t?(o=!0,
r=t,s=[].slice.call(arguments,1)):"undefined"==typeof t&&(t={}),"undefined"==typeof a&&(a=this.is("input[type=checkbox]"));
var p=this,d=a?"checkbox":"radio",h={
checked:function(t){
return p.attr("checked",t),p.prop("checked",t),e(p),p;
},
disabled:function(t){
return p.attr("disabled",t),p.prop("disabled",t),n(p),p;
},
value:function(){
var t=p.eq(0);
return t.prop("checked")?t.val():"";
},
values:function(){
var t=[];
return p.each(function(){
$(this).prop("checked")&&t.push($(this).val());
}),t;
},
adjust:function(t){
var n;
return n="string"==typeof t?t.split(","):t,n&&n.length>0&&p.each(function(){
var t=$(this);
n.indexOf(t.val())>=0&&(t.attr("checked",!0),e(t));
}),this;
},
disable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!0),n(t));
}),this;
},
setall:function(t){
p.each(function(){
var e=$(this);
e.attr("disabled",t?!1:!0),n(e);
});
},
enable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!1),n(t));
}),this;
},
label:function(t){
return t&&(p.parent().find(".lbl_content").text(t),p.attr("data-label",t)),p;
}
};
return o&&"function"==typeof h[r]?h[r].apply(h,s):(this.addClass("frm_"+d).each(function(){
var t=$(this),e=t.parent();
if(!e.is("label")){
var n=t.attr("data-label")||"";
e=$('<label class="frm_{type}_label"><i class="icon_{type}"></i></label>'.format({
type:d
})).append("<span class='lbl_content'>{content}</span>".format({
content:n.html(!0)
})),e.insertBefore(t).prepend(t);
}
if(!this.id){
var a=i();
this.id=a;
}
e.attr("for",this.id);
}),e(this),n(this),t&&t.initOnChanged&&"function"==typeof c&&p.parent().find("input[type=checkbox],input[type=radio]").each(function(){
c.call(h,$(this));
}),this.parent().delegate("input[type=checkbox],input[type=radio]","click",function(){
var t=$(this),n=t.prop("checked");
a?(t.attr("checked",n),e(t)):(p.attr("checked",!1),t.attr("checked",!0).prop("checked",!0),
e(p)),"function"==typeof c&&c.call(h,t);
}).addClass("frm_"+d+"_label"),h);
},p;
});