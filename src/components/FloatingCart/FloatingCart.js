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
        const { addedItems } = this.props
        console.log(addedItems)


        return (
            <>

                <div className="shopping-cart" style={this.state.visible}>
                    <div className="shopping-cart-header">
                        <span className="badge badge-pill badge-light qtd-cart">2</span>
                        <div className="shopping-cart-total">
                            <span className="lighter-text">Total:</span>
                            <span className="main-color-text">$2,229.97</span>
                        </div>
                    </div>

                    <ul className="shopping-cart-items">

                        {addedItems.map(item => (

                            <li className="clearfix">
                                <img  className="item-imagem" src={item.imagem} alt="item1" />
                                <span className="item-name">{item.nome}</span>
                                <span className="item-price">{item.valorUnitario}</span>
                                <span className="item-quantity">Quantidade: 01</span>
                            </li>

                        ))}






                        {/* <li className="clearfix">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
                                <span className="item-name">KS Automatic Mechanic...</span>
                                <span className="item-price">$1,249.99</span>
                                <span className="item-quantity">Quantidade: 01</span>
                            </li>

                            <li className="clearfix">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
                                <span className="item-name">Kindle, 6" Glare-Free To...</span>
                                <span className="item-price">$129.99</span>
                                <span className="item-quantity">Quantidade: 01</span>
                            </li> */}
                    </ul>

                    <a href="#" className="button">Checkout</a>
                </div>


            </>
        );
    }
}

const mapStateToProps = state => ({
    addedItems: state.carrinhoReducer.addedItems,
});

const mapDispatchToProps = dispatch => ({

})




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FloatingCart);
