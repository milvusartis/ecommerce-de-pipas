import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { MdShoppingCart } from 'react-icons/md';
import Badge from 'react-bootstrap/Badge'

import "./CarrinhoBadge.css";
import FloatingCart from '../FloatingCart/FloatingCart';



class CarrinhoBadge extends Component {

    state = {
        on: false,
    }

    toggleVisibilityCart = () => {
        this.setState({
            on: !this.state.on
        })
    }

    onHover = ()=> {
        this.setState({ on: true });
    }
 
    onLeave = ()=> {
        this.setState({ on: false });
    }
 

    render() {
        const { quantityItems } = this.props
        return (
            <>
                <span className="info">
                    {(quantityItems > 0) && (
                        <span class="badge badge-pill badge-light qtd-cart">{quantityItems}</span>
                    )}
                    {/* <Link to=""><Badge pill variant="" className="badge cart" onClick={this.toggleVisibilityCart}><MdShoppingCart /></Badge>{' '}</Link> */}
                    <Link to=""><Badge pill variant="" className="badge cart"   onMouseOver={(event) => this.onHover(event)} onMouseLeave={(event) => this.onLeave(event)}><MdShoppingCart /></Badge>{' '}</Link>
                </span>
                {this.state.on && (
                    <FloatingCart />
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    quantityItems: state.carrinhoReducer.quantityItems,
});

const mapDispatchToProps = dispatch => ({
    // toggleVisibilityCart: () => toggleVisibilityCart(),
});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarrinhoBadge);
