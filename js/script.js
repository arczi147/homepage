const welcome = () => {
    console.log("Cześć wszystkim!");
};

const removeHeader = () => {
    const naglowek2 = document.querySelector(".naglowek2");
    naglowek2.remove();
};

const init = () => {
    const przycisk = document.querySelector(".przycisk");
    przycisk.addEventListener("click", removeHeader);

    welcome();
};

init();