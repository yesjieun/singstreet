
function PlaySound1(vinyl) {
    var thissound1=document.getElementById(vinyl);
    thissound1.play();
}
function PauseSound1(vinyl) {
    var thissound1=document.getElementById(vinyl);
    thissound1.pause();
}
function PlaySound2(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.play();
}
function PauseSound2(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.pause();
}
function PlaySound3(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.play();
}
function PauseSound3(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.pause();
}
function PlaySound4(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.play();
}
function PauseSound4(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.pause();
}

var $tabMenu = document.querySelector("#tab-menu");
    var $tabMenuEl = $tabMenu.querySelectorAll('a');
    var $tabContent = document.getElementsByClassName('tab-content');
    // console.log($tabMenu, $tabMenuEl);
    // console.log($tabContent);
    for(var i = 0; i < $tabMenuEl.length; i++){
      tabMenuClick(i);
    }
    function tabMenuClick(index){
      $tabMenuEl[index].addEventListener('click', function(e) {
        e.preventDefault();
        for(var i = 0; i < $tabMenuEl.length; i++){
          $tabMenuEl[i].classList.remove('selected');
          $tabContent[i].classList.remove('selected');
          if(i === index){
            $tabMenuEl[i].classList.add('selected');
            $tabContent[i].classList.add('selected');
          }
        }
      });
    }