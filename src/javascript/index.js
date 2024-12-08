$(document).ready(function() {
    // Creación de un arreglo de solicitudes
    let solicitudes = [{
        "id": 1, 
        "nombre": "Juan",
        "apellido": "García"
    }, {
        "id": 2, 
        "nombre": "Antonio",
        "apellido": "Pérez"
    }, {
        "id": 3, 
        "nombre": "Encarnación",
        "apellido": "Martínez"
    }];

    // Recorrer arreglo 'solicitudes' con ciclo for y método append
    for (let i = 0; i < solicitudes.length; i++) {
        $("#maestro").append(
            $("<li>")  // Atributos a aplicar a la etiqueta <li>
                .text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido) // Concatena nombre y apellidos y los pone en el atributo texto del elemento <li>
                .attr("id", "id" + solicitudes[i].id)  // Asignar al atributo id de <li> una cadena "id"+el id del elemento del array. id1, id2...
                .data("solicitud", solicitudes[i])    // Guardar los datos completos de la solicitud en el <li> ** DATA **
        );
    }

    // Programar el evento click sobre un elemento de la lista <li>
    $("li").on("click", function() {
        // Cambiar el estado de visibilidad de la sección 'Detalle'
        if ($("#detalle").is(':visible')) {
            $("#detalle").hide();
        } else {
            $("#detalle").show();
                
            // Obtener los datos de la solicitud desde el atributo DATA. Guardados al generar la lista.
            let solicitud = $(this).data("solicitud");

            // Llenar los campos con la información de la solicitud
        //    $("#nombre").css("font-family", "Georgia, serif"); // No va
        //    $("#nombre").css("font-family", "'FreeSans Oblique', serif"); // No va

            $("#id").val(solicitud.id);    
            $("#nombre").val(solicitud.nombre);
            $("#apellido").val(solicitud.apellido);    

            // 'val()' para elementos de form, select, input
            // 'text()' para span,li, div
        }
    });

    // Cambio de color de fondo al pasar el mouse sobre los <li>
    $("li").hover(
        function() {
            // Mouse enter (cuando el ratón pasa sobre el <li>)
            $(this).css("background-color", "lightgray");
        }, 
        function() {
            // Mouse leave (cuando el ratón deja el <li>)
            $(this).css("background-color", "white");
        }
    );

    console.log('probando console.log');
});
