let element = document.getElementById("imgset");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let link4 = document.querySelector(".link4");
let link5 = document.querySelector(".link5");
let link6 = document.querySelector(".link6");
let link7 = document.querySelector(".link7");
let link8 = document.querySelector(".link8");
let link9 = document.querySelector(".link9");
let link10 = document.querySelector(".link10");
let link11 = document.querySelector(".link11");
let link12 = document.querySelector(".link12");
let link13 = document.querySelector(".link13");
let head = document.querySelector(".headi");
var images;
const mod_a = "./assets/Linear Algebra/lec01-16/lec01-16 (1) (1) (1)-";
const mod_b = "./assets/Linear Algebra/lec17-28/lec17-28 (1) (1)-";
function adder(base, start, end) {
    for (var i = start; i <= end; i++) {
        images = new Image();
        const div=document.createElement("div");
        if (i < 10) {
            images.src = base + "00" + i + ".jpg";
            n='00'+i.toString();
        }
        else if (i < 100) {
            images.src = base + "0" + i + ".jpg";
            n='0'+i.toString();
        }
        else if (i < 1000) {
            images.src = base + i + ".jpg";
            n=i.toString();
        }
        
        div.className = "carousel-item chap" + n + base[27];
        
        images.width = "50%";
        images.alt = "not available";
        div.appendChild(images);
        element.appendChild(div);
    }
}
link2.addEventListener('click', function () {
    let active = document.querySelector(".active");
    var activated = document.querySelector(".chap0280");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link2.innerHTML;
});
link3.addEventListener('click', function () {
    var activated = document.querySelector(".chap0600");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link3.innerHTML;

});
link4.addEventListener('click', function () {
    var activated = document.querySelector(".chap0720");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.textContent=link4.textContent;
});
link5.addEventListener('click', function () {
    var activated = document.querySelector(".chap0890");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link5.innerHTML;
});
link6.addEventListener('click', function () {
    var activated = document.querySelector(".chap1020");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link6.innerHTML;
});
link7.addEventListener('click', function () {
    var activated = document.querySelector(".chap1420");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link7.innerHTML;
});
link8.addEventListener('click', function () {
    var activated = document.querySelector(".chap1570");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link8.innerHTML;
});
link9.addEventListener('click', function () {
    var activated = document.querySelector(".chap0011");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link8.innerHTML;
});
link10.addEventListener('click', function () {
    var activated = document.querySelector(".chap0301");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link8.innerHTML;
});
link11.addEventListener('click', function () {
    var activated = document.querySelector(".chap0841");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link8.innerHTML;
});
link12.addEventListener('click', function () {
    var activated = document.querySelector(".chap1041");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link8.innerHTML;
});
link13.addEventListener('click', function () {
    var activated = document.querySelector(".chap2081");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link8.innerHTML;
});

link1.addEventListener('click', function () {
    var activated = document.querySelector(".chap0020");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link1.innerHTML;

}); 
adder(mod_a,2,194);
adder(mod_b,1,213);