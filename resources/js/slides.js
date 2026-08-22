let slideIndex = 1;
showSlides(slideIndex)

//next/prev controls
function changeSlides(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    let captionText = document.getElementById("caption")

    if(n < 1){slideIndex = slides.length;}
    if(n > slides.length){ slideIndex = 1;}


    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex-1].getElementsByTagName("img")[0].alt;
}