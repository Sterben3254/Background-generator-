var button = document.querySelector("button");
var input1 = document.getElementsByName("color1")[0];
var input2 = document.getElementsByName("color2")[0];
var body = document.body;
var current = document.getElementsByTagName("h3")[0];

input2.addEventListener("input", change);
input1.addEventListener("input", change);

function change() {
  body.style.background =
    "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
  current.textContent = body.style.background + ";";
}
