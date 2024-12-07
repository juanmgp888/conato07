
$(document).ready(function() {
    // Creación de un arreglo con clientes
    let solicitudes = [{
        "id": 1, 
        "nombre": "Juan",
        "apellido": "García",
        "articulos_cli": [1, 3] // Artículos comprados por el cliente
    }, {
        "id": 2, 
        "nombre": "Antonio",
        "apellido": "Pérez",
        "articulos_cli": [2]
    }, {
        "id": 3, 
        "nombre": "Encarnación",
        "apellido": "Martínez",
        "articulos_cli": [1, 2, 3]
    }];

    // Creación de un arreglo con artículos
    let articulos = [{
        "art_num": 1,
        "art_nombre": "pijama XL",
        "art_precio": 25.50
    },{
        "art_num": 2,
        "art_nombre": "balón rugby",
        "art_precio": 45
    },{
        "art_num": 3,
        "art_nombre": "pilas AA",
        "art_precio": 5
    }];

    // Recorrer el arreglo de clientes y mostrarlo en la lista 'maestro'
    for (let i = 0; i < solicitudes.length; i++) {
        $("#maestro").append(
            $("<li>")
                .text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido)
                .attr("id", "id" + solicitudes[i].id)   
        );
    }

    // Programar el evento click sobre un elemento de la lista <li>
    $("li").on("click", function(event) {
        let idCliente = $(this).attr("id").replace("id", ""); // Extrae el ID del cliente (ej. '1' de 'id1')
        let cliente = solicitudes.find(c => c.id == idCliente); // Encuentra el cliente por su ID

        // Cambiar el estado de visibilidad de la sección 'Detalle'
        if ($("#detalle").is(':visible')) {
            $("#detalle").hide();
        } else {
            $("#detalle").show();
            $("#id").val(cliente.id); // Asignar el ID del cliente al input
            $("#nombre").val(cliente.nombre);
            $("#apellido").val(cliente.apellido);

            // Mostrar los artículos comprados por el cliente
            let articulosComprados = cliente.articulos_cli.map(function(articuloId) {
                let articulo = articulos.find(a => a.art_num == articuloId);
                return articulo ? articulo.art_nombre + " - €" + articulo.art_precio : "Artículo no encontrado";
            });

            // Mostrar los artículos en el contenedor de detalle
            $("#articulo").empty(); // Limpiar lista anterior de artículos
            articulosComprados.forEach(function(articulo) {
                $("#articulo").append("<li>" + articulo + "</li>");
            });
        }
    });

    // Estilo al pasar el ratón
    $("li").hover(
        function() {
            $(this).css("background-color", "lightblue");
        }, 
        function() {
            $(this).css("background-color", "white");
        }
    );
});
