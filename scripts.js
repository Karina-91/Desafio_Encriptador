// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");
    const encryptZone = document.getElementById("encrypt-zone");
    const decryptZone = document.getElementById("decrypt-zone");

    // Función para encriptar el texto
    function encryptText(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Función para desencriptar el texto
    function decryptText(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Función para manejar el evento dragover
    function handleDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        event.target.classList.add('dragover');
    }

    // Función para manejar el evento dragleave
    function handleDragLeave(event) {
        event.target.classList.remove('dragover');
    }

    // Función para manejar el evento drop
    function handleDrop(event, action) {
        event.preventDefault();
        event.target.classList.remove('dragover');
        const text = inputText.value.toLowerCase();
        if (text) {
            const result = action === 'encrypt' ? encryptText(text) : decryptText(text);
            outputText.textContent = result;
        } else {
            outputText.textContent = "No se encontró ningún mensaje.";
        }
    }

    // Asociar eventos a las zonas de drop
    encryptZone.addEventListener('dragover', handleDragOver);
    encryptZone.addEventListener('dragleave', handleDragLeave);
    encryptZone.addEventListener('drop', function(event) {
        handleDrop(event, 'encrypt');
    });

    decryptZone.addEventListener('dragover', handleDragOver);
    decryptZone.addEventListener('dragleave', handleDragLeave);
    decryptZone.addEventListener('drop', function(event) {
        handleDrop(event, 'decrypt');
    });
});
