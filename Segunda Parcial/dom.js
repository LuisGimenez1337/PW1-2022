var contenedor = document.querySelector('#contenedor');
init();
function init() {
    var botones = document.querySelectorAll("#botones a");
    [].forEach.call(botones, function (btn) {
        btn.addEventListener('click', crearElemento);
    });
    document.querySelector("#btnEliminar")
            .addEventListener('click', eliminarElemento);
    document.querySelector('#elemento')
            .addEventListener('change', cargarPropiedades);
    document.querySelector('#propiedades')
            .addEventListener('change', cargarValores);
    document.querySelector("#btnAplicar")
            .addEventListener('click', aplicarCSS);
}
function crearElemento(e) {
    var nuevoElemento = document.createElement(e.target.id);
    switch (e.target.id) {
        case 'button':
            nuevoElemento.innerHTML = 'Este es un boton';
            break;
        case 'input':
            nuevoElemento.type = 'text';
            nuevoElemento.value = 'Este es un cuadro de texto';
            break;
        case 'table':
            for (var i = 0; i < 5; i++) {
                var fila = nuevoElemento.insertRow(i); //Inserta fila
                for (var j = 0; j < 5; j++) {
                    var columna = fila.insertCell(j);
                    columna.innerHTML = 'Celda ' + i + j; //Inserta columna
                }
            }
            break;
        case 'a':
            nuevoElemento.href = '#';
            nuevoElemento.innerHTML = 'Este es un link';
            break;
        case 'select':
            for (var i = 0; i < 5; i++)
                nuevoElemento.add(new Option('Opcion ' + (i + 1), i));
            break;
        default:
            break;
    }
    contenedor.appendChild(nuevoElemento);
    cargarElementos();
}
function cargarElementos() {
    var selElemento = document.querySelector('#elemento');
    selElemento.innerHTML = '';
    selElemento.add(new Option('Seleccionar elemento', '-1'));
    for (var i = 0; i < contenedor.children.length; i++)
        selElemento.add(new Option(contenedor.children[i].localName, i));
}
function eliminarElemento() {
    var selElemento = document.querySelector('#elemento');
    if (selElemento.value === '-1') {
        return alert('Seleccione elemento a eliminar');
    }
    contenedor.removeChild(contenedor.children[selElemento.value]);
    cargarElementos();
}
function cargarPropiedades() {
    var selElemento = document.querySelector('#elemento');
    var selPropiedades = document.querySelector('#propiedades');
    selPropiedades.innerHTML = '';
    var combo = document.getElementById("elemento");
    var selected = combo.options[combo.selectedIndex].text;
    switch (selected) {
            case 'button':
                selPropiedades.add(new Option('Seleccionar propiedad', '-1'));
                selPropiedades.add(new Option('Borde', 'border'));
                selPropiedades.add(new Option('Color', 'color'));
                selPropiedades.add(new Option('Animacion', 'animation'));
                selPropiedades.add(new Option('Fondo', 'backgroundColor'));
                selPropiedades.add(new Option('Tamaño fuente', 'fontSize'));
                selPropiedades.add(new Option('Tipo de fuente', 'fontFamily'));
                selPropiedades.add(new Option('Radio de Borde', 'borderRadius'));
            break;
            case 'input':
                selPropiedades.add(new Option('Seleccionar propiedad', '-1'));
                selPropiedades.add(new Option('Borde', 'border'));
                selPropiedades.add(new Option('Color', 'color'));
                selPropiedades.add(new Option('Animacion', 'animation'));
                selPropiedades.add(new Option('Fondo', 'backgroundColor'));
                selPropiedades.add(new Option('Tamaño fuente', 'fontSize'));
                selPropiedades.add(new Option('Tipo de fuente', 'fontFamily'));
                selPropiedades.add(new Option('Decoracion del texto', 'textDecoration'));
                selPropiedades.add(new Option('Transformar texto', 'textTransform'));
            break;
            case 'table':
                selPropiedades.add(new Option('Seleccionar propiedad', '-1'));
                selPropiedades.add(new Option('Borde', 'border'));
                selPropiedades.add(new Option('Color', 'color'));
                selPropiedades.add(new Option('Animacion', 'animation'));
                selPropiedades.add(new Option('Fondo', 'backgroundColor'));
                selPropiedades.add(new Option('Tamaño fuente', 'fontSize'));
                
            break;
            case 'a':
                selPropiedades.add(new Option('Seleccionar propiedad', '-1'));
                selPropiedades.add(new Option('Borde', 'border'));
                selPropiedades.add(new Option('Color', 'color'));
                selPropiedades.add(new Option('Animacion', 'animation'));
                selPropiedades.add(new Option('Fondo', 'backgroundColor'));
                selPropiedades.add(new Option('Tamaño fuente', 'fontSize'));
                selPropiedades.add(new Option('Tipo de fuente', 'fontFamily'));
            break;
            case 'select':
                selPropiedades.add(new Option('Seleccionar propiedad', '-1'));
                selPropiedades.add(new Option('Borde', 'border'));
                selPropiedades.add(new Option('Color', 'color'));
                selPropiedades.add(new Option('Animacion', 'animation'));
                selPropiedades.add(new Option('Fondo', 'backgroundColor'));
                selPropiedades.add(new Option('Tamaño fuente', 'fontSize'));
                selPropiedades.add(new Option('Tipo de fuente', 'fontFamily'));
                selPropiedades.add(new Option('Mas elementos', 'more'));
            break;
            default:

            break;
    }
    

}
function cargarValores() {
    var selPropiedades = document.querySelector('#propiedades');
    var selValores = document.querySelector('#valor');
    if (selPropiedades.value === '-1') {
        alert('Seleccione propiedad');
    }
    selValores.innerHTML = '';
    selValores.add(new Option('Seleccionar valor', '-1'));
    switch (selPropiedades.value) {
        case 'border':
            selValores.add(new Option('1px solid black'));
            selValores.add(new Option('2px dotted red'));
            selValores.add(new Option('5px dashed green'));
            selValores.add(new Option('7px solid #ddd'));
            selValores.add(new Option('none'));
            break;
        case 'borderRadius':
            selValores.add(new Option('0px'));
            selValores.add(new Option('5px'));
            selValores.add(new Option('10px'));

            break;
        case 'textDecoration':
            selValores.add(new Option('overline'));
            selValores.add(new Option('underline'));
            selValores.add(new Option('line-through'));

            break;
        case 'textTransform':
            selValores.add(new Option('uppercase'));
            selValores.add(new Option('lowercase'));
            selValores.add(new Option('capitalize'));

            break;
        case 'color':
            selValores.add(new Option('black'));
            selValores.add(new Option('blueviolet'));
            selValores.add(new Option('coral'));
            selValores.add(new Option('#999999'));
            selValores.add(new Option('rgb(0,0,255)'));
            break;
        case 'animation':
            selValores.add(new Option('animacion1 5s infinite'));
            selValores.add(new Option('animacion 5s infinite'));
            selValores.add(new Option('animacion3 5s infinite'));
            break;
        case 'backgroundColor':
                selValores.add(new Option('blue'));
                selValores.add(new Option('green'));
                selValores.add(new Option('red'));
                selValores.add(new Option('black'));
                break;
        case 'fontSize':
                selValores.add(new Option('15px'));
                selValores.add(new Option('20px'));
                selValores.add(new Option('40px'));
                selValores.add(new Option('80px'));
                break;
        case 'fontFamily':
                selValores.add(new Option('Arial'));
                selValores.add(new Option('Monaco'));
                selValores.add(new Option('Papyrus'));
                selValores.add(new Option('Georgia'));
                break;
            case 'more':
                selValores.add(new Option('1'));
                selValores.add(new Option('2'));
                selValores.add(new Option('3'));
                
                break;

        default:

            break;
    }
}

