function redirection(){
    location.href = "detalle.html"
}

function cargaJsonFijo(){
    fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics').then(response => response.json()).then(json => {
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('Cantidad de productos en stock: ' + json.amount_of_products));
    
        document.getElementById('txtCantidadStock').appendChild(p);
    });
}
cargaJsonFijo();

fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products').then(response => response.json()).then(json => {
    for(let producto of json) {
        let imagen = document.createElement('img');
        imagen.src = producto.image_url;
        imagen.className = 'img_note';
        imagen.alt = 'Imagen de notebook';

        let nombre = document.createElement('p');
        nombre.appendChild(document.createTextNode(producto.title));

        let descripcion = document.createElement('p');
        descripcion.appendChild(document.createTextNode(producto.description));

        let link = document.createElement('a');
        link.appendChild(document.createTextNode("Página Oficial"));
        link.href = producto.factory_url;
        link.target = '_blank';

        let precio = document.createElement('p');
        precio.appendChild(document.createTextNode(producto.price));

        let div = document.createElement('div');
        div.appendChild(imagen);
        div.appendChild(nombre);
        div.appendChild(descripcion);
        div.appendChild(link);
        div.appendChild(precio);
        div.className = 'product';

        document.getElementById('product-list').appendChild(div);
    }
});

