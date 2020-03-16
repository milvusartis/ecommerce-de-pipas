import React from 'react';
import { connect } from "react-redux";

// import { ProdutoCompleto } from "../componentes/ProdutoCompleto";

// import { Container } from './styles';

const Main = ({ produtoAtivo }) => (
    <>
        {
            produtoAtivo ? (<h1>Ativo</h1>
            ) : (
                    <h1>Não Ativo</h1>
                )

        } /> */}
    </>
);

export default connect(state => ({ produtoAtivo: state.produtoAtivo}))(Main);

