!function(t,n){var a,e=t(".modal"),o=e.css("top"),i=t(window).height(),r=t(".choose"),s=t(".modal .close"),l=t(".modal .finished"),p=function(t,n){t.children("li").removeClass("on").eq(n).addClass("on").parent()},c=function(o){var o=o||{},r=o.space;r=r==n?0:parseFloat(r);var s=t(o.mock),l=i-a-r;if(s.length>0){var p=t(s).offset().top;l>p&&(l=p-4)}e.animate({top:l+"px"},200,"ease")},u=function(){e.animate({top:o},200,"ease-out"),t(".warning").text(""),t("input").removeClass("invalid")},f=function(n,o){var i;"ul"==t(n)[0].tagName.toLowerCase()&&(i=t(n)),"span"==t(n)[0].tagName.toLowerCase()&&(i=t(n).siblings("ul"));var s=i.attr("id"),l=1;r.empty().attr({p:"#"+s,i:l}),i.children("li").clone().removeClass("on").appendTo(r).eq(l).addClass("on"),a=e.height(),c(o)},d=function(t){t.preventDefault();var n=r.attr("i");n--,0>=n&&(n=0),r.attr("i",n),p(r,n)},v=function(t){t.preventDefault();var n=r.children("li"),a=r.attr("i");a++,a>=n.length-1&&(a=n.length-1),r.attr("i",a),p(r,a)},h=function(n){var a=t(r.attr("p")),e=r.attr("i");p(a,e),u()};t.fn.modal=function(n){return this.on("tap",function(t){t.preventDefault(),f(this,n)}),e.on("swipeUp",d),e.on("swipeDown",v),s.on("tap",u),l.on("tap",h),t("input").focus(u),this}}(Zepto);