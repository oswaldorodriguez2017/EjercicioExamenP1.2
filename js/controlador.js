const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://fakestoreapi.com/products", requestOptions)
    .then(response => response.json())
    .then(Tabla => {
        const ConsultaApi = document.getElementById("ConsultaApi");

        Tabla.forEach(Fila => {
            const Elemento = document.createElement("div");
            Elemento.className = "col-md-4 mb-4"; // Añadir clase para el espaciado entre tarjetas

            Elemento.innerHTML = `
                <div class="card h-100">
                    <img src="${Fila.image}" class="card-img-top" alt="${Fila.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${Fila.title}</h5>
                        <p class="card-text">${Fila.description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Precio: $${Fila.price}</small>
                        <br>
                        <small class="text-muted">Categoría: ${Fila.category}</small>
                    </div>
                </div>
            `;

            ConsultaApi.appendChild(Elemento);
        });
    })
    .catch(error => console.error(error));

    
    
     
    