function aplicarCSS() {
    var selElemento = document.querySelector('#elemento');
    var selPropiedades = document.querySelector('#propiedades');
    var selValores = document.querySelector('#valor');
    if (selElemento.value === '-1')
        alert('Seleccione elemento');
    else if (selPropiedades.value === '-1')
        alert('Seleccione propiedad');
    else if (selValores.value === '-1')
        alert('Seleccione valor');
    if (selPropiedades.value === 'backgroundColor'){
        contenedor.children[selElemento.value].style.animation= "";
    }
    if (selPropiedades.value === 'animation'){
        contenedor.children[selElemento.value].style.backgroundColor= "white";
    }
    if (selPropiedades.value === 'more'){
        var elemento = contenedor.children[selElemento.value].options.length;
        switch (selValores.value) {
            
            case '1':
                
                contenedor.children[selElemento.value].add(new Option('Opcion ' + (elemento+ 1), elemento));
                break;
                case '2':
                
                contenedor.children[selElemento.value].add(new Option('Opcion ' + (elemento+ 1), elemento));
                var elemento = contenedor.children[selElemento.value].options.length;
                contenedor.children[selElemento.value].add(new Option('Opcion ' + (elemento+ 1), elemento));
                break;
                case '3':
                
                contenedor.children[selElemento.value].add(new Option('Opcion ' + (elemento+ 1), elemento));
                var elemento = contenedor.children[selElemento.value].options.length;
                contenedor.children[selElemento.value].add(new Option('Opcion ' + (elemento+ 1), elemento));
                var elemento = contenedor.children[selElemento.value].options.length;
                contenedor.children[selElemento.value].add(new Option('Opcion ' + (elemento+ 1), elemento));
                break;

        default:

            break;
    }
        
    }else{
        contenedor.children[selElemento.value]
            .style[selPropiedades.value]=selValores.value;
    }    
       
    
}