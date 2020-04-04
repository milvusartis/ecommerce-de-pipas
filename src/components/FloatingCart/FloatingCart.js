import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MdArrowDropUp, MdArrowDropDown , MdClose} from "react-icons/md";

import { CartActions } from "../../redux/actions/action.cart";
import { connect } from 'react-redux';

import "./FloatingCart.css";

class FloatingCart extends Component {
    render() {
        const { addedItems, quantityItems, total, removeItem, addQuantity, subtractQuantity } = this.props
        return (
            <>
                <div className="shopping-cart">
                <div className="shopping-cart-header">
                    <span className="badge badge-pill badge-light qtd-cart">{quantityItems}</span>
                    <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                </div>
                <ul className="shopping-cart-items">
                    {addedItems.map(item => (
                        <li key={item.idProduto} className="clearfix">
                            <img className="item-imagem" src={item.imagem} alt="item1" />
                            <span className="item-name">{item.nome}</span>
                            <span className="item-price">{item.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            <span className="btn-add-sub" onClick={() => subtractQuantity(item.idProduto)}><MdArrowDropDown/></span>
                            <span className="item-quantity">{item.quantity}</span>
                            <span className="btn-add-sub" onClick={() => addQuantity(item.idProduto)}><MdArrowDropUp/></span>
                            <span className="btn-rem" onClick={() => removeItem(item.idProduto)}><MdClose/></span>
                        </li>
                    ))}
                </ul>
                <Link to="/checkout" className="button">Checkout</Link>
                </div>
                {/* <div className="shopping-cart" style={this.state.visible}> */}
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
    removeItem: (id) => { dispatch(CartActions.removeItem(id)) },
    addQuantity: (id) => { dispatch(CartActions.addQuantity(id)) },
    subtractQuantity: (id) => { dispatch(CartActions.subtractQuantity(id)) }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FloatingCart);