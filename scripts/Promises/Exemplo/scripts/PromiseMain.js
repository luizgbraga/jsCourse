const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            resolve(xhr.responseText);
        })
    }
)}

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
    })
    .then(response => {
        carregaResultado(response)
    })
    .catch(error => console.log(error));
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}