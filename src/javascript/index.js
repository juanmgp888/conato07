
$(document).ready(function() {
    // creación de un arreglo
    let solicitudes = [{
        "id": 1, 
        "nombre": "Juan",
        "apellido": "García",
        articulos_cli : [1,3]
    }, {
        "id": 2, 
        "nombre": "Antonio",
        "apellido": "Pérez"
    }, {
        "id": 3, 
        "nombre": "Encarnación",
        "apellido": "Martínez"
    }];

    let articulos = [{
        "art_num": 1,
        "art_nombre": "pijama XL",
        "art_precio": 25.50
    },{
        "art_num": 2,
        "art_nombre": "balón rugby",
        "art_precio": 45
        } , {
        "art_num": 3,
        "art_nombre": "pilas AA",
        "art_precio": 5
    }]

    // recorrer arreglo con ciclo for y método append
    for (i = 0 ; i < solicitudes.length; i++ ) {
        $("#maestro").append(
            $("<li>")  // atributos a aplicar a la etiqueta <li>
                .text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido)
                .val(solicitudes[i])    // Más usado en select e input que con li
                .attr("id", "id" + solicitudes[i].id)   
        );
    }


    // Programar el event click sobre un elemento de la lista <li>
    $("li").on("click", function(event) {
        // Cambiar el estado de visibilidad de la sección 'Detalle'
        if ($("#detalle").is(':visible')) {
            $("#detalle").hide();
        } else {
            $("#detalle").show();
        
        
            let solicitud = $(this).attr("id"); // toma el valor del atributo id del elemento <li>

            $("#id").val(solicitud);    // le da a valor/value del elemento con id="id" el valor de id
            $("#nombre").val(solicitudes[solicitud].nombre);
            $("#apellido").val("--- " + solicitud);    
            $("#articulo").val(solicitudes[solicitud].articulo);        
        }
        
    })


    alRecorrerMaestro(function()
    {
        $(this).css("background-color", "lightblue");
    })
    $("li").on("click",alRecorrerMaestro)

    $("li").hover(
        function() {
            // Mouse enter (cuando el ratón pasa sobre el <li>)
            $(this).css("background-color", "lightblue");
        }, 
        function() {
            // Mouse leave (cuando el ratón deja el <li>)
            $(this).css("background-color", "lightgray");
        }
    );
console.log('probando console.log');

});