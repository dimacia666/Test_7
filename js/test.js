const title = document.querySelector(".title"); // Нахождение элемента 
const link = document.querySelector(".link"); // Нахождение элемента
const classTitle = title.classList; // Свойства класса 

title.style.color = "red"; // Добавление цвета
title.style.fontSize = "10px"; // Добавление размера текста

link.classList.add("class", "sharge"); // Добавление класса
link.classList.remove("class"); // Удаление класса
link.classList.replace("sharge", "tesla"); // Замена названия класса

link.setAttribute("alt", "ALT"); // Добавить атрибут, значение 
link.removeAttribute("alt"); // Удаление атрибута 

console.log(title.classList); 
console.log(link.classList); 
console.log(classTitle);
console.log(link.hasAttribute("href")); // Узнать есть ли атрибут у элемента 
console.log(link.hasAttribute("rel"));
console.log(link.hasAttribute("src"));
console.log(link.hasAttribute("alt"));