
const URL_API = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

const products = [];

function Connect() {
    let request = new XMLHttpRequest();
    request.open("GET", URL_API, false);
    request.send();

    return JSON.parse(request.responseText);
}

const data = Connect();
products.push(data);

let list = document.getElementById('#list-products');

let valueBefore = document.getElementById('#value-before');
let valueNow = document.getElementById('#value-now');
let valueOr = document.getElementById('#value-or');
let newItem = document.createElement('li');

products.map((item, index) => {
    newItem.innerHTML = index;
    newItem.innerHTML = item.name;
});

const nameForm1 = document.getElementsByName('name').value;
const emailForm1 = document.getElementsByName('email').value;
const cpfForm1 = document.getElementsByName('cpf').value;
const mascForm1 = document.getElementsByName('masc').value;
const femForm1 = document.getElementsByName('fem').value;

const formRow1Action = (e) => {
    e.preventDefault();
    alert('ok')
}