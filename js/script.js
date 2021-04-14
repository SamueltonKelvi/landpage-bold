
const URL_API = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

function Connect() {
    let request = new XMLHttpRequest();
    request.open("GET", URL_API, false);
    request.send();

    return JSON.parse(request.responseText);
}

const products = [];
const data = Connect();
products.push(data);


/* Função formulário 01 */

function formRow1Action() {
    
    let nameForm1 = document.getElementById('name').value;
    let emailForm1 = document.getElementById('email').value;
    let cpfForm1 = document.getElementById('cpf').value;
    
    let mascForm1 = document.getElementById('masc').checked;
    let femForm1 = document.getElementById('fem').checked;

    if(nameForm1 === '' || emailForm1 === '' || cpfForm1 === ''){
        return alert(`Preencha todos os campos`);
    } else {
        alert(`Seus dados: ${nameForm1}, ${emailForm1}, ${cpfForm1}`);
    }
    
    nameForm1 = '';
    emailForm1 = '';
    cpfForm1 = '';
}


/* Importando id's da lista de produtos */

let list = document.getElementById('#list-products');

let newList = document.createElement('li');
let valueBefore = document.getElementById('value-before');
let valueNow = document.getElementById('value-now');
let valueOr = document.getElementById('value-or');


/* Função formulário 02 */

function formRow2Action(){

    let nameForm2 = document.getElementById('brother').value;
    let emailForm2 = document.getElementById('email2').value;

    if(nameForm2 === '' || emailForm2 === ''){
        return alert(`Dados inválidos`);
    } else {
        alert(`Dados preenchidos: ${nameForm2}, ${emailForm2}`);
    }

    nameForm2 = '';
    emailForm2 = '';

}