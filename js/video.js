
console.log("load");

var $gallery = document.querySelector("#gallery");

var $view = document.querySelector(".view");
var $viewContainer = document.querySelector(".view-container");
var $viewItem = document.querySelectorAll(".view-item");

var $list = document.querySelector(".list");
var $listItem = document.querySelectorAll("li");
var _$a = [];

var _vWidth = 900;
var _vHeight = 660;

var _max = $viewItem.length;
var _cuId = 0;
// 지금 눌린 애를 체크
var _exId = _cuId;
// 눌렸던 애를 체크

$viewContainer.style.width = (_vWidth * _max) + "px";
for(var i=0; i<_max; i++){
    $viewItem[i].style.width = _vWidth + "px";
    // $listItem[i]
    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", function(e){
        e.preventDefault();
        var id = _$a.indexOf(e.currentTarget);
        var $listItemParent = e.currentTarget.parentElement;
        // 현재 클릭된 요소(a)의 부모요소(li)를 찾는다.
        if(!$listItemParent.classList.contains("selected")){
            // 부모 요소(li)가 slected라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때 false
            _cuId = id;
            $listItem[_exId].classList.remove("selected");
            // 이전에 활성화된 버튼의 클래스 (selected)를 삭제
            $listItem[_cuId].classList.add("selected");
            // 현재 버튼의 클래스(selected)가 활성화되도록 추가
            var left = _vWidth * _cuId * -1;
            TweenMax.to($viewContainer, 1.0, {css: {left : left}, ease: Quad.easeInOut});
            _exId = _cuId;
        }
    })
    // console.log($a);
}
console.log(_$a);


"use strict";
$(function() {
    $(".youtube").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        // $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));

        $(document).delegate('#'+this.id, 'click', function() {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
    });
 });
