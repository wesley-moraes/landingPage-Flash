
document.addEventListener("DOMContentLoaded", function(){

    console.log("We're in");

    var nav = document.getElementById("nav-menu");
    var showMenu = document.getElementById("showMenu");
    var hideMenu = document.getElementById("hideMenu");

    showMenu.addEventListener("click", function () {
        nav.classList.add("show");
        console.log("tranquilo");
    });

    hideMenu.addEventListener("click", function () {
    nav.classList.remove("show");
    });

    document.addEventListener('mouseup', function(e) {
        var container = document.getElementById('nav-menu');
        if (!container.contains(e.target)) {
            nav.classList.remove("show");
        }
    });

    var linksMenu = nav.querySelectorAll("a");
    linksMenu.forEach(function(link) {
        link.addEventListener('click', function(event) {
            nav.classList.remove("show");
        });
    });

    console.log(linksMenu);
    


});