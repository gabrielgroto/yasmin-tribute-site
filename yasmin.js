const bnt = document.querySelector("#btnPesquisar");
const nameM = prompt("Coloque aqui o nome da mulher do Gabriel:");
const textDiv = document.querySelector(".texto");
const text = document.createElement("h1");
text.ClassList = "textoDiv";
textDiv.appendChild(text);
bnt.addEventListener("click", functionClick);
function functionClick (event) {
    event.preventDefault();
    if (nameM === 'Yasmin Kuhnen') {
        alert(`O nome da mulher do Gabriel está correto, ela é a ${nameM}!`);
        text.innerText = 'Te amo amor! S2';
    }
    else {
        alert('O nome da mulher do Gabriel está incorreto! Corrige essa porra.')
        text.innerText = 'Sai daqui cadela feiosa!';
        return false
    }
}
