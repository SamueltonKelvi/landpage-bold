/* Conexão com API */
const URL_API = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";
const products = [];

function Connect() {

    try {
        let request = new XMLHttpRequest();
        request.open("GET", URL_API, false);
        request.send();

        let data = JSON.parse(request.responseText);

        products.push(data);

    } catch (error) {
        products.push([]);
        console.log(`Error ${error}`);
    }

}

const data = Connect();
products.push(data);

/* getElementById => function */
function getId(id) {
    return document.getElementById(id);
}

/* Função formulário 01 */
function formRow1Action() {

    let nameForm1 = getId('name').value;
    let emailForm1 = getId('email').value;
    let cpfForm1 = getId('cpf').value;

    let mascForm1 = getId('masc').checked;
    let femForm1 = getId('fem').checked;

    if (nameForm1 === '' || emailForm1 === '' || cpfForm1 === '') {
        return alert(`Preencha todos os campos`);
    } else {
        alert(`Seus dados: ${nameForm1}, ${emailForm1}, ${cpfForm1}`);
    }

    nameForm1 = '';
    emailForm1 = '';
    cpfForm1 = '';
}

/* Importando id's da lista de produtos */
let listUl = getId('list-products');
let newLi = document.createElement('li');

function nextPageList(){

}

if (products.length === 0) {
    listUl.innerHTML = newLi = '<p>Nenhuma lista</p>';
} else {

    for(let index = 0; index < products.length; index++){

        products.map((item, index) => {
            newLi.innerHTML = `
                <div key="${index}" id="aside-div">
                    <figure>
                        <img id="img"
                            src="${item.products[index].image}" />
                    </figure>
                    <article id="article-list">
                        <h2 id="name-item">${item.products[index].name}</h2>
                            <p id="text-item">
                                Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se
                                trata.
                            </p>
                            <span id="value-before">De: R$ ${item.products[index].oldPrice}</span>
                            <h1 id="value-now">Por: R$ ${item.products[index].price}</h1>
                            <span id="value-or">ou 2x de R$ 21,00</span>
                    </article>
                    <button id="aside-button">Comprar</button>
                </div>
            `

            listUl.appendChild(newLi);
        });

    }

}

/* Função formulário 02 */

function formRow2Action() {

    let nameForm2 = getId('brother').value;
    let emailForm2 = getId('email2').value;

    if (nameForm2 === '' || emailForm2 === '') {
        return alert(`Dados inválidos`);
    } else {
        alert(`Dados preenchidos: ${nameForm2}, ${emailForm2}`);
    }

    nameForm2 = '';
    emailForm2 = '';

}