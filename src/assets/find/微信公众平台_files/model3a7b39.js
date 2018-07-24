define("common/wx/upload.js",["widget/upload.css","biz_web/lib/webuploader.js","common/wx/dialog.js","common/wx/Tips.js","tpl/uploader.html.js"],function(e){
"use strict";
function i(e){
f.src="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7839&flag2=4&flag3=5&1="+e;
}
e("widget/upload.css");
var n=e("biz_web/lib/webuploader.js"),a=e("common/wx/dialog.js"),t=e("common/wx/Tips.js"),o=e("tpl/uploader.html.js"),r=wx.T,s=wx.path.webuploader,l=~location.hostname.search(/^mp/)?"https://mp.weixin.qq.com":"",p={
2:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/png, image/jpeg, image/jpg, image/gif"
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
mimeTypes:"image/bmp,image/png, image/jpeg, image/jpg, image/gif,application/pdf"
},
fileSingleSizeLimit:5242880
},
7:{
accept:{
extensions:"bmp,jpeg,jpg,gif",
mimeTypes:"image/bmp, image/jpeg, image/jpg, image/gif"
},
fileSingleSizeLimit:5242880
},
8:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png, image/jpeg, image/jpg"
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
mimeTypes:"image/bmp,image/png, image/jpeg, image/jpg"
},
fileSingleSizeLimit:5242880
},
12:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:31457280
}
};
p[15]=p[4];
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
},f=new Image,g={},h=function(e){
if(!e.url)throw"missing url";
var a,s,l,m=$('<ul class="upload_file_box" style="display:none"></ul>'),f=$(e.container);
f.on("click",function(){
Math.random()<.1&&d(12),c(a);
}).parent().append(m),function(){
0==n.Uploader.support("html5")&&0==n.Uploader.support("flash")&&((new Image).src="/misc/jslog?level=error&id=36&content=[pageurl:"+encodeURIComponent(location.href)+",ua:"+encodeURIComponent(window.navigator.userAgent)+"]");
}(),s={
server:wx.url(e.url+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&svr_time="+wx.data.time),
pick:{
id:f,
multiple:e.multi
},
fileNumLimit:e.queueSizeLimit
},l=p[e.type]||p[2],e=$.extend(!0,{},u,s,l,e);
e.server;
0==n.Uploader.support("html5")&&e.compress&&(e.compress.quality=70);
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
g[e.id]=+new Date;
}),a.on("uploadSuccess",function(n,a,o){
if(Math.random()<.1&&d(16),a&&a.base_resp){
var r=+a.base_resp.ret;
if(0==r)Math.random()<.1&&(d(17),g[n.id]&&i(+new Date-g[n.id]));else switch(n.setStatus("invalid"),
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
this.reset(),m.fadeOut().html(""),g={},0==i.numOfInvalid&&i.numOfSuccess>0&&e.onAllComplete&&e.onAllComplete(null,{
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
t.err("图片压缩后过大，请缩小图片尺寸再试"),d(42);
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
uploadBizFile:b(l+"/cgi-bin/filetransfer?action=upload_material&f=json"),
uploadTmpFile:b(l+"/cgi-bin/filetransfer?action=preview&f=json"),
uploadCdnFile:b(l+"/cgi-bin/filetransfer?action=upload_cdn&f=json"),
uploadShopFile:b(l+"/merchant/goodsimage?action=uploadimage"),
uploadShopUnsaveFile:b(l+"/merchant/goodsimage?action=uploadimage&save=0"),
uploadVideoCdnFile:b(l+"/cgi-bin/filetransfer?action=upload_video_cdn&f=json"),
uploadRegisterFile:b(l+"/acct/realnamesubmit?type=2&action=file_set"),
uploadUpgradeFile:b(l+"/acct/servicetypeupgrade?type=2&action=file_set"),
uploadPoiFile:b(l+"/misc/setlocation?action=upload"),
mediaFile:b(l+"/cgi-bin/filetransfer?action=bizmedia"),
uploadCdnFileFromAd:function(e){
return b(l+"/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json&width="+e.w+"&height="+e.h+"&limit_size="+e.size);
},
uploadImageLibFile:function(e){
return e.url=l+"/cgi-bin/filetransfer?action=upload_material&f=json","undefined"!=typeof e.scene&&(e.url+="&scene="+e.scene),
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
return b(l+"/cgi-bin/filetransfer?action=upload_cdn_check_range&f=json&"+n.join("&"),"tmpfile");
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
return b(l+"/cgi-bin/filetransfer?action=preview_check_range&f=json&"+n.join("&"));
},
tmpFileUrl:w(l+"/cgi-bin/filetransfer?action=preview"),
mediaFileUrl:w(l+"/cgi-bin/filetransfer?action=bizmedia"),
multimediaFileUrl:w(l+"/cgi-bin/filetransfer?action=multimedia")
};
});define("common/wx/region.js",["common/wx/Cgi.js","biz_web/ui/dropdown.js"],function(t,e,n){
"use strict";
var i=t("common/wx/Cgi.js"),o=t("biz_web/ui/dropdown.js"),a={
disabled:!1
},c=function(t){
this.opt=$.extend(!0,{},a,t),this.container=$(t.container),this._action=null,u.call(this);
},r="/cgi-bin/getregions?t=setting/ajax-getregions&id={id}",s={
country:"国家",
province:"省份",
city:"城市"
},l=function(t){
return void 0===t&&(t=""),t+="",t&&t.replace(/(\u00a0|&nbsp;)/g," ").replace(/&quot;/gi,'"').replace(/&#39;/gi,"'");
},p=function(t,e){
var n=wx.url(r.format({
id:t||-1
}));
i.get({
url:n,
mask:!1
},e);
},u=function(){
var t=this;
t.opt.cgi&&(r=t.opt.cgi+"?t=setting/ajax-getregions&id={id}"),t.opt.list?$.each(["country","province","city"],function(e,n){
t.opt.list[n]=t.opt.list[n]||[];
}):t.opt.list={
country:[],
province:[],
city:[]
},t.opt.display=t.opt.display||{
country:!0,
province:!0,
city:!0
},t.selectors={},$.each(["country","province","city"],function(e,n){
var i="js_"+n+(1e4*Math.random()|0);
$('<div id="'+i+'" style="display:none"></div>').appendTo(t.container),t.selectors[n]="#"+i;
}),d.call(this,"0","country");
},d=function(t,e){
var n=this;
n._action=t,n.status="loading",p(t,function(i){
if(i&&i.base_resp&&0==i.base_resp.ret&&n._action==t){
n.status="loaded";
var o=[],a=n.opt.list[e];
$.each(i.data,function(t,i){
var a=l($.trim(i.name)).replace(/"/g,"&quot;"),c=!0;
n.opt.retain&&n.opt.retain[e]&&n.opt.retain[e].length>0?n.opt.retain[e].indexOf(parseInt(i.id,10))>-1?"中国"==a?o.unshift({
name:a,
value:i.id
}):o.push({
name:a,
value:i.id
}):c=!1:"中国"==a?o.unshift({
name:a,
value:i.id
}):o.push({
name:a,
value:i.id
}),c&&n.opt.remove&&n.opt.remove[e]&&n.opt.remove[e].length>0&&-1!=n.opt.remove[e].indexOf(parseInt(i.id,10))&&("中国"==a?o.shift():o.pop());
}),o=a.concat(o),n.opt.is_overseas&&$.each(o,function(t,e){
"中国"==e.name?o[t].name="中国大陆":"中国香港"==e.name?o[t].name="香港":"中国澳门"==e.name?o[t].name="澳门":"中国台湾"==e.name&&(o[t].name="台湾");
}),h.call(n,e,o);
var c=n.opt.data;
c&&c[e]&&n[e].selected(c[e]),(v.call(n,e)||0==n.opt.display[e])&&n[e].container.hide(),
(v.call(n,e)||"city"==e)&&n.opt.onComplete&&n.opt.onComplete.call(n),n.opt.onLoadComplete&&n.opt.onLoadComplete.call(n,e,t);
}
});
},h=function(t,e){
var n=this;
n[t]=new o({
container:n.selectors[t],
label:s[t],
data:e,
disabled:n.opt.disabled,
callback:function(e,i){
switch(t){
case"country":
d.call(n,e,"province");
break;

case"province":
d.call(n,e,"city");
}
switch(t){
case"country":
n.province&&n.province.container.hide(),n.province=null;

case"province":
n.city&&n.city.container.hide(),n.city=null;
}
n.opt.onChange&&n.opt.onChange(t,e,i);
}
}),n[t].container.show();
},v=function(t){
return"loading"!=this.status&&(null==this[t]||0==this[t].opt.data.length);
},m={
get:function(t){
return v.call(this,t)?"":this[t]&&this[t].name||-1;
},
getAll:function(){
return{
country:this.get("country"),
province:this.get("province"),
city:this.get("city")
};
}
};
$.extend(c.prototype,m),n.exports=c;
});define("common/wx/inputCounter.js",[],function(t,n,e){
"use strict";
function o(t,n){
this.$input=$(t),this.opts=$.extend(!0,{},i,n),this._init();
}
var i={
minLength:0,
maxLength:20,
showCounter:!0,
useGBKLength:!1,
GBKBased:!1
};
o.prototype._init=function(){
var t=this;
t.$input&&t.$input.length>0?(t.$inputBox=t.$input.parent("textarea"==t.$input.prop("tagName").toLowerCase()?".frm_textarea_box":".frm_input_box"),
t.$inputBox&&0!=t.$inputBox.length||(t.$inputBox=t.$input.parent(".js_input_counter_container")),
t.count=t._getLen(t.getValue()),t.$counter=t.$inputBox.find(".frm_counter"),t.counterExist=!0,
0==t.$counter.length&&(t.$counter=t.$inputBox.find(".js_counter_em")),0==t.$counter.length&&(t.counterExist=!1,
t.$counter=$('<em class="frm_input_append frm_counter"></em>'),t.$inputBox.append(t.$counter)),
1==t.opts.showCounter?t.show():t.hide(),t.setCount(t.count),t.inputEvent=function(){
t.setCount(t._getLen(t.getValue()));
},t.$input.on("keydown keyup",t.inputEvent)):console.log("inputCounter Err: input does not exist.");
},o.prototype.getValue=function(){
var t="";
switch(this.$input.prop("tagName")){
case"INPUT":
case"TEXTAREA":
t=this.$input.val();
break;

default:
t=this.$input.text();
}
return t;
},o.prototype._getLen=function(t){
var n=0;
return t=t||"",n=this.opts.useGBKLength?t.replace(/[^\x00-\xff]/g,"**").length:t.length,
this.opts.GBKBased&&(n=Math.ceil(n/2)),n;
},o.prototype.getCount=function(){
return this.count||0;
},o.prototype.setCount=function(t){
this.count=t,this.$counter.html(this.count+"&#47;"+this.opts.maxLength),this.count>this.opts.maxLength?(this.overflowed=!0,
this.$inputBox.addClass("warn")):this.count>0&&this.count<this.opts.minLength?(this.overflowed=!0,
this.$inputBox.addClass("warn")):(this.overflowed=!1,this.$inputBox.removeClass("warn"));
},o.prototype.hasOverflowed=function(){
return this.overflowed;
},o.prototype.show=function(){
this.$inputBox.addClass("with_counter counter_in append count"),this.$counter.show();
},o.prototype.hide=function(){
this.$inputBox.removeClass("with_counter counter_in append count warn"),this.$counter.hide();
},o.prototype.hideWithAppend=function(){
this.$inputBox.removeClass("with_counter counter_in count warn"),this.$counter.hide();
},o.prototype.destroy=function(){
this.$input.off("keydown keyup",this.inputEvent),0==this.counterExist&&(this.hide(),
this.$counter.remove());
},e.exports=o;
});define("common/wx/tooltips.js",["tpl/tooltips.html.js"],function(o,t,n){
"use strict";
var i={
position:{},
container:"",
type:"hover",
buttons:[],
delay:300,
disabled:!1,
reposition:!1,
container_close:!1,
parentClass:"",
container_mode:"absolute"
},s=wx.T,e=o("tpl/tooltips.html.js"),c="btn_disabled",p="hover",h="show",l=function(o){
if(this.options=o=$.extend(!0,{},i,o),this.$container=$(this.options.container),
this.$container&&0!=this.$container.length){
var t=this.$container.offset(),n=this.$container.height(),l=this.options.position.left||this.$container.data("x")||0,d=n+(this.options.position.top||this.$container.data("y")||0);
this.options.offset={
left:t.left+l,
top:t.top+d,
left_x:l,
top_y:d
},!o.content&&(o.content=this.$container.data("tips")||""),this.$dom=$(s(e,o)).appendTo("body"),
this.options.disabled&&this.$container.addClass(c);
var a=this,f=this.options.type===p||"click"===this.options.type?this.options.type:p;
if(f==p){
var r=null;
this.$container.hover(function(){
a.options.onshow&&"function"==typeof a.options.onshow?a.options.onshow.apply(a):!a.options.disabled&&a.show();
},function(){
r=window.setTimeout(function(){
a.hide();
},a.options.delay);
}),this.$dom.hover(function(){
r&&window.clearTimeout(r);
},function(){
a.hide();
});
}else this.$container.click(function(){
return a.options.disabled||a.options.onbeforeclick&&"function"==typeof a.options.onbeforeclick&&a.options.onbeforeclick.apply(a)===!1?void 0:(a.$dom.data(h)?a.options.onclose&&"function"==typeof a.options.onclose?a.options.onclose.apply(a):a.hide():a.options.onshow&&"function"==typeof a.options.onshow?a.options.onshow.apply(a):a.show(),
!1);
});
a.documentClickEvent=function(o){
a.$dom.find(o.target).length||(a.options.onclose&&"function"==typeof a.options.onclose?a.options.onclose.apply(a,[o]):a.hide());
},$(document).on("click",a.documentClickEvent),a.$dom.find(".js_popover_close").on("click",function(o){
return a.options.onclose&&"function"==typeof a.options.onclose?a.options.onclose.apply(a,[o]):a.hide(),
!1;
}),this.$dom.hide(),function(){
$.each(a.$dom.find(".js_btn"),function(o,t){
a.options.buttons[o].click&&$(t).on("click",function(){
a.options.buttons[o].click.apply(a);
});
});
}();
}
};
l.prototype={
constructor:l,
show:function(){
if(this.options.reposition){
var o=this.$container.offset(),t=o.left+this.options.offset.left_x,n=o.top+this.options.offset.top_y;
this.$dom.css({
left:t,
top:n
}).show();
}else this.$dom.show();
this.$dom.data(h,!0);
},
hide:function(){
this.$dom.hide(),this.$dom.data(h,!1);
},
enable:function(){
return this.options.disabled=!1,this.$container.removeClass(c),this;
},
disable:function(){
return this.options.disabled=!0,this.$container.addClass(c),this;
},
destroy:function(){
this.$dom.remove(),$(document).off("click",this.documentClickEvent);
},
changeContent:function(o){
this.$dom.find(".js_content").html(o);
}
},n.exports=l;
});define("register/mod/form_team.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","register/mod/mod_form_step4.js","register/mod/mod_file_upload.js","register/mod/mod_qrcheck.js","register/mod/mod_operator.js"],function(o,e,r){
"use strict";
function m(){
a=$(f("tpl_step4_team",p.getData())),c=a.find('input[name="name"]');
}
function t(){
$("#js_div_step4_form").html(a);
}
function i(){
c.on("keyup, blur",function(){
l.qrcheck.setContractorName(c.val(),c.valid());
});
}
function s(){
c.rules("add",{
required:!0,
rangelength:[2,30],
messages:{
required:"请填写团队名称"
}
});
}
function n(){
for(var o in l)l[o].init({
model:p,
mods:l,
form:a
});
l.fileUpload.initUpload();
}
function d(o){
p=o.model,_=$.extend(!1,_,o),u=!0,m(),t(),n(),i(),s();
}
var p,a,c,f=template.render,l=(o("common/wx/Cgi.js"),o("common/wx/Tips.js"),o("common/wx/popup.js"),
{
formStep4:o("register/mod/mod_form_step4.js"),
fileUpload:o("register/mod/mod_file_upload.js"),
qrcheck:o("register/mod/mod_qrcheck.js"),
operator:o("register/mod/mod_operator.js")
}),u=!1,_={};
r.exports={
init:d
};
});define("register/mod/form_other.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","register/mod/mod_form_step4.js","register/mod/mod_file_upload.js","register/mod/mod_qrcheck.js","register/mod/mod_operator.js","register/mod/mod_bank.js","register/mod/mod_onecentbank.js"],function(e,o,r){
"use strict";
function i(){
_=$(p("tpl_step4_other",a.getData())),c=_.find('input[name="name"]'),l=_.find('input[name="credential"]');
}
function n(){
$("#js_div_step4_form").html(_);
}
function t(){
c.on("keyup, blur",function(){
u.qrcheck.setContractorName(c.val(),c.valid());
}),""!=c.val()&&c.blur();
}
function m(){
c.rules("add",{
required:!0,
messages:{
required:"请填写组织名称"
}
}),l.rules("add",{
required:!0,
is_organization_code:!0,
messages:{
required:"请输入正确的组织机构代码",
is_organization_code:"必须为9位或18位代码"
}
});
}
function s(){
1==a.getData().is_remit_reg_gray?u.bank_old=null:u.bank=null;
for(var e in u)u[e]&&u[e].init({
model:a,
mods:u,
form:_
});
u.fileUpload.initUpload();
}
function d(e){
a=e.model,f=$.extend(!1,f,e),g=!0,i(),n(),s(),t(),m();
}
var a,_,c,l,p=template.render,u=(e("common/wx/Cgi.js"),e("common/wx/Tips.js"),e("common/wx/popup.js"),
{
formStep4:e("register/mod/mod_form_step4.js"),
fileUpload:e("register/mod/mod_file_upload.js"),
qrcheck:e("register/mod/mod_qrcheck.js"),
operator:e("register/mod/mod_operator.js"),
bank_old:e("register/mod/mod_bank.js"),
bank:e("register/mod/mod_onecentbank.js")
}),g=!1,f={};
r.exports={
init:d
};
});define("register/mod/form_gov.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","register/mod/mod_form_step4.js","register/mod/mod_file_upload.js","register/mod/mod_qrcheck.js","register/mod/mod_operator.js","register/mod/mod_bank.js","register/mod/mod_onecentbank.js"],function(o,e,r){
"use strict";
function m(){
_=$(l("tpl_step4_gov",a.getData())),c=_.find('input[name="name"]');
}
function t(){
$("#js_div_step4_form").html(_);
}
function n(){
c.on("keyup, blur",function(){
p.qrcheck.setContractorName(c.val(),c.valid());
}),""!=c.val()&&c.blur();
}
function s(){
c.rules("add",{
required:!0,
messages:{
required:"请填写政府名称"
}
});
}
function i(){
1==a.getData().is_remit_reg_gray?p.bank_old=null:p.bank=null;
for(var o in p)p[o]&&p[o].init({
model:a,
mods:p,
form:_
});
p.fileUpload.initUpload();
}
function d(o){
a=o.model,u=$.extend(!1,u,o),g=!0,m(),t(),i(),n(),s();
}
var a,_,c,l=template.render,p=(o("common/wx/Cgi.js"),o("common/wx/Tips.js"),o("common/wx/popup.js"),
{
formStep4:o("register/mod/mod_form_step4.js"),
fileUpload:o("register/mod/mod_file_upload.js"),
qrcheck:o("register/mod/mod_qrcheck.js"),
operator:o("register/mod/mod_operator.js"),
bank_old:o("register/mod/mod_bank.js"),
bank:o("register/mod/mod_onecentbank.js")
}),g=!1,u={};
r.exports={
init:d
};
});define("register/mod/form_media.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","register/mod/mod_form_step4.js","register/mod/mod_file_upload.js","register/mod/mod_qrcheck.js","register/mod/mod_operator.js","register/mod/mod_bank.js","register/mod/mod_onecentbank.js"],function(e,o,r){
"use strict";
function i(){
_=$(p("tpl_step4_media",a.getData())),c=_.find('input[name="name"]'),l=_.find('input[name="credential"]');
}
function m(){
$("#js_div_step4_form").html(_);
}
function n(){
c.on("keyup, blur",function(){
u.qrcheck.setContractorName(c.val(),c.valid());
}),""!=c.val()&&c.blur();
}
function d(){
c.rules("add",{
required:!0,
messages:{
required:"请填写组织名称"
}
}),l.rules("add",{
required:!0,
is_organization_code:!0,
messages:{
required:"请输入组织机构代码",
is_organization_code:"必须为9位或18位代码"
}
});
}
function s(){
1==a.getData().is_remit_reg_gray?u.bank_old=null:u.bank=null;
for(var e in u)u[e]&&u[e].init({
model:a,
mods:u,
form:_
});
u.fileUpload.initUpload();
}
function t(e){
a=e.model,f=$.extend(!1,f,e),g=!0,i(),m(),s(),n(),d();
}
var a,_,c,l,p=template.render,u=(e("common/wx/Cgi.js"),e("common/wx/Tips.js"),e("common/wx/popup.js"),
{
formStep4:e("register/mod/mod_form_step4.js"),
fileUpload:e("register/mod/mod_file_upload.js"),
qrcheck:e("register/mod/mod_qrcheck.js"),
operator:e("register/mod/mod_operator.js"),
bank_old:e("register/mod/mod_bank.js"),
bank:e("register/mod/mod_onecentbank.js")
}),g=!1,f={};
r.exports={
init:t
};
});define("register/mod/form_ent.js",["common/wx/Cgi.js","common/wx/Tips.js","biz_web/ui/checkbox.js","common/wx/popup.js","register/mod/mod_form_step4.js","register/mod/mod_onecentbank.js","register/mod/mod_bank.js","register/mod/mod_file_upload.js","register/mod/mod_legal_person.js","register/mod/mod_legal_qrcheck.js","register/mod/mod_qrcheck.js","register/mod/mod_operator.js"],function(e,r,o){
"use strict";
function i(){
l=$(p("tpl_step4_ent",m.getData())),_=l.find('input[name="name"]'),c=l.find('input[name="credential"]'),
u=l.find('input[name="registername"]'),g=l.find('input[name="is_individual"]');
}
function s(){
$("#js_div_step4_form").html(l);
}
function t(){
0==m.getData().is_overseas&&_.on("keyup, blur",function(){
f.qrcheck.setContractorName(_.val(),_.valid());
}),""!=_.val()&&_.blur(),4!=m.getData().service_type&&(g.checkbox({
type:"radio",
onChanged:function(e){
var r=1*e.val(),o=$("#js_txt_ent_type");
m.setData(function(e){
e.is_individual=r;
}),g.valid(),_.val()&&_.blur(),o.html(1==r?"个体工商户最多只能注册5个帐号":"企业包括：企业、分支机构、企业相关品牌等");
}
}),void 0!==m.getData().is_individual&&g.filter('[value="'+m.getData().is_individual+'"]').click());
}
function a(){
_.rules("add",{
required:!0,
messages:{
required:"请填写企业名称"
}
}),0==m.getData().is_overseas?c.rules("add",{
required:!0,
is_ent_code:!0,
messages:{
required:"请输入正确的营业执照注册号",
is_ent_code:$.validator.format("请输入正确的营业执照注册号或统一社会信用代码")
}
}):1==m.getData().is_overseas&&c.rules("add",{
required:!0,
messages:{
required:"请输入正确的营业执照注册号"
}
}),4!=m.getData().service_type&&g.rules("add",{
required:!0,
messages:{
required:"请选择企业类型"
}
});
}
function d(){
1==m.getData().is_overseas&&(f.qrcheck=null,f.legal_qrcheck=null,f.legal_person=null),
1==m.getData().is_remit_reg_gray?f.bank_old=null:f.bank=null;
for(var e in f)f[e]&&f[e].init({
model:m,
mods:f,
form:l
});
f.fileUpload.initUpload();
}
function n(e){
m=e.model,v=$.extend(!1,v,e),j=!0,i(),s(),d(),t(),a();
}
var m,l,_,c,u,g,p=template.render,f=(e("common/wx/Cgi.js"),e("common/wx/Tips.js"),
e("biz_web/ui/checkbox.js"),e("common/wx/popup.js"),{
formStep4:e("register/mod/mod_form_step4.js"),
bank:e("register/mod/mod_onecentbank.js"),
bank_old:e("register/mod/mod_bank.js"),
fileUpload:e("register/mod/mod_file_upload.js"),
legal_person:e("register/mod/mod_legal_person.js"),
legal_qrcheck:e("register/mod/mod_legal_qrcheck.js"),
qrcheck:e("register/mod/mod_qrcheck.js"),
operator:e("register/mod/mod_operator.js")
}),j=!1,v={};
o.exports={
init:n
};
});define("register/mod/form_person.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","register/mod/mod_form_step4.js","register/mod/mod_file_upload.js","register/mod/mod_qrcheck.js","register/mod/mod_operator.js"],function(o,e,r){
"use strict";
function m(){
c=$(l("tpl_step4_person",p.getData())),a=c.find('input[name="name"]'),f=c.find('input[name="credential"]');
}
function t(){
$("#js_div_step4_form").html(c);
}
function i(){
a.on("keyup, blur",function(){
u.qrcheck.setContractorName(a.val(),a.valid());
}),""!=a.val()&&a.blur();
}
function s(){
a.rules("add",{
required:!0,
messages:{
required:"请填写姓名"
}
});
}
function n(){
for(var o in u)u[o].init({
model:p,
mods:u,
form:c
});
u.fileUpload.initUpload();
}
function d(o){
p=o.model,j=$.extend(!1,j,o),_=!0,m(),t(),n(),i(),s();
}
var p,c,a,f,l=template.render,u=(o("common/wx/Cgi.js"),o("common/wx/Tips.js"),o("common/wx/popup.js"),
{
formStep4:o("register/mod/mod_form_step4.js"),
fileUpload:o("register/mod/mod_file_upload.js"),
qrcheck:o("register/mod/mod_qrcheck.js"),
operator:o("register/mod/mod_operator.js")
}),_=!1,j={};
r.exports={
init:d
};
});define("tpl/step.html.js",[],function(){
return'<ul class="weui-desktop-steps">\n    {each stepArr as item index}\n    <li class="weui-desktop-step {item.cls}">\n        {item.name}\n    </li>\n    {/each}\n</ul>\n';
});define("register/step5.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/tooltips.js","common/wx/inputCounter.js","common/wx/popup.js","common/wx/region.js","common/wx/upload.js","biz_web/utils/multiupload.js","biz_common/jquery.validate.js","biz_common/moment.js"],function(e,t,n){
"use strict";
function i(){
var e=h.serializeObject(),t={};
for(var n in e)t[n]=$.trim(e[n]);
return t;
}
function a(){
for(var e,t=[],n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),i=0;i<n.length;i++)e=n[i].split("="),
t.push(e[0]),t[e[0]]=e[1];
return t;
}
function r(e){
return a()[e];
}
function o(e){
function t(e,t){
var n={};
n[e.attr("name")]=t,v=h.validate(),setTimeout(function(){
v.showErrors(n);
},1);
}
var n=null;
if(e&&e.base_resp&&(n=e.base_resp.ret),-1==n)T.err("系统错误，请重试");else if(200002==n)T.err("参数错误，请重新输入");else if(200003==n)T.err("登陆超时，请重新登录");else if(210041==n)c(),
t(y,"帐号名称只允许含有中文、英文大小写、数字，长度为4-30个字符");else if(210042==n)t(q,"功能介绍长度应为4~120个字");else if(65201==n)c(),
t(y,"不能使用该名称注册");else if(65202==n)t(q,"不能含有虚假的、冒充、利用他人名义的、容易构成混淆、误认的、法律、法规和政策禁止的内容");else if(201e3==n)T.err("二维码身份验证失败，请返回上一步重新扫描二维码");else if(200013==n)c(),
t(y,"提交次数过于频繁，请稍后再试");else if(210050==n||210044==n)c(),t(y,"名称不能与已有公众帐号的微信号重复");else if(210046==n)c(),
t(y,"该名称在侵权投诉保护期，暂不支持申请，请重新提交一个新的名称");else if(211001==n)c(),4==g.getData().service_type?t(y,"名称与平台内已认证企业号重复。基于帐号名称唯一原则，请重新提交一个新名称。如果你认为已有名称侵犯了你的合法权益，可以申请找回。%s了解详情%s".sprintf('<a href="http://kf.qq.com/faq/120911VrYVrA160920URVrEn.html" target="_blank">',"</a>")):t(y,"名称与平台内已有名称重复。基于帐号名称唯一原则，请重新提交一个新名称。如果你认为已有名称侵犯了你的合法权益，可以进行%s侵权投诉%s。%s查看详情%s".sprintf('<a target="_blank" href="/acct/newinfringement?action=get_agreement&t=infringement/manual&type=1&lang=zh_CN&fescene=1&feregister=1&token='+(wx.cgiData.token||r("token"))+'">',"</a>",'<a href="http://kf.qq.com/faq/120911VrYVrA160331BzmE7z.html" target="_blank">',"</a>"));else if(65204==n)4!=g.getData().service_type&&l(e);else if(211003==n)c(),
t(y,"名称正在2天保护期中，暂不能申请使用；你可在保护期满后重新申请使用该名称");else if(260003==n)c(),t(y,"该名称与已有公众号名称重复，%s查看同名帐号%s。如果你认为已有名称侵犯了你的合法权益，可进行%s侵权投诉%s".sprintf("<a href='javascript:;' id='js_viewsameaccount'>","</a>",'<a target="_blank" href="/acct/newinfringement?action=get_agreement&t=infringement/manual&type=1&lang=zh_CN&fescene=1&feregister=1&token='+(wx.cgiData.token||r("token"))+'">',"</a>")),
setTimeout(function(){
var e=wx.cgiData.token||r("token");
$("#js_viewsameaccount").click(function(){
window.open("/acct/newinfringement?action=search_biz_list&search_type=1&feregister=1&complain_type=11&begin=0&nickname="+encodeURIComponent(y.val())+"&token="+e);
});
},100);else if(260007==n){
var i=y.val().replace("+","");
i==y.val()&&(i+="+"),c(),t(y,"公众号已有“%s”时，需与该帐号相同主体才可申请，%s查看同名帐号%s。如果你认为已有名称侵犯了你的合法权益，可进行%s侵权投诉%s".sprintf(i,"<a href='javascript:;' id='js_viewsameaccount'>","</a>",'<a target="_blank" href="/acct/infringementlogin?action=getkey&lang=zh_CN">',"</a>")),
setTimeout(function(){
var e=wx.cgiData.token||r("token");
$("#js_viewsameaccount").click(function(){
window.open("/acct/newinfringement?action=search_biz_list&search_type=1&feregister=1&complain_type=11&begin=0&nickname="+encodeURIComponent(i)+"&token="+e);
});
},100);
}else if(260008==n)c(),t(y,"该名称与已有小程序名称重复，需与该小程序帐号相同主体才可申请，%s查看同名帐号%s。如果你认为已有名称侵犯了你的合法权益，可进行%s侵权投诉%s".sprintf("<a href='javascript:;' id='js_viewsameaccount'>","</a>",'<a target="_blank" href="/acct/newinfringement?action=get_agreement&t=infringement/manual&type=1&lang=zh_CN&fescene=1&feregister=1&token='+(wx.cgiData.token||r("token"))+'">',"</a>")),
setTimeout(function(){
var e=wx.cgiData.token||r("token");
$("#js_viewsameaccount").click(function(){
window.open("/acct/newinfringement?action=search_biz_list&search_type=1&feregister=1&complain_type=11&begin=0&nickname="+encodeURIComponent(y.val())+"&token="+e);
});
},100);else if(260009==n)c(),t(y,"该名称与已有多个小程序名称重复，暂不支持申请，请重新提交一个新的名称，%s查看同名帐号%s。如果你认为已有名称侵犯了你的合法权益，可进行%s侵权投诉%s",sprintf("<a href='javascript:;' id='js_viewsameaccount'>","</a>",'<a target="_blank" href="/acct/newinfringement?action=get_agreement&t=infringement/manual&type=1&lang=zh_CN&fescene=1&feregister=1&token='+(wx.cgiData.token||r("token"))+'">',"</a>")),
setTimeout(function(){
var e=wx.cgiData.token||r("token");
$("#js_viewsameaccount").click(function(){
window.open("/acct/newinfringement?action=search_biz_list&search_type=1&feregister=1&complain_type=11&begin=0&nickname="+encodeURIComponent(y.val())+"&token="+e);
});
},100);else if(260010==n){
var i=y.val().replace("+","");
i==y.val()&&(i+="+"),c(),t(y,"小程序已有“%s”时，需与该帐号相同主体才可申请，%s查看同名帐号%s。如果你认为已有名称侵犯了你的合法权益，可进行%s侵权投诉%s".sprintf(i,"<a href='javascript:;' id='js_viewsameaccount'>","</a>",'<a target="_blank" href="/acct/infringementlogin?action=getkey&lang=zh_CN">',"</a>")),
setTimeout(function(){
var e=wx.cgiData.token||r("token");
$("#js_viewsameaccount").click(function(){
window.open("/acct/newinfringement?action=search_biz_list&search_type=1&feregister=1&complain_type=11&begin=0&nickname="+encodeURIComponent(i)+"&token="+e);
});
},100);
}else 211e3==n?T.err("扫码校验失败，需要返回上一步重新扫码"):210009==n?t(y,"该身份证注册数已达上限，请返回上一步使用另外一个身份证完成用户信息登记。<a href='https://kf.qq.com/faq/120911VrYVrA140428naUJVv.html' target='_blank'>查看详情</a>"):210010==n?t(y,"该手机号注册数已达上限，请返回上一步使用别的手机号进行用户信息登记。<a href='https://kf.qq.com/faq/120911VrYVrA140428naUJVv.html' target='_blank'>查看详情</a>"):210013==n?t(y,"该主体已达到注册上限，请返回上一步重新填写表单。<a href='https://kf.qq.com/faq/120911VrYVrA140428naUJVv.html' target='_blank'>查看详情</a>"):U.handleRet(e,{
id:"64430",
key:"6",
msg:"系统繁忙，请重试"
});
}
function s(){
var e=$("#js_div_invade_file"),t=$("#js_btn_invade_upload"),n=[];
for(var i in B)if(B[i].filename)n.push(B[i].filename);else for(var a=0;a<B[i].length;a++)n.push(B[i][a].filename);
n.length>0&&t.hide(),e.html(Y("tpl_step5_invade_file",{
list:n
})).show(),e.find(".js_btn_delete_invade").on("click",function(){
return B={},e.html("").hide(),t.show(),!1;
});
}
function c(){
b.hide(),B={};
}
function l(e){
v=h.validate(),v.errorsFor(y).remove(),b.show(),console.log("refresh invade file",e),
B={},b.html(Y("tpl_step5_invade",{
invade_file:B,
register_type:g.getData().register_type
})),1!=g.getData().register_type&&$("#js_btn_invade_upload").on("click",function(){
var t;
$("#tpl_step5_invade_upload").popup({
title:"上传证明材料",
width:800,
className:"upload_dialog_wrp",
data:{
invade_file:B,
other_file_wording:e.wording,
contractor_type:g.getData().contractor_type
},
buttons:[{
text:"确定",
type:"primary",
click:function(){
if(0==t.valid())return!1;
var e=this;
B={},e.get().find(".js_select_file").each(function(){
{
var e=$(this).data("file"),t=$(this).data("name");
1*$(this).data("multi");
}
e&&(B[t]=e);
}),e.get().find(".js_input_multiupload").each(function(){
$(this).val()&&(B[$(this).attr("name")]={
file:$(this).val(),
filename:$(this).data("filename")
});
}),console.log(B),s(),this.hide();
}
},{
text:"取消",
type:"default",
click:function(){
this.hide();
}
}],
onHide:function(){
this.remove();
},
onShow:function(){
t=this.get().find(".js_form"),t.validate({
ignore:"",
rules:{
id_card:{
required:!0
},
license:{
required:!0
}
},
messages:{
id_card:{
required:"请上传文件"
},
license:{
required:"请上传文件"
}
},
errorPlacement:function(e,t){
var n=t.parent().parent(),i=n.find(".upload_tips");
n.find(".fail").remove(),e.insertBefore(i);
}
}),this.get().find(".js_select_file").each(function(){
var e=$(this).parents(".js_div_upload"),t=$(this),n=e.find(".js_div_preview"),i=e.find(".js_input_invade_file"),a=1*t.data("multi")?!0:!1,r=!0;
R.uploadTmpFile({
container:$(this),
multi:a,
type:2,
accept:{
extensions:"bmp,jpeg,jpg,png,gif",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif"
},
canContinueUpload:function(){
var e=!0,n=t.data("file");
return a&&n&&n.length>=5?!1:(console.log("canContinueUpload",e),e);
},
onAllComplete:function(e,t){
console.log("onAllComplete",t),r=!0;
},
onComplete:function(o,s,c,l){
var f=l.content||"";
if(0==l.base_resp.ret){
var p=t.data("file");
t.html("重新上传"),i.val(f),e.find(".fail").remove(),r&&n.html(""),n.append("<p>"+c.name+"</p>"),
a?(p=p||[],r&&(p=[]),p.push({
filename:c.name,
file:f
})):p={
filename:c.name,
file:f
},t.data("file",p),r=!1,T.suc("上传成功");
}else T.err(1==l.base_resp.ret?"图片太大":-11==l.base_resp.ret?"请上传合法的图片格式":-34==l.base_resp.ret?"图片尺寸错误":"上传失败");
}
});
}),L.init({
container:$("#js_div_other_file"),
title:"补充材料",
desc:e.wording,
name:"naming_other_stuff_",
range:[1,5],
minUploadNum:0,
noPreview:!0,
files:[]
});
}
}).popup("resetPosition");
});
}
function f(e){
if(!z.hasClass("btn_loading")&&e.valid()){
var t=e.data("checktype");
U.post({
url:"/acct/registerpage",
data:{
action:"check",
type:t,
value:$.trim(e.val())
}
},function(n){
n&&0==n.base_resp.ret?(v=h.validate(),v.errorsFor(e).remove(),"1"==t&&c()):o(n);
});
}
}
function p(){
h=$("#js_form_step5"),w=$("#js_txt_account"),k=$("#js_txt_intro"),j=h.find("#js_div_location"),
b=h.find("#js_div_invade"),y=h.find('input[name="nick_name"]'),q=h.find('textarea[name="intro"]'),
D=h.find('input[name="country"]'),x=h.find('input[name="province"]'),C=h.find('input[name="city"]'),
z=$("#js_btn_submit"),V=$("#js_btn_back"),P=[4,30],4==g.getData().service_type&&(P=[3,20]);
}
function m(){
4!=g.getData().service_type&&new N({
container:"#js_div_location",
data:{
country:"国家",
province:"省份",
city:"城市"
},
onChange:function(e,t,n){
$("#js_input_"+e).val(n),$("#js_input_"+e).valid(),"country"==e?(x.val(""),C.val("")):"province"==e&&C.val("");
}
});
}
function u(){
y.on("blur",function(){
var e=$(this).val();
""===e?E=e:E!=e&&(f($(this)),E=e);
}),y.on("keyup",function(){
w.html($(this).val());
}),new A(y,{
maxLength:P[1],
showCounter:!0,
useGBKLength:!0
}),q.on("blur",function(){
var e=$(this).val();
""===e?F=e:F!=e&&(f($(this)),F=e);
}),q.on("keyup",function(){
k.html($(this).val());
}),new A(q,{
maxLength:120,
showCounter:!0
}),V.on("click",function(e){
return e.preventDefault(),window.location.href="/acct/contractorpage?action=showreg&step=3&lang="+window.wx.data.lang,
!1;
}),z.on("click",function(e){
return e.preventDefault(),$(this).hasClass("btn_loading")?!1:(h.submit(),!1);
}),h.on("submit",function(e){
if(e.preventDefault(),0==h.valid())return!1;
z.btn(!1);
var t=i();
t.invade_check=0;
for(var n in B){
if(B[n].file)t[n]=B[n].file;else{
t[n]=[];
for(var a=0;a<B[n].length;a++)t[n].push(B[n][a].file);
}
t.invade_check=1;
}
return console.log(t),U.post({
url:"/acct/registerpage",
data:t,
complete:function(){
z.btn(!0);
}
},function(e){
var n=e.redirect_url;
if(z.btn(!0),e&&0==e.base_resp.ret)if(4==g.getData().service_type)window.location=n;else{
g.setData(function(i){
i.url=n,i.token=e.token,i.account=t.account,i.checkStartDate=I().format("YYYY年MM月DD日"),
i.checkOverDate=I().add("d",9).format("YYYY年MM月DD日"),i.invade_type=e.invade_type;
});
var i="#tpl_step5_submit_normal";
4==g.getData().service_type?i="#tpl_step5_submit_enterprise":0==g.getData().contractor_type&&(i="#tpl_step5_submit_person");
var a="前往微信公众平台";
1==g.getData().register_type?a="微信认证":2==g.getData().register_type&&0!=g.getData().contractor_type&&(a="前往获取打款信息"),
$(i).popup({
title:"提示",
data:g.getData(),
buttons:[{
text:a,
type:"primary",
click:function(){
location.href=n;
}
}],
onHide:function(){
location.href=n;
},
onShow:function(){}
});
}else o(e);
}),!1;
});
}
function _(){
v=h.validate({
ignore:"",
rules:{
nick_name:{
required:!0,
rangelen:P
},
intro:{
required:!0,
rangelength:[4,120]
},
country:{
required:!0
},
province:{
required:{
depends:function(){
var e=j.find(".dropdown_menu");
return e.length>1&&e.eq(1).find(".jsDropdownList li").length>0&&e.eq(1).is(":visible");
}
}
},
city:{
required:{
depends:function(){
var e=j.find(".dropdown_menu");
return e.length>2&&e.eq(1).find(".jsDropdownList li").length>0&&e.eq(1).is(":visible")&&e.eq(2).find(".jsDropdownList li").length>0&&e.eq(2).is(":visible");
}
}
}
},
messages:{
nick_name:{
required:"请填写名称",
rangelen:$.validator.format("名称为{0}到{1}个字符")
},
intro:{
required:"请填写功能介绍",
rangelength:$.validator.format("功能介绍为{0}到{1}个字")
},
country:{
required:"请选择国家"
},
province:{
required:"请选择省份"
},
city:{
required:"请选择城市"
}
},
errorPlacement:function(e,t){
var n=t.parent().parent(),i=t.parent();
n.find(".fail").remove(),e.insertAfter(i),"nick_name"==t.attr("name")&&c();
}
});
}
function d(e){
M||(g=e.model,M=!0,p(),m(),u(),_());
}
var g,v,h,w,k,j,b,y,q,D,x,C,z,V,Y=template.render,U=e("common/wx/Cgi.js"),T=e("common/wx/Tips.js"),A=(e("common/wx/tooltips.js"),
e("common/wx/inputCounter.js")),N=(e("common/wx/popup.js"),e("common/wx/region.js")),R=e("common/wx/upload.js"),L=e("biz_web/utils/multiupload.js"),I=(e("biz_common/jquery.validate.js"),
e("biz_common/moment.js")),M=!1,P=[4,30],B={},E="",F="";
n.exports={
init:d
};
});define("register/step4.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","biz_common/jquery.validate.js","register/mod/form_person.js","register/mod/form_ent.js","register/mod/form_media.js","register/mod/form_gov.js","register/mod/form_other.js","register/mod/form_team.js"],function(t,e,o){
"use strict";
function r(){
d=$("#js_div_step4_head"),c=$("#js_form_step4"),m=$("#js_div_fakebtn"),_.setData(function(t){
t.fileUrls=h;
});
}
function s(){
1==_.getData().refill&&"1"!=_.getData().no_reason&&d.append(p("tpl_step4_head_refill",_.getData())),
d.append(4==_.getData().service_type?p("tpl_step4_head_firm",_.getData()):p("tpl_step4_head_normal",_.getData()));
}
function i(){
$(".js_btn_contractor_type").on("click",function(t){
if(t.preventDefault(),$(this).hasClass("selected"))return!1;
if($(this).hasClass("btn_disabled"))return!1;
if($(".js_btn_contractor_type").filter(".selected").length>0){
var e=confirm("查看其他类别页面将会清空本类别已经填写的内容和上传的资料，是否继续？");
if(!e)return!1;
}
$(".js_btn_contractor_type").removeClass("selected"),$(this).addClass("selected");
var o=1*$(this).data("type");
$(".js_form_tips").hide(),$(".js_form_tips_"+o).show(),$("#js_err_contractor_type").hide(),
_.setData(function(t){
t.contractor_type=o;
}),f[o].init({
model:_
}),m.hide();
}),1==_.getData().is_overseas&&($('.js_btn_contractor_type[form="entreg"]').click(),
$(".js_form_tips_1").hide()),1==_.getData().refill&&4!=_.getData().service_type&&1!=_.getData().is_old&&$(".js_btn_contractor_type").each(function(){
var t=$(this).data("type");
t==_.getData().contractor_type&&$(this).click(),$(this).disable();
}),$("#div_register").on("click",".js_btn_prev",function(t){
return t.preventDefault(),window.location.href=1==_.getData().is_overseas?"/acct/contractorpage?action=showsubmit&step=3&lang="+window.wx.data.lang:"/acct/contractorpage?action=showreg&step=3&lang="+window.wx.data.lang,
!1;
});
}
function n(){}
function a(t){
g||(_=t.model,g=!0,r(),s(),i(),n());
}
var _,d,c,m,p=template.render,g=(t("common/wx/Cgi.js"),t("common/wx/Tips.js"),t("common/wx/popup.js"),
t("biz_common/jquery.validate.js"),!1),f={
0:t("register/mod/form_person.js"),
1:t("register/mod/form_ent.js"),
2:t("register/mod/form_media.js"),
3:t("register/mod/form_gov.js"),
4:t("register/mod/form_other.js"),
5:t("register/mod/form_team.js")
},h={
govInfoRegister:"/mpres/zh_CN/htmledition/doc/xxdjb_zheng_fu-.doc",
govAuthority:"/mpres/zh_CN/htmledition/doc/xxdjb_shou_quan_yun_ying-.doc",
mediaInfoRegister:"/mpres/zh_CN/htmledition/doc/xxdjb_mei_ti-.doc",
mediaAuthority:"/mpres/zh_CN/htmledition/doc/xxdjb_shou_quan_yun_ying-.doc",
entAuthority:"/mpres/zh_CN/htmledition/doc/xxdjb_shou_quan_yun_ying-.doc",
otherAuthority:"/mpres/zh_CN/htmledition/doc/xxdjb_shou_quan_yun_ying-.doc"
};
o.exports={
init:a
};
});define("register/step3.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","common/wx/dialog.js"],function(t,e,o){
"use strict";
function n(t){
var e,o=$("#tpl_popup_service_type").popup({
data:{
service_type:t
},
buttons:[{
text:"确定",
type:"primary",
click:function(){
var o=this;
return e.hasClass("btn_loading")?!1:(e.btn(!1),void r.post({
url:"/acct/registerpage",
data:{
action:"savetype",
type:t
}
},function(n){
n&&0==n.base_resp.ret?(c.setData(function(e){
e.service_type=t;
}),c.setStep(4)):(r.handleRet(n,{
id:"64430",
key:"3",
msg:"系统错误，请重试"
}),e.btn(!0)),o.remove();
}));
}
},{
text:"取消",
type:"default",
click:function(){
this.remove();
}
}],
mask:!0,
onHide:function(){
this.remove();
},
onShow:function(){
var t=this.get();
e=t.find(".js_btn_p").eq(0);
}
});
o.popup("resetPosition");
}
function i(){}
function s(){}
function p(){
$(".js_btn_service_type").on("click",function(t){
var e=$(this).data("type"),o=t&&(t.srcElement||t.target);
"A"!=o.nodeName&&(0==c.getData().is_overseas?4==e?window.location.href="https://work.weixin.qq.com/wework_admin/register_wx?from=wxmp_register_step3":n(e):r.post({
url:"/acct/registerpage",
data:{
action:"savetype",
type:e
}
},function(t){
t&&0==t.base_resp.ret?(c.setData(function(t){
t.service_type=e;
}),c.setStep(4)):r.handleRet(t,{
id:"64430",
key:"3",
msg:"系统错误，请重试"
});
}));
});
}
function a(t){
m||(c=t.model,m=!0,i(),s(),p());
}
var c,r=t("common/wx/Cgi.js"),m=(t("common/wx/Tips.js"),t("common/wx/popup.js"),
t("common/wx/dialog.js"),!1);
o.exports={
init:a
};
});define("register/model.js",[],function(t,n,e){
"use strict";
function a(t){
t&&t.call(this,c),f.onDataChange&&f.onDataChange.call(this,c);
}
function i(){
return c;
}
function o(t){
c.step=t,f.onStepChange&&f.onStepChange.call(this,t,c);
}
function s(t){
f=$.extend(!0,f,t),f.data&&(c=$.extend(!0,c,t.data),f.data=void 0);
}
var c={
step:3,
refill:"false"
},f={
onDataChange:function(){},
onStepChange:function(){}
};
e.exports={
init:s,
setStep:o,
setData:a,
getData:i
};
});