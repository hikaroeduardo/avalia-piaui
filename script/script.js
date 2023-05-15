const textArea = document.getElementById("textarea");

let btn1 = document.getElementById('btn-1')
let btn2 = document.getElementById('btn-2')
let btn3 = document.getElementById('btn-3')
let btn4 = document.getElementById('btn-4')
let btn5 = document.getElementById('btn-5')
let simFalta = document.getElementById('sim-falta')
let naoFalta = document.getElementById('nao-falta')
let simSatisfeito = document.getElementById('sim-satisfeito')
let naoSatisfeito = document.getElementById('nao-satisfeito')


let divPesquisa = document.getElementById('btn-pesquisa');
let divSentirFalta = document.getElementById('sentir-falta');
let divSatisfeito = document.getElementById('satisfeito');
let nome = document.getElementById('nome');
nome.innerText = "Hikaro"

let escalaBtn = "";
let sentirFaltaBtn = "";
let satisfeitoBtn = "";

function limparClasseEscala() {
    btn1.classList.remove('check')
    btn2.classList.remove('check')
    btn3.classList.remove('check')
    btn4.classList.remove('check')
    btn5.classList.remove('check')
}

function limparClasseFaltaAlgo() {
    simFalta.classList.remove('check')
    naoFalta.classList.remove('check')
}

function limparClasseSatisfeito() {
    simSatisfeito.classList.remove('check')
    naoSatisfeito.classList.remove('check')
}

function validacaoFormulario() {
    if(escalaBtn == "" || sentirFaltaBtn == "" || satisfeitoBtn == "") {
        alert("Preencha todos os campos do formulário!")
    } else {
        console.log(escalaBtn);
        console.log(sentirFaltaBtn);
        console.log(satisfeitoBtn);
        console.log(textArea.value);

        window.location.href = "../agradecimento.html";
    }
}

divPesquisa.addEventListener('click', function(e) {
    limparClasseEscala();

    let btnEscala = e.target.id;
    let btnCheck = document.getElementById(btnEscala)
    btnCheck.classList.toggle('check')
    escalaBtn = btnCheck.value;
})

divSentirFalta.addEventListener('click', function(e) {
    limparClasseFaltaAlgo();

    let btnSentir = e.target.id;
    let btnCheck = document.getElementById(btnSentir)
    btnCheck.classList.toggle('check')
    sentirFaltaBtn = btnCheck.value;
})

divSatisfeito.addEventListener('click', function(e) {
    limparClasseSatisfeito()

    let btnSatisfeito = e.target.id;
    let btnCheck = document.getElementById(btnSatisfeito)
    btnCheck.classList.toggle('check')
    satisfeitoBtn = btnCheck.value;
})

const enviarNps = () => {

    validacaoFormulario()
}