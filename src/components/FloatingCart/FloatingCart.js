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

                <div class="shopping-cart" style={this.state.visible}>
                    <div class="shopping-cart-header">
                        <span class="badge badge-pill badge-light qtd-cart">2</span>
                        <div class="shopping-cart-total">
                            <span class="lighter-text">Total:</span>
                            <span class="main-color-text">$2,229.97</span>
                        </div>
                    </div>

                    <ul class="shopping-cart-items">

                        {addedItems.map(item => (

                            <li class="clearfix">
                                {/* <img src={item.imagem} alt="item1" /> */}
                                <span class="item-name">{item.nome}</span>
                                <span class="item-price">{item.valorUnitario}</span>
                                <span class="item-quantity">Quantidade: 01</span>
                            </li>

                        ))}






                        {/* <li class="clearfix">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
                                <span class="item-name">KS Automatic Mechanic...</span>
                                <span class="item-price">$1,249.99</span>
                                <span class="item-quantity">Quantidade: 01</span>
                            </li>

                            <li class="clearfix">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
                                <span class="item-name">Kindle, 6" Glare-Free To...</span>
                                <span class="item-price">$129.99</span>
                                <span class="item-quantity">Quantidade: 01</span>
                            </li> */}
                    </ul>

                    <a href="#" class="button">Checkout</a>
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
