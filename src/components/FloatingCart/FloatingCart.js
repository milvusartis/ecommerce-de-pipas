import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import "./FloatingCart.css";


class FloatingCart extends Component {

    state = {
        visible: {
            visibility: 'hidden'
        }
    }

    componentDidMount() {
        const { isVisible } = this.props;
        console.log("Entrei")
        isVisible ? this.setState({ visible: { visibility: 'visible' } }) : this.setState({ visible: { visibility: 'hidden' } })
        // toggleVisivleCart(isVisible);

    }



    render() {
        const { addedItems, quantityItems, total } = this.props
        console.log("sou o total" + total)


        return (
            <>

                <div className="shopping-cart" style={this.state.visible}>
                    <div className="shopping-cart-header">
                        <span className="badge badge-pill badge-light qtd-cart">{quantityItems}</span>
                        <div className="shopping-cart-total">
                            <span className="lighter-text">Total:</span>
                            <span className="main-color-text">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                    </div>

                    <ul className="shopping-cart-items">

                        {addedItems.map(item => (

                            <li className="clearfix">
                                <img className="item-imagem" src={item.imagem} alt="item1" />
                                <span className="item-name">{item.nome}</span>
                                <span className="item-price">{item.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                <span className="item-quantity">Quantidade: {item.quantity}</span>
                            </li>

                        ))}

                    </ul>

                    <a href="#" className="button">Checkout</a>
                </div>


            </>
        );
    }
}

const mapStateToProps = state => ({
    addedItems: state.carrinhoReducer.addedItems,
    total: state.carrinhoReducer.total,
    quantityItems: state.carrinhoReducer.quantityItems,
});

const mapDispatchToProps = dispatch => ({

})




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FloatingCart);
