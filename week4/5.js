
function doStuff(sColor1, sColor2) {
    let p = document.getElementsByTagName("p");
    let head = document.getElementsByClassName("headertitle");
    for (i of p) {
        i.style.backgroundColor = sColor1;
    }
    for (i of head) {
        i.style.backgroundColor = sColor2;
    }
    document.title = `${p.length} параграфа, ${head.length} елемента с клас <headertitle>`;
}
document.addEventListener("DOMContentLoaded", function(event) {  
    doStuff("blue", "green");
});