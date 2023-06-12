//Task_4
/*Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.
При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.*/

function submitNumbers() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);

    if (isNaN(number1) || isNaN(number2)) {
      document.getElementById('result').innerHTML =
        'Одно из чисел вне диапазона от 100 до 300 или введено не число';
      return;
    }

    if (number1 < 100 || number1 > 300 || number2 < 100 || number2 > 300) {
      document.getElementById('result').innerHTML =
        'Одно из чисел вне диапазона от 100 до 300';
      return;
    }

    var url = 'https://picsum.photos/' + number1 + '/' + number2;

    fetch(url)
      .then(function (response) {
        var img = document.createElement('img');
        img.src = response.url;
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').appendChild(img);
      })
      .catch(function (error) {
        console.log('Error:', error);
      });
  }