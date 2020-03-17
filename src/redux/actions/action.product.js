export function decrement(number) {
    return {
      type: 'DECREMENTAR_QUANTIDADE',
      number
    };
  
  }


  export function increment (number) {

    return{
        type: "INCREMENTAR_QUANTIDADE",
        number
    }
   
}


export function mudaProduto(produto, produtoAtivo) {
    return {
      type: 'MUDAR_PRODUTO_EXIBIDO',
      produto,
      produtoAtivo,
    };
  
  }