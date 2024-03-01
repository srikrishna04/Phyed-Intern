let element = document.getElementById("imgset");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let link4 = document.querySelector(".link4");
let link5 = document.querySelector(".link5");
let link6 = document.querySelector(".link6");
let link7 = document.querySelector(".link7");
let link8 = document.querySelector(".link8");
let head = document.querySelector(".headi");
var images;
const mod_a = "./assets/Mechanics/Chapter-1_00001/Chapter-1_00";
const mod_b = "./assets/Mechanics/Chapter-2 (1)_00001/Chapter-2 (1)_00";
const mod_c = "./assets/Mechanics/chapter-3_00001/chapter-3_00";
const mod_d = "./assets/Mechanics/chapter-4_00001/chapter-4_00";
const mod_e = "./assets/Mechanics/chapter-5_00001/chapter-5_00";
const mod_f = "./assets/Mechanics/chapter-6_00001/chapter-6_00";
const mod_g = "./assets/Mechanics/chapter-7_00001/chapter-7_00";
const mod_h = "./assets/Mechanics/chapter-8_00001/chapter-8_00";
function adder(base, start, end) {
    for (var i = start; i <= end; i++) {
        images = new Image();
        const div=document.createElement("div");
        if (i < 10) {
            images.src = base + "00" + i + ".jpg";
        }
        else if (i < 100) {
            images.src = base + "0" + i + ".jpg";
        }
        else if (i < 1000) {
            images.src = base + i + ".jpg";
        }
        if (start == i) {
            div.className = "carousel-item chap" + base[27];
        }
        else {
            div.className = "carousel-item";
        }
        images.width = "50%";
        images.alt = "not available";
        div.appendChild(images);
        element.appendChild(div);
    }
}
link2.addEventListener('click', function () {
    let active = document.querySelector(".active");
    var activated = document.querySelector(".chap2");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link2.innerHTML;
});
link3.addEventListener('click', function () {
    var activated = document.querySelector(".chap3");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link3.innerHTML;

});
link4.addEventListener('click', function () {
    var activated = document.querySelector(".chap4");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.textContent=link4.textContent;
});
link5.addEventListener('click', function () {
    var activated = document.querySelector(".chap5");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link5.innerHTML;
});
link6.addEventListener('click', function () {
    var activated = document.querySelector(".chap6");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link6.innerHTML;
});
link7.addEventListener('click', function () {
    var activated = document.querySelector(".chap7");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link7.innerHTML;
});
link8.addEventListener('click', function () {
    var activated = document.querySelector(".chap8");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link8.innerHTML;
});
link1.addEventListener('click', function () {
    var activated = document.querySelector(".chap1");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link1.innerHTML;

});
adder(mod_a,7,29);
adder(mod_b,1,43);
adder(mod_c,1,68);
adder(mod_d,1,45);
adder(mod_e,1,43);
adder(mod_f,1,47);
adder(mod_g,1,41);
adder(mod_h,1,94);