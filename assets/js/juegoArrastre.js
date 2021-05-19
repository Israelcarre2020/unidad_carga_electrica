var intentosJuegoArrastre = 0;

$(document).ready(function() {
    iniciarJuegoArrastre("juegoArrastre");
})

function iniciarJuegoArrastre(idContenedorJuego) {
    document.getElementById(idContenedorJuego).innerHTML = 
    `
        <div class="col-md-3">
            <button id="conceptoArrastre1" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Parámetros eléctricos</button>
            <button id="conceptoArrastre2" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Esquema de conexión</button>
            <button id="conceptoArrastre3" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Técnicas de las máquinas</button>
            <button id="conceptoArrastre4" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Átomos</button>
            <button id="conceptoArrastre5" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Watts</button>
        </div>
        <div class="col-md-3">
            <button id="conceptoArrastre6" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Sistemas polifásicos</button>
            <button id="conceptoArrastre7" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">Medida directa</button>
            <button id="conceptoArrastre8" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">simétrica de medidor monofásico</button>
            <button id="conceptoArrastre9" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">voltajes</button>
            <button id="conceptoArrastre10" class="btn btn-warning oculto_arrastre" style="width: 100%; margin-top: 10px;"  draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" class="out">bifilar en medición directa</button>
        </div>

        <div class="col-md-6">
            <div id="contenedor" 
                class="row caja-texto-y" 
                style="border-style: dashed; min-height: 350px; text-align:center"
                ondrop="drop(this, event)" 
                ondragenter="dragenter(this, event)" 
                ondragover="dragover(event)" 
                ondragleave="dragleave(this, event)">
                <p style="width:100%; text-align:center"></div>
            </div>
        </div>
        <div class="col-md-11" style="text-align: right; margin-top: 20px;">
            <button onclick="reiniciarJuegoArrastre('${idContenedorJuego}')" class="btn btn-primary">Reiniciar</button>
            <button onclick="validarJuegoArrastre('${idContenedorJuego}')" class="btn btn-warning">Verficar</button>
        </div>    
    `;    
}

function dragstart(caja, event) {
    // el elemento a arrastrar
    document.getElementById(caja.id).className = "in btn btn-warning";
    event.dataTransfer.setData('Data', caja.id);
}

function drag(caja, event) {
    return false;
}

function dragend(caja, event) {
    document.getElementById(caja.id).className = "out btn btn-warning";
    return false;
}

function dragenter(target, event) {
    document.getElementById("contenedor").className = "inContainer caja-texto-y";
    return false;
}

function dragleave(target, event) {
    document.getElementById("contenedor").className = "outContainer caja-texto-y";
    return false;
}

function dragover(event) {
    event.preventDefault();

    return false;
}

function drop(target, event) {
    // obtenemos los datos
    var caja = event.dataTransfer.getData('Data');
    document.getElementById("contenedor").className = "outContainer caja-texto-y";
    // agregamos el elemento de arrastre al contenedor
    target.appendChild(document.getElementById(caja));
}

function reiniciarJuegoArrastre(idContenedorJuego) {
    iniciarJuegoArrastre("juegoArrastre");
}

function validarJuegoArrastre(idContenedorJuego) {
    content = document.getElementById("contenedor");
    buttons = content.getElementsByTagName("button");    

    if(buttons.length > 6) {
        Swal.fire({
            title: '¡Lo siento!',
            text: 'Intentálo nuevamente',
            icon: 'warning'
        }).then((result) => {
            if (result.isConfirmed) {
                reiniciarJuegoArrastre();
            }
        });
        intentosJuegoArrastre++;        
        alcanzoLimite();
    } else if(buttons.length < 6) {
        Swal.fire({
            title: '¡Lo siento!',
            text: 'Intentálo nuevamente',
            icon: 'warning'
        }).then((result) => {
            if (result.isConfirmed) {
                reiniciarJuegoArrastre();
            }
        });
        intentosJuegoArrastre++;       
        alcanzoLimite();
    } else {
        var exitoso = true;

        for (let index = 0; index < buttons.length; index++) {
            const button = buttons[index];
            if (button.getAttribute("id") == "conceptoArrastre2" && "conceptoArrastre7"&&"conceptoArrastre8"&&"conceptoArrastre10") {
                exitoso = false;
            }       
        }

        if(exitoso) {
            Swal.fire({
                title: '¡Buen trabajo!',
                text: 'Has identificado correctamente todos los conceptos básicos de magnetismo',
                icon: 'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    reiniciarJuegoArrastre();
                }
            })            
        } else {
            Swal.fire({
                title: '¡Lo siento!',
                text: 'Intentálo nuevamente',
                icon: 'warning'
            }).then((result) => {
                if (result.isConfirmed) {
                    reiniciarJuegoArrastre();
                }
            });
            intentosJuegoArrastre++;
            alcanzoLimite();
        }
    }
}

function alcanzoLimite(){
    if(intentosJuegoArrastre >= 4){
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        )
        $(".oculto_arrastre").hide();
        goToActivities(); 
    }
}