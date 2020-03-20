import React, { Component } from 'react';
import './ListaProdutos.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { produtoActions } from '../../redux/actions/action.lista-de-produtos'
import { ListaDeProdutosActionsType } from '../../redux/actions/actions-type';



class ListaProdutos extends Component {

    componentDidMount() {
        const { getAll } = this.props;
        getAll();
    }


    render() {
        console.log(this.props);
        const { produtos } = this.props
        return (
            <>
                {produtos.map(produto => (
                    <div key={produto.codigo}>
                        <h1>{produto.nome}</h1>
                    </div>
                ))}
            </>
        );
    }

}




const mapStateToProps = state => ({
    produtos: state.produtoReducer.produtos,

});

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(produtoActions.requestGetAll()),
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(ListaProdutos);
