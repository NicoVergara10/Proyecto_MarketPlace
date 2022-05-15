fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1').then(response => response.json()).then(json => {
    let titulo = document.getElementById('title');
    titulo.appendChild(document.createTextNode(json.title));

    let descripcion = document.getElementById('description');
    descripcion.appendChild(document.createTextNode(json.description));
    
    let imagen = document.getElementById('image_url');
    imagen.src =json.image_url;

    let webOficial = document.getElementById('factory_url');
    webOficial.href = json.factory_url;

    let precio = document.getElementById('price');
    precio.appendChild(document.createTextNode(json.price));
});