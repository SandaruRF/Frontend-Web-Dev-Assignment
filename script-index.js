let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides-banner");
  let dots = document.getElementsByClassName("dot-banner");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-banner", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-banner";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides-1");
  let dots = document.getElementsByClassName("dot-outlets-1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-outlets-1", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active-outlets-1";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}


let slideIndex2 = 0;
showSlides2();
function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides-2");
    let dots = document.getElementsByClassName("dot-outlets-2");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-outlets-2", "");
    }
    slides[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " active-outlets-2";
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

let slideIndex3 = 0;
showSlides3();
function showSlides3() {
    let i;
    let slides = document.getElementsByClassName("mySlides-3");
    let dots = document.getElementsByClassName("dot-outlets-3");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) {slideIndex3 = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-outlets-3", "");
    }
    slides[slideIndex3-1].style.display = "block";  
    dots[slideIndex3-1].className += " active-outlets-3";
    setTimeout(showSlides3, 2000); // Change image every 2 seconds
}

let slideIndex4 = 0;
showSlides4();

function showSlides4() {
  let i;
  let slides = document.getElementsByClassName("mySlides-1-1");
  let dots = document.getElementsByClassName("dot-products-1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex4++;
  if (slideIndex4 > slides.length) {slideIndex4 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-products-1", "");
  }
  slides[slideIndex4-1].style.display = "block";  
  dots[slideIndex4-1].className += " active-products-1";
  setTimeout(showSlides4, 2000); // Change image every 2 seconds
}

let slideIndex5 = 0;
showSlides5();

function showSlides5() {
  let i;
  let slides = document.getElementsByClassName("mySlides-2-1");
  let dots = document.getElementsByClassName("dot-products-2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex5++;
  if (slideIndex5 > slides.length) {slideIndex5 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-products-2", "");
  }
  slides[slideIndex5-1].style.display = "block";  
  dots[slideIndex5-1].className += " active-products-2";
  setTimeout(showSlides5, 2000); // Change image every 2 seconds
}

let slideIndex6 = 0;
showSlides6();

function showSlides6() {
  let i;
  let slides = document.getElementsByClassName("mySlides-3-1");
  let dots = document.getElementsByClassName("dot-products-3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex6++;
  if (slideIndex6 > slides.length) {slideIndex6 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-products-3", "");
  }
  slides[slideIndex6-1].style.display = "block";  
  dots[slideIndex6-1].className += " active-products-3";
  setTimeout(showSlides6, 2000); // Change image every 2 seconds
}