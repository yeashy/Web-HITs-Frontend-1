let footerText = document.getElementById("footer-text");
let footerCat = document.getElementById("footer-cat");
let fixedCat = document.getElementById("fixed-cat");
let leftBlock = document.getElementById("left-block");
let catHolder = document.getElementById("cat-holder");

function resizeHeight(e) {
    if (window.innerHeight <= 450) {
        footerText.innerHTML = "Lonely text";
        footerText.style.marginRight = "auto";
        footerCat.style.visibility = "hidden";
    }
    else {
        footerText.innerHTML = "Place for cat to sit on";
        footerText.style.marginRight = "150px";
        footerCat.style.visibility = "visible";
    }
    if (window.innerWidth <= 1100) {
        fixedCat.style.visibility = "hidden";
        catHolder.style.padding = "30px 50px";
    }
    else {
        fixedCat.style.visibility = "visible";
        catHolder.style.padding = "30px 0px";
        
    }
    if (window.innerWidth <= 500) {
        leftBlock.style.width = "0";
        leftBlock.style.minWidth = "0";
        catHolder.style.width = "500px"
        catHolder.style.padding = "30px 0px";
    }
    else {
        leftBlock.style.width = "15%";
        leftBlock.style.minWidth = "165px";
        catHolder.style.width = "68%"
    }
}

window.onresize = resizeHeight;