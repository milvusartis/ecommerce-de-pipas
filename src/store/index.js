import { createStore } from 'redux';

function reducer (){
    return [
        {
            "codigo": 1,
            "nome": "Pipa Grande Colorida",
            "descricao": "Pipa colorida",
            "imagem": "https://imagensemoldes.com.br/wp-content/uploads/2017/12/Imagem-Pipa-em-png-e-pdf-edit%C3%A1vel.png",
            "valor": 40.5,
            "disponibilidade": false,
            "categoria": {
              "codigo": 1,
              "descricao": "Linha"
          }            
        },
        {
            "codigo": 2,
            "nome": "Pipa Media Colorida",
            "descricao": "Pipa Beneficente",
            "imagem": "https://s3.amazonaws.com/sample-login/companies/avatars/000/004/570/original/pipa.png",
            "valor": 45.5,
            "disponibilidade": true,
            "categoria": {
              "codigo": 2,
              "descricao": "Lata"
          }
        },
        {
            "codigo": 33,
            "nome": "Pipa Capucheta",
            "descricao": "Pipa estilizada",
            "imagem": "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Summer-Vacation-PNG/Kite_Transparent_PNG_Clip_Art.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
              "codigo": 65,
              "descricao": "Pipa"
          }
        },


    ];
}

const store = createStore(reducer);

export default store;