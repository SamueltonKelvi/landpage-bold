/* Conexão com API */
const URL_PAGE1 = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";
const URL_PAGE2 = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2";
const NEXT_PAGE = false;
const products = [];

function Connect() {

    try {
        let request = new XMLHttpRequest();

        if(NEXT_PAGE){
            request.open("GET", URL_PAGE2, false);
            request.send();

            let data2 = JSON.parse(request.responseText);
            products.push(data2);
        } else {
            request.open("GET", URL_PAGE1, false);
            request.send();

            let data1 = JSON.parse(request.responseText);
            products.push(data1);
        }

    } catch (error) {
        products.push([]);
        console.log(`Error ${error}`);
    }

}

const data = Connect();
products.push(data);
// console.log(products[0].products[0].name);

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
if (products.length === 0) {
    listUl.innerHTML = newLi = '<p>Nenhuma lista</p>';
} else {

    let listContainer = getId('list-products');
    let li = document.createElement('li');

    for(let index = 0; index < products.length; index++){

        let index = 0;

        let imageProducts = products[index].products[index].image;
        let nameProducts = products[index].products[index].name;
        let descriptionProducts = products[index].products[index].description;
        let oldPriceProducts = products[index].products[index].oldPrice;
        let priceProducts = products[index].products[index].price;

        li.innerHTML = `
            <div id="aside-div">
                <figure>
                    <img id="img-item" src="${imageProducts}" />
                </figure>
                <article id="article-list">
                    <h2 id="name-item">${nameProducts}</h2>
                    <p id="text-item">${descriptionProducts}</p>
                    <span id="value-before">De: R$ ${oldPriceProducts}</span>
                    <h1 id="value-now">Por: R$ ${priceProducts}</h1>
                    <span id="value-or">ou 2x de R$ 21,00</span>
                </article>
                <button id="aside-button">Comprar</button>
            </div>
        `;

        listContainer.appendChild(li);

    }

}

function nextPageList() {
    return NEXT_PAGE = true;
}

console.log(products[0].nextPage);

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