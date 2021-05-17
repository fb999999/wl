var browser = {
versions: function () {
var u = navigator.userAgent, app = navigator.appVersion;
return { //移动终端浏览器版本信息 
ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
iPad: u.indexOf('iPad') > -1, //是否iPad 
};
}(),
}
if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
document.writeln("<div class='visible-xs' style='padding:0 20px 10px;'><a class='btn btn-block btn-lg btn-primary' href='https://0855fb.com/jc.html'>iPhone用户可以把本站添加到主屏</a></div>");

}
if (browser.versions.android) {
    document.writeln("<div class='visible-xs' style='padding:0 20px 10px;'><a class='btn btn-block btn-lg btn-primary' href='https://0855app.com'>安装0855影视APP,看片更方便！</a></div>");
}