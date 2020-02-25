let nomeCompleto = document.getElementById("nomeCompleto");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let assunto = document.getElementById("assunto");
let mensagem = document.getElementById("mensagem");
let botao = document.getElementById("botao");

email.addEventListener("blur", e => {
    var regra1 = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]+?$/i;
    var regra2 = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    if(!email.value.match(regra1)) {
        if(!email.value.match(regra2)) {
            email.setAttribute("class", "form-control is-invalid");
        } else {
            email.setAttribute("class", "form-control is-valid");
        }
    }
})

telefone.addEventListener("keyup", e => {
    //telefone.value=telefone.value.replace(/D/g,""); 
    if(isNaN(telefone.value)) {
        telefone.value = telefone.value.substring(0, (telefone.value.length - 1));
    } else {
        if(telefone.value.substring(0,1) == 0) {
            telefone.value = telefone.value.substring(0, (telefone.value.length - 1));
        } else {
            telefone.value = telefone.value.substring(0, 11);
        }
    }
})

telefone.addEventListener("blur", e => {
    var regraP1 = /^(\d{2})?(\d{4,5})?(\d{4})/g;
    var regraP2 = "($1) $2-$3"
    if(telefone.value.length == 10 || telefone.value.length == 11) {
        telefone.value = telefone.value.replace(regraP1, regraP2);
        telefone.setAttribute("class", "form-control is-valid");
    } else {
        telefone.setAttribute("class", "form-control is-invalid");
    }
    //telefone.value = telefone.value.replace(/^(\d{2})(\d)/g, "($1) $2");
    //telefone.value = telefone.value.replace(/(\d{4,5})(\d)/g, "$1-$2");
})

botao.addEventListener("click", e => {
    if(nomeCompleto.value.length > 0 && email.value.length > 0 && email.className == "form-control is-valid" && telefone.value.length > 0 && telefone.className == "form-control is-valid" && assunto.value.length > 0 && mensagem.value.length > 0) {
        $("#contatoEnviado").modal();
    } else {
        alert("Preencha corretamente todos os campos para enviar esta mensagem.");
    }
})


//problemas do TELEFONE:
//alterar a quantidade de dígitos de telefone (10) para celular (11) ou vice-versa
//    de telefone para celular: não permite que adicione um novo dígito e, após a tentativa, passa a reconhecer o número com 10 dígitos como valor inválido
//    de celular para telefone: ao deletar o último número somem dois de uma vez e então passa a reconhecer o número com 9 dígitos como valor inválido
//seta para a esquerda apaga os dígitos, um por um
//deletar números e deixar o/os parênteses, ao preencher novos números não reconhece o formato