let inputQtd = document.getElementById('qtdProduto');
let btnMenos = document.getElementById('btnMenos');
let btnMais = document.getElementById('btnMais');

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