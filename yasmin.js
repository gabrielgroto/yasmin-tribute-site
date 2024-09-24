const bnt = document.querySelector("#btnPesquisar");
const nameM = prompt("Coloque aqui o nome da mulher do Gabriel:");
const textDiv = document.querySelector(".texto");
const text = document.createElement("h1");
textDiv.appendChild(text);
bnt.addEventListener("click", functionClick);
function functionClick (event) {
    event.preventDefault();
    if (nameM === 'Yasmin Kuhnen') {
        alert(`O nome da mulher do Gabriel está correto, ela é a ${nameM}!`);
        text.innerText = 'Te amo!';
    }
    else {
        alert('O nome da mulher do Gabriel está incorreto! Corrige essa porra.')
        text.innerText = 'Sai daqui cadela';
        return false
    }
}
