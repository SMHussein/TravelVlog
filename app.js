const expand = document.querySelector(".collapse");
const divs = document.querySelector(".divs");
const burs = document.querySelectorAll(".bur");
const mainlink = document.querySelectorAll(".mainlink");


// navigation bar action

divs.addEventListener("click", function () {
    expand.classList.toggle("expand");
    for (let i of mainlink) {
        i.classList.toggle("showlink");
    }
})

divs.addEventListener("click", function () {
    burs[0].classList.toggle('one');
    burs[1].classList.toggle('two');
    burs[2].classList.toggle('three');
})
// navigation bar action ends

// on scroll change the header's background color
$(function () {
    $(document).scroll(function () {
        var $nav = $("header");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide div")
const nav = document.querySelector(".carousel__nav");
const points = Array.from(nav.children);

//buttons 
const prevBtn = document.querySelector(".courasel__button--left");
const nextBtn = document.querySelector(".courasel__button--right");

//trackers
let counter = 1;
let currentSlide = 1;
let targetSlide = 1;
let t;


const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";



const moveToSlide = (counter, currentSlide, targetSlide) => {
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    updatePoint(currentSlide, targetSlide);
    automated();
}
function moveNext() {
    if (counter >= carouselImages.length - 1) return;
    currentSlide = counter - 1;
    targetSlide = counter;
    if (counter == carouselImages.length - 2) {
        targetSlide = 0;
    }
    counter++;
    stopAutomated()
    moveToSlide(counter, currentSlide, targetSlide)
}

nextBtn.addEventListener("click", () => {
    stopAutomated()
    moveNext();
})



prevBtn.addEventListener("click", () => {
    stopAutomated()
    if (counter <= 0) return;
    currentSlide = counter - 1;
    targetSlide = counter - 2;
    if (counter == 1) {
        targetSlide = points.length - 1;
    }
    counter--;

    moveToSlide(counter, currentSlide, targetSlide)

})

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})

nav.addEventListener("click", e => {
    stopAutomated();
    const targetDot = e.target.closest("button");
    if (!targetDot) return;
    const targetIndex = points.findIndex(dot => dot === targetDot);
    currentSlide = counter - 1;
    targetSlide = targetIndex;
    counter = targetIndex + 1;
    moveToSlide(counter, currentSlide, targetSlide);

})

const updatePoint = (currentSlide, targetSlide) => {
    points[currentSlide].classList.remove("current-slide");
    points[targetSlide].classList.add("current-slide");
}

function automated() {
    t = setTimeout(moveNext, 20000);
}

function stopAutomated() {
    clearTimeout(t);
}
// automated();


//popup section 
const signupBtn = document.querySelector(".signup-link");
const popup = document.querySelector(".popup-background");
const closeBtn = document.querySelector(".closeButton");
// const cvr = document.querySelector("#cover");

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // cvr.style.display = "block"
    popup.classList.toggle("poped");
    //     if (document.body.style.overflow = "hidden") {
    //         cvr.style.width = "1024"
    //         cvr.style.height = "100&#37;"
    //     }
})
closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.toggle("poped");
    // cvr.style.display = "none"
    // document.body.style.overflowY = "scroll"
})



// function showPopUp(el) {
//     var cvr = document.getElementById("cover")
//     var dlg = document.getElementById(el)
//     cvr.style.display = "block"
//     dlg.style.display = "block"
//     if (document.body.style.overflow = "hidden") {
//         cvr.style.width = "1024"
//         cvr.style.height = "100&#37;"
//     }
// }


// api section 


// let form = document.querySelector(".searchForCity");
// form.addEventListener("submit", e => {
//     e.preventDefault();
//     searchTerm = form.elements.cityName.value;
// })

// // const getPhoto = async () => {
// //     api = await fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Chicago, IL&key=AIzaSyC9rrivXYa3DtOxkGIaVrjsTVN5OCvPuiA&inputtype=textquery&fields=name,photos")
// //     console.log(api)
// // }
