$(function(){!function(){var s=($(".area"),$(".area .head")),n=s.find("span"),o=$(".area .body"),i=o.find("a");s.hover(function(){s.addClass("on"),o.addClass("on")},function(){s.removeClass("on"),o.removeClass("on")}),o.hover(function(){$(this).addClass("on")},function(){$(this).removeClass("on")}),i.click(function(s){s.preventDefault();var i=$(this).text();n.html(i),o.removeClass("on")});var a=$(".service, .company, .my").find(">a"),e=a.siblings("ul");console.log(a),a.hover(function(){$(this).addClass("on").siblings("ul").addClass("on"),console.log("on")},function(){$(this).removeClass("on").siblings("ul").removeClass("on")}),e.hover(function(){$(this).addClass("on").siblings("a").addClass("on")},function(){$(this).removeClass("on").siblings("a").removeClass("on")}),$(".phone>a").hover(function(){$(this).parent().addClass("on").find(">div").addClass("on")},function(){$(this).parent().removeClass("on").find(">div").removeClass("on")}),$(".phone>div").hover(function(){$(this).addClass("on").parent().addClass("on")},function(){$(this).removeClass("on").parent().removeClass("on")})}(),function(){var s=$(".search .select"),n=$(".search .select>span"),o=$(".search .select ul"),i=o.find("li");s.hover(function(){o.addClass("on")},function(){o.removeClass("on")}),i.hover(function(){$(this).addClass("on")},function(){$(this).removeClass("on")}).click(function(s){s.preventDefault();var i=$(this).text();n.html(i),o.removeClass("on")})}(),$(".cat, .order").hover(function(){$(this).addClass("on")},function(){$(this).removeClass("on")}),$(".section-one-main .play-pics li").tabshow(".section-one-main .play-pics .pic",{autoplay:!0,interval:3e3}),$(".section-one-main .books").slider({width:750,height:540}),$(".yushou .sidebar-book").slider({width:238,height:120}),$(".section-one-sidebar .sidebar-with-list .nav li").tabshow(".section-one-sidebar .sidebar-with-list .list"),function(){var s=538;$(".guess-foot-sidebar").outerHeight(s),$("#huanyipi").click(function(s){s.preventDefault(),$(".guess-foot-main >div").toggleClass("current")})}(),$(".sidebar-with-list .list li").mouseover(function(s){$(this).addClass("on").siblings().removeClass("on")}),$(".dd-tegong-main .head li").tabshow(".dd-tegong-main .books"),$(".dd-tegong .sidebar-with-list .nav li").tabshow(".dd-tegong .sidebar-with-list .list"),$(".zhubian-suggest-main .head li").tabshow(".zhubian-suggest-main .books"),$(".author-main-head li").tabshow(".author-main-body > div"),$(".reader-suggest-main-head li").tabshow(".reader-suggest-main-body > div"),$.each([".haoping",".guanzhu",".shoucang"],function(s,n){$(".reader-suggest-main-body "+n+" .books").slider({width:950,height:289})}),function(){function s(){if(!d.is(":animated")){var i=parseFloat(d.css("top"));0==i&&d.animate({top:-o},"slow"),i==-o&&d.animate({top:0},"slow"),n=setTimeout(s,l)}}var n,o=180,i=1200,a="<div class='jump'><div class='jump-list'></div></div>",e={width:i,height:o,position:"relative",overflow:"hidden"},t=$(".parteners .cats"),l=7e3;t.wrapAll(a);var r=$(".parteners .jump"),d=r.find(".jump-list");r.css(e),d.css({position:"absolute",top:0,left:0}),s(),t.hover(function(){clearTimeout(n)},function(){s()})}(),function(){function s(){i.css("display","none")}function n(){i.css("display","block")}var o=200,i=$(".backtop .back"),a=$(window);s(),a.on("scroll",function(i){var a=$(this).scrollTop();a>=o&&n(),o>a&&s()}),i.click(function(s){s.preventDefault(),a.scrollTop(0)})}()});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJoZWFkIiwiaGVhZFNwYW4iLCJmaW5kIiwiYm9keSIsIml0ZW1zIiwiaG92ZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidGhpcyIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJodG1sIiwiaGVhZHMiLCJsaXN0cyIsInNpYmxpbmdzIiwiY29uc29sZSIsImxvZyIsInBhcmVudCIsInNlbGVjdCIsImxpc3QiLCJ0YWJzaG93IiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsInNsaWRlciIsIndpZHRoIiwiaGVpZ2h0IiwibWFpbkhlaWdodCIsIm91dGVySGVpZ2h0IiwidG9nZ2xlQ2xhc3MiLCJtb3VzZW92ZXIiLCJlYWNoIiwiaW5kZXgiLCJ2YWwiLCJzY3JvbGwiLCJqdW1wTGlzdCIsImlzIiwib2xkVG9wIiwicGFyc2VGbG9hdCIsImNzcyIsImFuaW1hdGUiLCJ0b3AiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJvdXRlciIsIm91dGVyU3R5bGUiLCJwb3NpdGlvbiIsIm92ZXJmbG93Iiwid3JhcEFsbCIsImp1bXAiLCJsZWZ0IiwiY2xlYXJUaW1lb3V0IiwiaGlkZUJhY2siLCJiYWNrIiwic2hvd0JhY2siLCJoZWlnaHRXaGVuU2hvdyIsIndpbiIsIndpbmRvdyIsIm9uIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRSxZQUVFLFdBQ0ksR0FDSUMsSUFET0QsRUFBRSxTQUNGQSxFQUFFLGdCQUNURSxFQUFXRCxFQUFLRSxLQUFLLFFBQ3JCQyxFQUFPSixFQUFFLGVBQ1RLLEVBQVFELEVBQUtELEtBQUssSUFFdEJGLEdBQUtLLE1BQU0sV0FDUEwsRUFBS00sU0FBUyxNQUNkSCxFQUFLRyxTQUFTLE9BQ2YsV0FDQ04sRUFBS08sWUFBWSxNQUNqQkosRUFBS0ksWUFBWSxRQUVyQkosRUFBS0UsTUFBTSxXQUNQTixFQUFFUyxNQUFNRixTQUFTLE9BQ2xCLFdBQ0NQLEVB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V1gsR0FDWFMsRUFBU0ssU0FBVUMsSUFBSyxHQUFLLFFBRWpDQyxFQUFRQyxXQUFXVCxFQUFRWCxJQWxDL0IsR0FZSW1CLEdBWkFoQixFQUFTLElBQ1RELEVBQVEsS0FDUm1CLEVBQVEsd0RBQ1JDLEdBQ0lwQixNQUFPQSxFQUNQQyxPQUFRQSxFQUNSb0IsU0FBVSxXQUNWQyxTQUFVLFVBRWQ1QyxFQUFRTCxFQUFFLG9CQUVWeUIsRUFBVyxHQUVmcEIsR0FBTTZDLFFBQVFKLEVBQ2QsSUFBSUssR0FBT25ELEVBQUUsb0JBQ1RxQyxFQUFXYyxFQUFLaEQsS0FBSyxhQUN6QmdELEdBQUtWLElBQUlNLEdBQ1RWLEVBQVNJLEtBQ0xPLFNBQVUsV0FDVkwsSUFBSyxFQUNMUyxLQUFNLElBaUJWaEIsSUFDQS9CLEVBQU1DLE1BQU0sV0FDUitDLGFBQWFULElBQ2QsV0FDQ1IsU0FPUixXQU9JLFFBQVNrQixLQUNMQyxFQUFLZCxJQUFJLFVBQVcsUUFHeEIsUUFBU2UsS0FDTEQsRUFBS2QsSUFBSSxVQUFXLFNBVnhCLEdBQUlnQixHQUFpQixJQUVqQkYsRUFBT3ZELEVBQUUsa0JBQ1QwRCxFQUFNMUQsRUFBRTJELE9BU1pMLEtBRUFJLEVBQUlFLEdBQUcsU0FBVSxTQUFTakQsR0FDdEIsR0FBSWtELEdBQVk3RCxFQUFFUyxNQUFNb0QsV0FHcEJBLElBQWFKLEdBQWdCRCxJQUNqQkMsRUFBWkksR0FBNEJQLE1BR3BDQyxFQUFLN0MsTUFBTSxTQUFTQyxHQUVoQkEsRUFBTUMsaUJBQ044QyxFQUFJRyxVQUFVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcbiAgICAvLyDpobbpg6jlt6XlhbfmoI/mlLnlj5jmoLflvI9cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmVhID0gJChcIi5hcmVhXCIpLFxuICAgICAgICAgICAgaGVhZCA9ICQoXCIuYXJlYSAuaGVhZFwiKSxcbiAgICAgICAgICAgIGhlYWRTcGFuID0gaGVhZC5maW5kKFwic3BhblwiKSxcbiAgICAgICAgICAgIGJvZHkgPSAkKFwiLmFyZWEgLmJvZHlcIiksXG4gICAgICAgICAgICBpdGVtcyA9IGJvZHkuZmluZChcImFcIik7XG4gICAgICAgIC8vIOmAgei0p+WMuuWfn1xuICAgICAgICBoZWFkLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaGVhZC5hZGRDbGFzcygnb24nKTtcbiAgICAgICAgICAgIGJvZHkuYWRkQ2xhc3MoJ29uJylcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBoZWFkLnJlbW92ZUNsYXNzKCdvbicpO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDbGFzcygnb24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJvZHkuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwib25cIik7XG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm9uXCIpXG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtcy5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgICBoZWFkU3Bhbi5odG1sKHRleHQpO1xuICAgICAgICAgICAgYm9keS5yZW1vdmVDbGFzcygnb24nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLy8g5ZCO6Z2i55qE5bel5YW35qCP55uuXG4gICAgICAgIHZhciBoZWFkcyA9ICQoXCIuc2VydmljZSwgLmNvbXBhbnksIC5teVwiKS5maW5kKFwiPmFcIiksXG4gICAgICAgICAgICBsaXN0cyA9IGhlYWRzLnNpYmxpbmdzKCd1bCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhoZWFkcylcblxuICAgICAgICBoZWFkcy5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJvblwiKS5zaWJsaW5ncygndWwnKS5hZGRDbGFzcyhcIm9uXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uXCIpXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm9uXCIpLnNpYmxpbmdzKCd1bCcpLnJlbW92ZUNsYXNzKFwib25cIilcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3RzLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm9uXCIpLnNpYmxpbmdzKCdhJykuYWRkQ2xhc3MoXCJvblwiKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwib25cIikuc2libGluZ3MoJ2EnKS5yZW1vdmVDbGFzcyhcIm9uXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDmiYvmnLrlvZPlvZNcbiAgICAgICAgJChcIi5waG9uZT5hXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm9uXCIpLmZpbmQoXCI+ZGl2XCIpLmFkZENsYXNzKFwib25cIilcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwib25cIikuZmluZChcIj5kaXZcIikucmVtb3ZlQ2xhc3MoXCJvblwiKVxuICAgICAgICB9KTtcbiAgICAgICAgJChcIi5waG9uZT5kaXZcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwib25cIikucGFyZW50KCkuYWRkQ2xhc3MoXCJvblwiKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwib25cIikucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJvblwiKVxuICAgICAgICB9KTtcblxuICAgIH0pKCk7XG5cbiAgICAvLyDmkJzntKLmoYbngrnlh7vmlLnlj5jmoLflvI/lkoxodG1sXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZWN0ID0gJChcIi5zZWFyY2ggLnNlbGVjdFwiKSxcbiAgICAgICAgICAgIGhlYWQgPSAkKFwiLnNlYXJjaCAuc2VsZWN0PnNwYW5cIiksXG4gICAgICAgICAgICBsaXN0ID0gJChcIi5zZWFyY2ggLnNlbGVjdCB1bFwiKSxcbiAgICAgICAgICAgIGl0ZW1zID0gbGlzdC5maW5kKFwibGlcIik7XG4gICAgICAgIC8vIOaYr+WQpuWHuueOsOWIl+ihqFxuICAgICAgICBzZWxlY3QuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsaXN0LmFkZENsYXNzKFwib25cIilcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKFwib25cIilcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOabtOaUueWIl+ihqOmhueebruagt+W8j1xuICAgICAgICBpdGVtcy5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvbicpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRleHQpO1xuICAgICAgICAgICAgICAgIGhlYWQuaHRtbCh0ZXh0KTtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdvbicpXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgfSkoKTtcbiAgICAvLyDotK3nianovablkozorqLljZXpvKDmoIfmgqzmta7ml7bmm7TmlLnnsbss5Lul5pS55Y+Y5qC35byPXG4gICAgJChcIi5jYXQsIC5vcmRlclwiKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm9uXCIpO1xuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICAgfSk7XG4gICAgLy8g5pyA5LiK5pa554Sm54K55Zu+LOiHquWKqOaSreaUvlxuICAgICQoXCIuc2VjdGlvbi1vbmUtbWFpbiAucGxheS1waWNzIGxpXCIpXG4gICAgICAgIC50YWJzaG93KFwiLnNlY3Rpb24tb25lLW1haW4gLnBsYXktcGljcyAucGljXCIsIHsgYXV0b3BsYXk6IHRydWUsIGludGVydmFsOiAzMDAwIH0pO1xuICAgIC8vIOaWsOS5puS4iuaetuaXoOe8nea7muWKqFxuICAgICQoXCIuc2VjdGlvbi1vbmUtbWFpbiAuYm9va3NcIikuc2xpZGVyKHsgd2lkdGg6IDc1MCwgaGVpZ2h0OiA1NDAgfSk7XG4gICAgLy8g5paw5Lmm6aKE5ZSu5peg57yd5rua5YqoXG4gICAgJChcIi55dXNob3UgLnNpZGViYXItYm9va1wiKS5zbGlkZXIoeyB3aWR0aDogMjM4LCBoZWlnaHQ6IDEyMCB9KTtcblxuICAgIC8vIOihjOS5pueDreWNluamnOm8oOagh+aCrOa1rizmlLnlj5jmmL7npLrlhoXlrrlcbiAgICAkKFwiLnNlY3Rpb24tb25lLXNpZGViYXIgLnNpZGViYXItd2l0aC1saXN0IC5uYXYgbGlcIilcbiAgICAgICAgLnRhYnNob3coXCIuc2VjdGlvbi1vbmUtc2lkZWJhciAuc2lkZWJhci13aXRoLWxpc3QgLmxpc3RcIik7XG4gICAgLy8g54yc5L2g5Zac5qyiISEhISEhISEhISEhISEhISEhISEhXG4gICAgLy8gMS7kvb/kvqfovrnmoI/pq5jluqbkuI7lsZXnpLrljLrpq5jluqbkuIDoh7RcbiAgICAvLyAyLueCueWHu1wi5o2i5LiA5om5XCIs5pu05o2i5bGV56S65YaF5a65XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDlsIbkvqfovrnmoI/pq5jluqborr7nva7kuLrkuI7kuLvkvZPpg6jliIbnm7jlkIxcbiAgICAgICAgLy8g5Li65ZWl5a2Q5q+P5qyh6I635Y+W55qE6auY5bqm6YO95LiN5LiA5qC3LOaYr+WbvueJh+WKoOi9veayoeWujOaIkCzkuI3ov4fnlKjkuoYkKGRvY3VtZW50KS5yZWFkeeWVij8/Pz8/Pz8/Pz8/Pz8/P1xuICAgICAgICAvLyB2YXIgbWFpbkhlaWdodCA9ICQoXCIuZ3Vlc3MtZm9vdC1tYWluXCIpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1haW5IZWlnaHQpO1xuICAgICAgICAvLyAkKFwiLmd1ZXNzLWZvb3Qtc2lkZWJhclwiKS5vdXRlckhlaWdodChtYWluSGVpZ2h0KTtcblxuICAgICAgICB2YXIgbWFpbkhlaWdodCA9IDUzODtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWFpbkhlaWdodCk7XG4gICAgICAgICQoXCIuZ3Vlc3MtZm9vdC1zaWRlYmFyXCIpLm91dGVySGVpZ2h0KG1haW5IZWlnaHQpO1xuICAgICAgICAvLyDngrnlh7vmjaLkuIDmibnml7Ys5o6p6JeP55qE5Lik6YOo5YiG5Lqk5o2iLmN1cnJlbnTnsbvlkI1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobWFpbkhlaWdodClcbiAgICAgICAgJChcIiNodWFueWlwaVwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGFsZXJ0KDEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYm94ZXMpXG4gICAgICAgICAgICAkKFwiLmd1ZXNzLWZvb3QtbWFpbiA+ZGl2XCIpLnRvZ2dsZUNsYXNzKCdjdXJyZW50JylcbiAgICAgICAgfSk7XG5cbiAgICB9KSgpO1xuICAgIC8vIOS+p+i+ueagj2xp5YWD57Sg6byg5qCH5oKs5rWu5pe25pu05pS557G7Lm9uXG4gICAgJChcIi5zaWRlYmFyLXdpdGgtbGlzdCAubGlzdCBsaVwiKS5tb3VzZW92ZXIoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJxd2RcIilcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvbicpXG4gICAgfSk7XG4gICAgLy8g5b2T5b2T54m55L6b6byg5qCH5oKs5rWuLOaUueWPmOaYvuekuuWGheWuuVxuICAgICQoXCIuZGQtdGVnb25nLW1haW4gLmhlYWQgbGlcIilcbiAgICAgICAgLnRhYnNob3coXCIuZGQtdGVnb25nLW1haW4gLmJvb2tzXCIpXG4gICAgICAgIC8vIOS+p+i+ueagj1xuICAgICQoXCIuZGQtdGVnb25nIC5zaWRlYmFyLXdpdGgtbGlzdCAubmF2IGxpXCIpXG4gICAgICAgIC50YWJzaG93KFwiLmRkLXRlZ29uZyAuc2lkZWJhci13aXRoLWxpc3QgLmxpc3RcIilcblxuICAgIC8vIOS4u+e8luaOqOiNkOm8oOagh+aCrOa1rizmlLnlj5jmmL7npLrlhoXlrrlcbiAgICAkKFwiLnpodWJpYW4tc3VnZ2VzdC1tYWluIC5oZWFkIGxpXCIpXG4gICAgICAgIC50YWJzaG93KFwiLnpodWJpYW4tc3VnZ2VzdC1tYWluIC5ib29rc1wiKVxuICAgICAgICAvLyDkvZzogIXmjqjojZDpvKDmoIfmgqzmta4s5pS55Y+Y5pi+56S65YaF5a65XG4gICAgJChcIi5hdXRob3ItbWFpbi1oZWFkIGxpXCIpXG4gICAgICAgIC50YWJzaG93KFwiLmF1dGhvci1tYWluLWJvZHkgPiBkaXZcIilcbiAgICAgICAgLy8g6K+76ICF5o6o6I2Q5a+86IiqLOm8oOagh+aCrOa1ruaXtuabtOaUueagt+W8j1xuICAgICQoXCIucmVhZGVyLXN1Z2dlc3QtbWFpbi1oZWFkIGxpXCIpXG4gICAgICAgIC50YWJzaG93KFwiLnJlYWRlci1zdWdnZXN0LW1haW4tYm9keSA+IGRpdlwiKVxuICAgICAgICAvLyDor7vogIXmjqjojZDmoI/nm67kuK3nmoTml6DnvJ3mu5rliqhcbiAgICAkLmVhY2goW1wiLmhhb3BpbmdcIiwgXCIuZ3VhbnpodVwiLCBcIi5zaG91Y2FuZ1wiXSwgZnVuY3Rpb24oaW5kZXgsIHZhbCkge1xuICAgICAgICAkKFwiLnJlYWRlci1zdWdnZXN0LW1haW4tYm9keSBcIiArIHZhbCArIFwiIC5ib29rc1wiKS5zbGlkZXIoeyB3aWR0aDogOTUwLCBoZWlnaHQ6IDI4OSB9KTtcbiAgICB9KTtcblxuICAgIC8vIOWQiOS9nOS8meS8tOWxleekuuWMuuS4iuS4i+adpeWbnua7muWKqCzov5vooYzliqjnlLvml7bnu53lr7nlrprkvY0s5YeP5bCP5oCn6IO95raI6ICXXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDlj6/op4HlhoXlrrnpq5jluqblkozlrr3luqZcbiAgICAgICAgdmFyIGhlaWdodCA9IDE3OCArIDIsXG4gICAgICAgICAgICB3aWR0aCA9IDEyMDAsXG4gICAgICAgICAgICBvdXRlciA9IFwiPGRpdiBjbGFzcz0nanVtcCc+PGRpdiBjbGFzcz0nanVtcC1saXN0Jz48L2Rpdj48L2Rpdj5cIixcbiAgICAgICAgICAgIG91dGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtcyA9ICQoXCIucGFydGVuZXJzIC5jYXRzXCIpLFxuICAgICAgICAgICAgLy8g5b6q546v6Ze06ZqU5pe26Ze0XG4gICAgICAgICAgICBpbnRlcnZhbCA9IDcwMDAsXG4gICAgICAgICAgICB0aW1lcjtcbiAgICAgICAgaXRlbXMud3JhcEFsbChvdXRlcik7XG4gICAgICAgIHZhciBqdW1wID0gJChcIi5wYXJ0ZW5lcnMgLmp1bXBcIik7XG4gICAgICAgIHZhciBqdW1wTGlzdCA9IGp1bXAuZmluZChcIi5qdW1wLWxpc3RcIik7XG4gICAgICAgIGp1bXAuY3NzKG91dGVyU3R5bGUpO1xuICAgICAgICBqdW1wTGlzdC5jc3Moe1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDliJ3lp4vljJblrozmiJBcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICAgICAgaWYgKGp1bXBMaXN0LmlzKFwiOmFuaW1hdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9sZFRvcCA9IHBhcnNlRmxvYXQoanVtcExpc3QuY3NzKFwidG9wXCIpKTtcbiAgICAgICAgICAgIGlmIChvbGRUb3AgPT0gMCkge1xuICAgICAgICAgICAgICAgIGp1bXBMaXN0LmFuaW1hdGUoeyB0b3A6IC1oZWlnaHQgfSwgXCJzbG93XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9sZFRvcCA9PSAtaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAganVtcExpc3QuYW5pbWF0ZSh7IHRvcDogMCB9LCBcInNsb3dcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoc2Nyb2xsLCBpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b6q546vXG4gICAgICAgIHNjcm9sbCgpO1xuICAgICAgICBpdGVtcy5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2Nyb2xsKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KSgpO1xuXG4gICAgLy8g6L+U5Zue6aG26YOo5oyJ6ZKu5LiN5pi+56S6LOW9k+mhtemdoua7muWKqOWIsOS4gOWumui3neemu+aXtuaYvuekuizlubbkuJTngrnlh7vlkI7pobXpnaLmu5rliqjkuLowXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDpobXpnaLmu5rliqjlpJrlsJHml7blvIDlp4vmmL7npLrov5Tlm57pobbpg6jmjInpkq5cbiAgICAgICAgdmFyIGhlaWdodFdoZW5TaG93ID0gMjAwLFxuICAgICAgICAgICAgLy8g57yT5a2Y6L+U5Zue6aG26YOo5oyJ6ZKu5ZKMd2luZG935a+56LGhXG4gICAgICAgICAgICBiYWNrID0gJChcIi5iYWNrdG9wIC5iYWNrXCIpLFxuICAgICAgICAgICAgd2luID0gJCh3aW5kb3cpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVCYWNrKCkge1xuICAgICAgICAgICAgYmFjay5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2hvd0JhY2soKSB7XG4gICAgICAgICAgICBiYWNrLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGVCYWNrKCk7XG4gICAgICAgIC8vIOW9k+mhtemdoua7muWKqOWIsOS4gOWumuWAvOaXtizmmL7npLrov5Tlm57pobbpg6jmjInpkq4s5aaC5p6c5bCP5LqO5p+Q5YC85pe2LOmakOiXj+aMiemSrlxuICAgICAgICB3aW4ub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbFRvcCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhidG4pO1xuICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBoZWlnaHRXaGVuU2hvdykgc2hvd0JhY2soKTtcbiAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPCBoZWlnaHRXaGVuU2hvdykgaGlkZUJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOeCueWHu+aMiemSruaXtizpobXpnaLov5Tlm57pobbpg6gs5rua5Yqo5Li6MFxuICAgICAgICBiYWNrLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyDpgb/lhY3kvZzkuLrpk77mjqXnmoTlhYPntKDpu5jorqTooYzkuLpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW4uc2Nyb2xsVG9wKDApO1xuICAgICAgICB9KTtcblxuICAgIH0pKCk7XG5cblxufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
