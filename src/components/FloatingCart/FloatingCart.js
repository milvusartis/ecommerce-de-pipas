import React, { Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import "./FloatingCart.css";


class FloatingCart extends Component {

    state = {
        visible:{            
            visibility: 'hidden'            
        }
    }

    componentDidMount(){
        const {isVisible} = this.props;
        console.log("Entrei")
        isVisible ?  this.setState({visible:{visibility: 'visible'}}): this.setState({visible:{visibility: 'hidden'}})
        // toggleVisivleCart(isVisible);
       
    }


    
    render() {        
       const {produtos} =  this.props.produtos
       console.log(produtos)
   
        return (            
            <>
         
                    <div class="shopping-cart" style={this.state.visible}>
                        <div class="shopping-cart-header">
                            {/* <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">3</span> */}
                            <span class="badge badge-pill badge-light qtd-cart">2</span>
                            <div class="shopping-cart-total">
                                <span class="lighter-text">Total:</span>
                                <span class="main-color-text">$2,229.97</span>
                            </div>
                        </div>

                        <ul class="shopping-cart-items">
                            <li class="clearfix">
                                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" /> */}
                                <span class="item-name">Sony DSC-RX100M III</span>
                                <span class="item-price">$849.99</span>
                                <span class="item-quantity">Quantidade: 01</span>
                            </li>

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
    produtos: state.carrinhoReducer.produtos,
});

const mapDispatchToProps = dispatch =>({

})




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FloatingCart);
