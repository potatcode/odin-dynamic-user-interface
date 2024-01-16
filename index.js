const parents = document.getElementsByClassName("nav-menu");
const children = document.getElementsByClassName("nav-submenu");

Array.from(parents).forEach((element) => {
    element.addEventListener("mouseover", function() {
        element.children[0].classList.remove("hidden");
    });
    element.addEventListener("mouseout", function() {
        setTimeout(function() {
            element.children[0].classList.add("hidden");
        }, 100);
    });
});
