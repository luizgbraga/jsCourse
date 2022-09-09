const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); // .open(method, url, async) inicializa uma request
    xhr.send(); // .send() manda a request

    xhr.addEventListener('load', () => {
        obj.sucess(xhr.responseText); // .responseText é o texto recebido do server após a resposta do request
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el)
    }
})

function carregaPagina(el) {
    const href = el.getAttribute('href');
    console.log(href);

    request({
        method: 'GET',
        url: href,
        sucess(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }
    })
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}