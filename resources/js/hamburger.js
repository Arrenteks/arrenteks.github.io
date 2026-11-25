isOpen = false;

function openNav(){
    document.getElementById("myNav").style.height = "100%"
}

function closeNav(){
    document.getElementById("myNav").style.height = "0%"
}

function toggleHamburger(x){
    isOpen = !isOpen;
    x.classList.toggle("change");

    if(isOpen) openNav()
    else closeNav();
}
