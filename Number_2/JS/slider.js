const hamB = document.querySelector(".exham");
const cont = document.querySelector(".excont");
const test = document.querySelector(".test");

hamB.addEventListener("click", () => {
     cont.classList.toggle("active");
     test.classList.toggle("noscroll");
     //still need to reenable scroll when switching sections via navbar
})


