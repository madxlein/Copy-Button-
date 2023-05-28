const textarea = document.querySelector(".primertexto");
const mensaje = document.querySelector(".mensaje");

//La letra "a" es convertida para "ai"
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptado
}

//copyButton with addEventListener
const copyButton = document.getElementById('copiar');

copyButton.addEventListener('click', () => {
    const content = document.getElementById('mensaje').value;
    navigator.clipboard.writeText(content);
    alert("Texto copiado al porta papeles: " + content);
});

//copyButton with function
/*function copyText() {
    var copiarTexto = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(copiarTexto);
}*/
