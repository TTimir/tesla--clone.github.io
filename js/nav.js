let main = document.querySelector(".main-1");

let menu = document.querySelector("#menu");
let arrow = document.querySelector(".bx-navigation");
let blurs = document.querySelector(".blur");
let sidebar = document.querySelector(".hdn-sidebar");

menu.addEventListener("click", () => {
    blurs.classList.add("active");
    sidebar.classList.add("active");
})

arrow.addEventListener("click", () => {
    blurs.classList.remove("active");
    sidebar.classList.remove("active");
})

let h1 = document.querySelector(".head-1"); //head
let h2 = document.querySelector(".head-2");
let h3 = document.querySelector(".head-3");
let h4 = document.querySelector(".head-4");
let h5 = document.querySelector(".head-5");
let h6 = document.querySelector(".head-6");
let h7 = document.querySelector(".head-7");
let h8 = document.querySelector(".head-8");
let b1 = document.querySelector(".buttons-1"); //button
let b2 = document.querySelector(".buttons-2");
let b3 = document.querySelector(".buttons-3");
let b4 = document.querySelector(".buttons-4");
let b5 = document.querySelector(".buttons-5");
let b6 = document.querySelector(".buttons-6");
let b7 = document.querySelector(".buttons-7");
let b8 = document.querySelector(".buttons-8");

main.addEventListener("scroll", () => {
    console.log(main.scrollTop);
    let unit = main.scrollTop;
    if(unit == 0 && unit < 100){
        h1.classList.remove("hide");
        b1.classList.remove("hide");
    }
    else{
        h1.classList.add("hide");
        b1.classList.add("hide");
    }
    if(unit > 600 && unit < 800){
        h2.classList.add("active");
        b2.classList.add("active");
    }
    else{
        h2.classList.remove("active");
        b2.classList.remove("active");
    }
    if(unit > 800 && unit < 1600){
        h3.classList.add("active");
        b3.classList.add("active");
    }
    else{
        h3.classList.remove("active");
        b3.classList.remove("active");
    }
    if(unit > 1600 && unit < 2300){
        h4.classList.add("active");
        b4.classList.add("active");
    }
    else{
        h4.classList.remove("active");
        b4.classList.remove("active");
    }
    if(unit > 2300 && unit < 3100){
        h5.classList.add("active");
        b5.classList.add("active");
    }
    else{
        h5.classList.remove("active");
        b5.classList.remove("active");
    }
    if(unit > 3100 && unit < 3800){
        h6.classList.add("active");
        b6.classList.add("active");
    }
    else{
        h6.classList.remove("active");
        b6.classList.remove("active");
    }
    if(unit > 3800 && unit < 4600){
        h7.classList.add("active");
        b7.classList.add("active");
    }
    else{
        h7.classList.remove("active");
        b7.classList.remove("active");
    }
    if(unit > 4600 && unit < 5300){
        h8.classList.add("active");
        b8.classList.add("active");
    }
    else{
        h8.classList.remove("active");
        b8.classList.remove("active");
    }
})