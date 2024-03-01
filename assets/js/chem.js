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
const mod_a = "./assets/Chemistry/Thermo/Thermodynamics_00";
const mod_b = "./assets/Inorganic/1 Atomicpdf_pages-to-jpg/1 Atomic orbitals and bonding_page-0";
const mod_c = "./assets/Inorganic/0 Redoxpdf_pages-to-jpg/1st Yr  Redox_5_page-0";
const mod_d = "./assets/Inorganic/2CFTpdf_pages-to-jpg/2-CFT_Colour Magnetism- Complexes_page-0";
const mod_e = "./assets/Inorganic/3-Chelatepdf_pages-to-jpg/3-Chelate Effect 2015_page-0";
const mod_f = "./assets/Inorganic/4-Organpdf_pages-to-jpg/4-Organometallics_page-0";
const mod_g = "./assets/Inorganic/6-Biopdf_pages-to-jpg/6-Bioinorganic_page-0";
const mod_h = "./assets/Inorganic/5coordinationpdf_pages-to-jpg/coordination_page-0";
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
            div.className = "carousel-item chap" + base[19];
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
    var activated = document.querySelector(".chap1");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link2.innerHTML;
});
link3.addEventListener('click', function () {
    var activated = document.querySelector(".chap0");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link3.innerHTML;

});
link4.addEventListener('click', function () {
    var activated = document.querySelector(".chap2");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.textContent=link4.textContent;
});
link5.addEventListener('click', function () {
    var activated = document.querySelector(".chap3");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link5.innerHTML;
});
link6.addEventListener('click', function () {
    var activated = document.querySelector(".chap4");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link6.innerHTML;
});
link7.addEventListener('click', function () {
    var activated = document.querySelector(".chap6");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link7.innerHTML;
});
link8.addEventListener('click', function () {
    var activated = document.querySelector(".chap5");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link8.innerHTML;
});
link1.addEventListener('click', function () {
    var activated = document.querySelector(".chapT");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link1.innerHTML;

});
adder(mod_a,9,20);
adder(mod_b,1,125);
adder(mod_c,1,68);
adder(mod_d,1,27);
adder(mod_e,1,27);
adder(mod_f,1,36);
adder(mod_g,1,41);
adder(mod_h,1,42);