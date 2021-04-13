
const URL_API = "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

const products = [];

function Connect() {

    let request = new XMLHttpRequest();
    request.open("GET", URL_API, false);
    request.send();

    return request.responseText;
}

// console.log(Connect());

