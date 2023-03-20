console.log("Cześć wszystkim!");

let przycisk = document.querySelector(".przycisk");
let naglowek2 = document.querySelector(".naglowek2");

przycisk.addEventListener("click", () => {
    naglowek2.remove();
});

console.log(przycisk);