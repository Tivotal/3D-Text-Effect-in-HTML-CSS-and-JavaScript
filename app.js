/* Created by Tivotal */

let text = document.querySelector(".text");

let shadow = "";

for (let i = 0; i < 30; i++) {
  shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #d9d9d9";
}

text.style.textShadow = shadow;
