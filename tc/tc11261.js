document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("	<head>");
document.writeln("		<meta charset=\'utf-8\' />");
document.writeln("		<meta http-equiv=\'X-UA-Compatible\' content=\'IE=edge\'>");
document.writeln("		<meta name=\'viewport\' content=\'width=device-width, initial-scale=1\'>");
document.writeln("		<title>弹窗公告</title>");
document.writeln("		<link rel=\'stylesheet\' href=\'https://cdn.jsdelivr.net/gh/fb999999/hdp/tc//tc.css\' />");
document.writeln("");
document.writeln("	<meta http-equiv=\'Content-Type\' content=\'text/html; charset=utf-8\'></head>");
document.writeln("	<body>");
document.writeln("		<div class=\'layer\'></div>");
document.writeln("		<div id=\'globalAd\'>");
document.writeln("			<div id=\'content\'>");
document.writeln("				<p style=\'font-size: 24px;font-weight: bold;\'><span style=\'color:#f30;\'>网站公告</span></p>");
document.writeln("				<p style=\'color: #0e21ff;\'>安卓用户请使用《夸克》或《UC》浏览器进行访问！请不要使用QQ浏览器，因为QQ浏览器已对本站进行拦截屏蔽。</p>");
document.writeln("				<p><span style=\'color:#f30;\'>最新域名如下</span></p>");
document.writeln("				");
document.writeln("				<p>地址1：0855nb.com <span style=\'color:#f30;\'>不支持移动网络</span></p><p>地址2：085501.com<span style=\'color:#f30;\'> 支持全网　　　</span></p>");
document.writeln("				<p>发布页：0855fb.com</p>");
document.writeln("				<p><a href=\'https://cdn.jsdelivr.net/gh/fb999999/app/0855v1.2.1.apk\'><span style=\'color:#f30;\'>安卓用户可点此下载APP，防止失联。</span></a></p>");
document.writeln("				<a onclick=\'closeGlobalAd();\' class=\'btn btn-default\' rel=\'nofollow\'>朕已阅</a>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("");
document.writeln("		<script>");
document.writeln("			jQuery.cookie = function(name, value, options) {");
document.writeln("				if(typeof value != \'undefined\') {");
document.writeln("					options = options || {};");
document.writeln("					if(value === null) {");
document.writeln("						value = \'\';");
document.writeln("						options.expires = -1;");
document.writeln("					}");
document.writeln("					var expires = \'\';");
document.writeln("					if(options.expires && (typeof options.expires == \'number\' || options.expires.toUTCString)) {");
document.writeln("						var date;");
document.writeln("						if(typeof options.expires == \'number\') {");
document.writeln("							date = new Date();");
document.writeln("							var totalTime = 24 * 3600;");
document.writeln("							var hour = date.getHours();");
document.writeln("							var minutes = date.getMinutes();");
document.writeln("							var seconds = date.getSeconds();");
document.writeln("							var pastTime = 3600 * hour + 60 * minutes + seconds;");
document.writeln("							var leftTime = totalTime - pastTime;");
document.writeln("							date.setTime(date.getTime() + (options.expires * leftTime * 1000));");
document.writeln("						} else {");
document.writeln("							date = options.expires;");
document.writeln("						}");
document.writeln("						expires = \'; expires=\' + date.toUTCString();");
document.writeln("					}");
document.writeln("					var path = options.path ? \'; path=\' + (options.path) : \'\';");
document.writeln("					var domain = options.domain ? \'; domain=\' + (options.domain) : \'\';");
document.writeln("					var secure = options.secure ? \'; secure\' : \'\';");
document.writeln("					document.cookie = [name, \'=\', encodeURIComponent(value), expires, path, domain, secure].join(\'\');");
document.writeln("				} else {");
document.writeln("					var cookieValue = null;");
document.writeln("					if(document.cookie && document.cookie != \'\') {");
document.writeln("						var cookies = document.cookie.split(\';\');");
document.writeln("						for(var i = 0; i < cookies.length; i++) {");
document.writeln("							var cookie = jQuery.trim(cookies[i]);");
document.writeln("							if(cookie.substring(0, name.length + 1) == (name + \'=\')) {");
document.writeln("								cookieValue = decodeURIComponent(cookie.substring(name.length + 1));");
document.writeln("								break;");
document.writeln("							}");
document.writeln("						}");
document.writeln("					}");
document.writeln("					return cookieValue;");
document.writeln("				}");
document.writeln("			};");
document.writeln("			$(function() {");
document.writeln("				var COOKIE_NAME = \'erdangjiade\';");
document.writeln("				if($.cookie(COOKIE_NAME)) {");
document.writeln("					$(\'.layer\').hide();");
document.writeln("					$(\'#globalAd\').hide();");
document.writeln("				} else {");
document.writeln("					var erdangjiadeH = $(window).height();");
document.writeln("					var erdangjiadeW = $(window).width();");
document.writeln("					$(\'.layer\').show();");
document.writeln("					$(\'#globalAd\').css({");
document.writeln("						\'top\': erdangjiadeH / 2 - $(\'#globalAd\').height() / 2,");
document.writeln("						\'left\': erdangjiadeW / 2 - $(\'#globalAd\').width() / 2");
document.writeln("					});");
document.writeln("					$(\'#globalAd\').slideDown(300, function() {");
document.writeln("						setTimeout(\'closeGloableAd()\', \'300000\');");
document.writeln("					});");
document.writeln("					$.cookie(COOKIE_NAME, \'erdangjiade\', {");
document.writeln("						path: \'/\',");
document.writeln("						expires: 1");
document.writeln("					});");
document.writeln("				}");
document.writeln("			});");
document.writeln("");
document.writeln("			function closeGlobalAd() {");
document.writeln("				$(\'#globalAd\').hide();");
document.writeln("				$(\'.layer\').hide();");
document.writeln("");
document.writeln("			}");
document.writeln("");
document.writeln("			function redirectUrlToActive() {");
document.writeln("				$(\'#globalAd\').hide();");
document.writeln("				$(\'.layer\').hide();");
document.writeln("			}");
document.writeln("		</script>");
document.writeln("	</body>");
document.writeln("</html>");