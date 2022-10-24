const btn = document.querySelector('#vBtn');
const text = document.querySelector('#texto');
const lista = document.querySelector('#lista');


//Lista de productos que se agregara al html productos
btn.addEventListener('click', () => {
    fetch('../listado.json')
    .then(response => response.json())
    .then(json =>{ 
        const post = json;
        lista.innerHTML="";
        post.forEach(post => {
            const li = document.createElement('li');
        li.innerHTML = `
        <h2 class="linkProducto" >${post.producto}</h2>
        `;
    
    lista.append(li);
        })
    })
    
});
   