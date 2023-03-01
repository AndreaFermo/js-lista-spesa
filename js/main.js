const thingsToBuy = ['Pasta', 'Patate', 'Guanciale', 'Ricotta', 'Banane'];

const domList = document.querySelector('#myList');

let i = 0;

while (i < thingsToBuy.length) {
    domList.innerHTML += `<li>${thingsToBuy[i]}</li>`;
    i++;
}