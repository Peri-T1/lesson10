var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector(".mobileMenuOpened");
var mobileMenuClose = document.querySelector(".mobileMenuClose");
  

mobileMenu.addEventListener("click", function () {
    var menu = document.createElement("div");
    menu.innerText = "text"
    mobileMenuOpened.append(menu);
    mobileMenuOpened.classList.contains("visible")
    mobileMenuOpened.classList.add("visible");
    mobileMenuOpened.classList.add("visible");
    document.body.classList.add("overflowHidden");
    
});

mobileMenuClose.addEventListener("click", function(){
    mobileMenuOpened.classList.remove("visible");
    document.body.classList.remove("overflowHidden");
})