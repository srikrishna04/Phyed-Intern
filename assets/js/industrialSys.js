let element = document.getElementById("images");
var images;
const base = "./assets/Industrial _ Systems Enginnering/Operation Research/ilovepdf_pages-to-jpg/OR  CLASS PPT_page-0"
for (var i = 2; i <= 355; i++) {
    images = new Image();
    if (i < 10) {
        images.src = base + "00" + i + ".jpg";
    }
    else if (i < 100) {
        images.src = base + "0" + i + ".jpg";
    }
    else if (i < 1000) {
        images.src = base + i + ".jpg";
    }
    images.className = "carousel-item";
    images.alt = "not available";
    element.appendChild(images);
}
