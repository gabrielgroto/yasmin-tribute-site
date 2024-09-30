const bnt = document.querySelector("#btnPesquisar");
const nameM = prompt("Coloque aqui o nome da mulher do Gabriel Groto:");
const textDiv = document.querySelector(".texto");
const text = document.createElement("h1");
text.ClassList = "textoDiv";
textDiv.appendChild(text);
bnt.addEventListener("click", functionClick);
function functionClick(event) {
    event.preventDefault();
    if (nameM === 'Yasmin Kuhnen') {
        alert(`O nome da mulher do Gabriel Groto está correto, ela é a ${nameM}!`);
        text.innerText = 'Te amo, meu amor! S2';
    }
    else {
        alert('O nome da mulher do Gabriel Groto está incorreto, corrige essa porra!')
        text.innerText = 'Sai daqui sua cadela feiosa!';
        return false
    }
}
