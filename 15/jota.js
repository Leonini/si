const button1 = document.getElementById('b1');
const button2 = document.getElementById('b2');
const button3 = document.getElementById('b3');

button1.addEventListener('click', function () {
    button1.classList.toggle('red-button');
});
button2.addEventListener('click', function () {
    button2.classList.toggle('green-button');
});
button3.addEventListener('click', function () {
    button3.classList.toggle('orange-button');
});
