const myLi = document.querySelector('li.start-here');
console.log(myLi.className);
myLi.textContent = "main title";
const myLiNextSibling = myLi.nextElementSibling;
const myUl = myLiNextSibling.firstElementChild;
const newSubTitle =document.createElement("li");
const subTitleText = document.createTextNode("sub title 4'");
newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle);
const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove(); 
const head = document.getElementsByTagName("head");
const title = document.head.querySelector("title");
title.textContent = "DOM Master";
const div = myLiParent.nextElementSibling;
const p = div.querySelector("p");
p.textContent = "Now I know how to traverse the DOM :D";