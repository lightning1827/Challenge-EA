const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    const cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    let textoFinal = "";

    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case "a":
                textoFinal += "ai";
                break;
            case "e":
                textoFinal += "enter";
                break;
            case "i":
                textoFinal += "imes";
                break;
            case "o":
                textoFinal += "ober";
                break;
            case "u":
                textoFinal += "ufat";
                break;
            default:
                textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let textoFinal = "";

    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case "a":
                textoFinal += "a";
                i += 1;
                break;
            case "e":
                textoFinal += "e";
                i += 4;
                break;
            case "i":
                textoFinal += "i";
                i += 3;
                break;
            case "o":
                textoFinal += "o";
                i += 3;
                break;
            case "u":
                textoFinal += "u";
                i += 3;
                break;
            default:
                textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    const contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles");
});
