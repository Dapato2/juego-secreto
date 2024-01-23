let numeroMaximo = 1000;   
let listaNumeros = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')} `)
        document.getElementById("reiniciar").removeAttribute('disabled')
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor")
        }else{
            asignarTextoElemento("p","El numero secreto es mayor")
        }
    }
    intentos++;
    vaciarCaja();
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    vaciarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true)

}

function vaciarCaja() {
    let cajaVacia = document.getElementById("valorUsuario").value = "";
    
}

function generarNumeroSecreto() {
let numeroGenerado =  Math.floor(Math.random()*numeroMaximo )+1;
console.log(listaNumeros)

if (listaNumeros.length == numeroMaximo) {
    asignarTextoElemento('p',"Ya haz sorteado todos los numero posibles!!")
}else{

if(listaNumeros.includes(numeroGenerado)){
    return generarNumeroSecreto();
}else{
    listaNumeros.push(numeroGenerado);
    return numeroGenerado;
}
}
}

condicionesIniciales();