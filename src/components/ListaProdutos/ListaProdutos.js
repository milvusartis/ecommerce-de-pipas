import React, { Component } from 'react';
import './ListaProdutos.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {produtoActions} from '../../redux/actions/action.lista-de-produtos'
import { ListaDeProdutosActionsType } from '../../redux/actions/actions-type';



class ListaProdutos extends Component {
    state = {
        produto: {}
    }

  

 
    render() {
        const { produto } = this.state;
        console.log(this.props);
        return (
            <>
            <h1>Lista de Produtos</h1>
                {produto.nome}       
     
            </>
        );
    }

}




const mapStateToProps = state => ({
    produtos: state.produtoReducer.produtos,  

});

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch (),
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(ListaProdutos);
