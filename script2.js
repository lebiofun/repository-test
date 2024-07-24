let button = document.getElementById("cover");
let count = 0;

function print () {
    count = count + 1;
    console.log("Кол-во нажатий кнопки: " + count);
}
button.addEventListener("click", print);
