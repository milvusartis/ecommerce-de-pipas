let inputQtd = document.getElementById('qtdProduto');
let btnMenos = document.getElementById('btnMenos');
let btnMais = document.getElementById('btnMais');
let inputCEP = document.getElementById('cepUsuario');
let btnFrete = document.getElementById('btnFrete');
let vFrete = document.getElementById('vFrete');

inputQtd.addEventListener('input',()=>{
    if(inputQtd.value<0){
        inputQtd.value=0;
    }
    if(inputQtd.value>5){
        inputQtd.value=5;
    }
});
btnMenos.addEventListener('click',()=>{
    if(inputQtd.value>0 && inputQtd.value<=5){
        inputQtd.value--;
    }
});
btnMais.addEventListener('click',()=>{
    if(inputQtd.value>=0 && inputQtd.value<5){
        inputQtd.value++;
    }
});

inputCEP.addEventListener('input',()=>{
    validarCampo(inputCEP,9);
});

function validarCampo(input,i){
    if(input.value.length>=i){
        input.value =  input.value.substring(0,i);
    }
}


btnFrete.addEventListener('click',()=>{
    let cep = inputCEP.value.replace([/[-]+/g, ''])
    let a = "https://viacep.com.br/ws/"+cep+"/json"
    let resposta = fetch(a)
    .then((resposta)=>{
        return resposta.json();
    })
    .then((json)=>{
        if(json.erro==true){
        }
        else{
            if(json.uf=="SP"){
                vFrete.innerText="Valor do Frete:R$4,00";
            }
            else{
                vFrete.innerText="Valor do Frete:R$8,00";
            }
        }
    })
});

function mascara(el,masc){
    el.value=masc(el.value)
    }
function soNumeros(d){
    return d.replace(/\D/g,"");
}
function cep(d){
    d = soNumeros(d)
    d=d.replace(/^(\d{5})(\d)/,"$1-$2");
    return d
}