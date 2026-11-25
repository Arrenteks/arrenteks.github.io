isOpen = false;

function openNav(x){
    toggleHamburger(x);
    document.getElementById("myNav").style.height = "100%";
}

function closeNav(x){
    toggleHamburger(x);
}

function toggleHamburger(x){
    x.classList.toggle("change");
}
