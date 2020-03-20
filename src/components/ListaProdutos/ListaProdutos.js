import React, { Component } from 'react';
import './ListaProdutos.css';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { listaDeProdutoActions } from '../../redux/actions/action.lista-de-produtos'
// import { ListaDeProdutosActionsType } from '../../redux/actions/actions-type';



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
    produtos: state.listaDeProdutosReducer.produtos
})


const mapDispatchToProps = dispatch => ({   
    getAll: () => dispatch(listaDeProdutoActions.requestGetAll()),
    
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(ListaProdutos);
