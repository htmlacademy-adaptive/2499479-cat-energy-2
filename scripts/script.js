var n=document.querySelector(".main-nav"),a=document.querySelector(".main-nav__toggle");n.classList.remove("main-nav--nojs");a.addEventListener("click",()=>{n.classList.contains("main-nav--close")?(n.classList.remove("main-nav--close"),n.classList.add("main-nav--open")):(n.classList.add("main-nav--close"),n.classList.remove("main-nav--open"))});
