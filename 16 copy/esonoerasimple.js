const elementosTd = document.getElementsByTagName('td');

const colorPredeterminado = 'cornflowerblue';
const colorPresionado = 'blue';

for (let i = 0; i < elementosTd.length; i++) {
    elementosTd[i].addEventListener('mousedown', function () {
        this.style.backgroundColor = colorPresionado;
    });

    elementosTd[i].addEventListener('mouseup', function () {
        this.style.backgroundColor = colorPredeterminado;
    });
}

