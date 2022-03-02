var x = document.getElementById("x1");
var y = document.getElementById("x2");
var z = document.getElementById("x3");
x.addEventListener("click", () => {
    x.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
})
y.addEventListener("click", () => {
    y.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
})
z.addEventListener("click", () => {
    z.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
})
