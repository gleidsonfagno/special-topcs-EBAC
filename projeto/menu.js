var header = document.getElementById("header")
var navgationHeader = document.querySelector(".menu")
var content = document.getElementById("content")
var shoWSidebar = false

function toggleSideBar(){
     shoWSidebar = !shoWSidebar
     if(shoWSidebar){
          // true
          console.log(shoWSidebar)
          navgationHeader.style.marginLeft = "-2vw"
          navgationHeader.style.animationName = "showSidebar"
          // content.style.filter = "blur(2px)"
     }else{
          console.log(shoWSidebar)
          navgationHeader.style.marginLeft = "-100vw"
          navgationHeader.style.animationName = ""
          // content.style.filter = ""
     }
}

function closeSidebar(){
     if(shoWSidebar){
          toggleSideBar();
     }
}

ScrollReveal().reveal('.headline');