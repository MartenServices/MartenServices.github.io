const whiteButton = document.getElementById("white");
const yellowButton = document.getElementById("yellow");
const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const purpleButton = document.getElementById("purple");
const orangeButton = document.getElementById("orange");
const blackButton = document.getElementById("black");
const greyButton = document.getElementById("grey");
const brownButton = document.getElementById("brown");

const icecreamLight = document.getElementById("body-light");
const icecreamDark = document.getElementById("body-dark");


function colorChanger(lightColor, darkColor) {
    icecreamLight.style.fill = lightColor;
    icecreamDark.style.fill = darkColor;
}

whiteButton.addEventListener("click", () => colorChanger("#f6f9f6", "#b6b8b6"));
yellowButton.addEventListener("click", () => colorChanger("#ecff00", "#acba00"));
redButton.addEventListener("click", () => colorChanger("#fb031c", "#86020f"));
greenButton.addEventListener("click", () => colorChanger("#11ff27", "#076d11"));
blueButton.addEventListener("click", () => colorChanger("#003cfa", "#002599"));
purpleButton.addEventListener("click", () => colorChanger("#af09f1", "#59057a"));
orangeButton.addEventListener("click", () => colorChanger("#ff9100", "#d07700"));
blackButton.addEventListener("click", () => colorChanger("#000000", "#1c1c1c"));
greyButton.addEventListener("click", () => colorChanger("#979796", "#666565"));
brownButton.addEventListener("click", () => colorChanger("#8a5207", "#693e05"));


