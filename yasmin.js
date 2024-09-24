const bnt = document.querySelector("#btnPesquisar");
const nameM = prompt("Coloque aqui o nome da mulher do Gabriel:")
bnt.addEventListener("click", functionClick);
function functionClick (event) {
    event.preventDefault();
    if (nameM === 'Yasmin Kuhnen') {
        alert(`O nome da mulher do Gabriel está correto, ela é a ${nameM}!`)
    }
    else {
        alert('O nome da mulher do Gabriel está incorreto! Corrige essa porra.')
        return false
    }
}
