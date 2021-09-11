$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 500 );
    });
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .navbar-collapse ul li a");
const docEnd = document.querySelectorAll("nav .navbar-collapse ul li .contact")[0];
console.log(sections);
console.log(navLi);
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((a) => {
    console.log(current);
    a.classList.remove("active");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      docEnd.classList.add("active");
    } else if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};