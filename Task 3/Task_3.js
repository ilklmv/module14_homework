//Task_3
/*Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
- Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
- Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.*/

function checkNumber () {
   const number = parseInt(document.querySelector("number").value);

    if (number >= 1 && <= 10) {
        const xhr = new XMLHttpRequest ();
        xhr.open ("GET", "https://picsum.photos/v2/list?limit=" + number, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse (xhr.responseText);
                console.log (response);
            }
        };
        xhr.send ();
    } else {
        document.querySelector("number").textContent = "Число вне диапазона от 1 до 10";
    }
}