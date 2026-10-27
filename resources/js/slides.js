let slideIndex = 1;
showSlides(slideIndex)

//next/prev controls
function changeSlides(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    let index;
    let slides = document.getElementsByClassName("voices-container-upper");

    if(n < 1){slideIndex = slides.length;}
    if(n > slides.length){ slideIndex = 1;}


    for(index = 0; index < slides.length; index++){
        slides[index].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}