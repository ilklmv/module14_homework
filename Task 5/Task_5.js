//Task_5
/*Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».

При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.*/

function handleRequest () {
    var pageNumber = parseInt(document.getElementById('pageNumber').value);
    var limit = parseInt(document.getElementById('limit').value);

    if (isNaN(pageNumber) || isNaN(limit) || pageNumber <1 || pageNumber > 10 || limit < 1 || limit > 10){
        document.getElementById('result').innerHTML = 'Номер страницы и лимит вне диапазона';
        return;
    }

    if (pageNumber < 1 || pageNumber > 10) {
        document.getElementById('result').innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        return;
    }

    if (limit < 1 || limit > 10) {
        document.getElementById('result').innerHTML = 'Лимит вне диапазона от 1 до 10';
        return;
    }

    var url = 'https://picsum.photos/v2/list?page=' + pageNumber + '&limit=' + limit;

    fetch(url)
    .then(function (responce) {
        return responce.json();
    })
    .then(function (data) {
        var images = data.map(function(item) {
            return '<img src="' + item.download_url1 + '">';
        });

    document.getElementById('result').innerHTML = images.join('');
    localStorage.setItem('lastRequest', JSON.stringify(data));
    })

    .catch(function (error) {
        console.log('Error:', error);
    });
}

    window.onload = function () {
        const lastRequest = localStorage.getItem('lastRequest');
        if(lastRequest) {
            var data = JSON.parse(lastRequest);
            var images = data.map(function (item){
                return '<img src="' + item.download_url1 + '">';
            });
            document.getElementById('result').innerHTML = images.join('');
        }
    };