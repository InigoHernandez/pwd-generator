const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordFields = {
  first: document.querySelector("#pwd-1"),
  second: document.querySelector("#pwd-2")
};

const settings = {
    length: document.querySelector("#select-length")
};

const iconButton = {
    first: document.querySelector("#icon-btn"),
    second: document.querySelector("#icon-btn1"),
} 

const toglStatus = document.querySelector("#togl-status");

console.log(toglStatus)

function pwdString() {
  let result = "";
  let length = parseInt(settings.length.value);
  for (let i = 0; i < length; i++) {
    if (toglStatus.checked === true) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    } else if (toglStatus.checked === false) {
        let randomIndex = Math.floor(Math.random() * (characters.length - 52));
        result += characters[randomIndex];
    }
  }
  return result;
}
  
 function pwdButton() {
    passwordFields.first.value = pwdString();
    passwordFields.second.value = pwdString();
    iconButton.first.disabled = false;
    iconButton.second.disabled = false;
    }
    
// Función auxiliar reutilizable para copiar texto
function copyTextToClipboard(text) {
    // 1. Intenta la forma moderna (Async Clipboard API)
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(() => alert("Copiado: " + text))
            .catch(err => {
                console.error("Falló el moderno, intentando fallback...", err);
                fallbackCopy(text);
            });
    } else {
        // 2. Si no es seguro o no existe API, usa fallback directo
        fallbackCopy(text);
    }
}

// El método "vieja escuela" (funciona en iframes y navegadores viejos)
function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Aseguramos que el elemento no sea visible para el usuario
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert("Copiado (fallback): " + text);
    } catch (err) {
        console.error('Error al copiar', err);
    }
    
    document.body.removeChild(textArea);
}

function copyPwd1() {
    // Usamos la nueva función robusta
    copyTextToClipboard(passwordFields.first.value);
}

function copyPwd2() {
    copyTextToClipboard(passwordFields.second.value);
}
    




