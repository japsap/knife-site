window.onscroll = function(){
    navScroll();
}

let navbar = document.getElementById('navi-1')
let mobileNav = document.getElementById('slidebar')


function navScroll(){
    if( document.getElementById('navi1') > 0 || document.documentElement.scrollTop > 0 ){
        document.getElementById('navi1').style.background = "white"
        document.getElementById('button').style.color = "#E14E6B";
        document.getElementById('link').style.color = "#E14E6B";
        document.getElementById('link1').style.color = "#E14E6B";
        document.getElementById('link2').style.color = "#E14E6B";
        document.getElementById('link3').style.color = "#E14E6B";
        document.getElementById('logo').style.color = "#E14E6B";
    } else {
        document.getElementById('navi1').style.background = "transparent";
        document.getElementById('button').style.color = "white";
        document.getElementById('link').style.color = "white";
        document.getElementById('link1').style.color = "white";
        document.getElementById('link2').style.color = "white";
        document.getElementById('link3').style.color = "white";
        document.getElementById('logo').style.color = "white"
    }
}
function toggleBackground(){
    mobileNav.classList.toggle('active')
}
function toggleBackgroundd(){
    mobileNav.classList.toggle('active')
}


$(document).ready(function(){
    var $prev = $('.previousx');
    var $next = $('.nextx');
    var mode = "auto";
    $prev.on({
      click: function(e){
        e.preventDefault();
        mode = "manual";
        showPreviousImage();
      }
    });
    $next.on({
      click: function(e){
        e.preventDefault();
        mode = "manual";
        showNextImage();
        
      }
    });
    
    setInterval(function(){
      if(mode==="auto"){
        showNextImage();
      }
    },5000);
    
    function showNextImage(){
        var $actEl = $('.activx');
        var $nextEl = $actEl.next('.slidex');
        if($nextEl.length){
          $actEl.removeClass('activx');
          $nextEl.addClass('activx');
        }else{
          $actEl.removeClass('activx');
          $('.slidex:first-child').addClass('activx');
        }
    }
    
    function showPreviousImage(){
        var $actEl = $('.activx');
        var $prevEl = $actEl.prev('.slidex');
        if($prevEl.length){
          $actEl.removeClass('activx');
          $prevEl.addClass('activx');
        }else{
          $actEl.removeClass('activx');
          $('.slidex.last').addClass('activx');
        }
    }
  });