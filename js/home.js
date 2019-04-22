//    <-!Navbar->
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (window.screen.width > 1000) {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.getElementById("nav1").style.padding = "0 0";
            document.getElementById("logo").style.width = "100px";
            document.getElementById("logo").style.marginTop = "-10px";
            document.getElementById("logo").style.marginLeft = "90%";
            document.getElementById("nav1").style.backgroundColor = "rgba(255,152,76,0.57)";
            document.getElementById("dropdown-menu-scroll-1").style.backgroundColor = "rgba(255,152,76,0.57)";
            document.getElementById("dropdown-menu-scroll-2").style.backgroundColor = "rgba(255,152,76,0.57)";
            document.getElementById("dropdown-menu-scroll-3").style.backgroundColor = "rgba(255,152,76,0.57)";
        } else {
            document.getElementById("nav1").style.padding = "60px 0";
            document.getElementById("logo").style.width = "200px";
            document.getElementById("logo").style.marginTop = "-40px";
            document.getElementById("logo").style.marginLeft = "0";
            document.getElementById("nav1").style.backgroundColor = "rgba(255,152,76,0.57)";
            document.getElementById("dropdown-menu-scroll-1").style.backgroundColor = "rgba(255,152,76,0.57)";
            document.getElementById("dropdown-menu-scroll-2").style.backgroundColor = "rgba(255,152,76,0.57)";
            document.getElementById("dropdown-menu-scroll-3").style.backgroundColor = "rgba(255,152,76,0.57)";
        }
    }
}

