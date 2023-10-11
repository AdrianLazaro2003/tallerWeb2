const productContainers = [...document.querySelectorAll('.producto-contenedor')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("abajo",window.scrollY>0);
})

$(document).ready(function() {
    $('.question').click(function() {
        $(this).next('.answer').slideToggle(250);
    });
});

