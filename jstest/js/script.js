let textElement = document.querySelector("#myText");

let button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
    textElement.style.cssText = "color: blue; font-size: 50px;"
    textElement.innerHTML = "Sike! You just got pranked";
});