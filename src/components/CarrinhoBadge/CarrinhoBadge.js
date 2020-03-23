import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { MdShoppingCart } from 'react-icons/md';
import Badge from 'react-bootstrap/Badge'

import "./CarrinhoBadge.css";



class CarrinhoBadge extends Component {
    render() {
        const { quantityItems } = this.props
        return (
            <>
                {(quantityItems > 0) && (
                    <span class="badge badge-pill badge-light qtd-cart">{quantityItems}</span>
                )}
                <Link to=""><Badge pill variant="" className="badge cart" onClick={this.toggleVisibilityCart}><MdShoppingCart /></Badge>{' '}</Link>
            </>
        );
    }
}

const mapStateToProps = state => ({
    quantityItems: state.carrinhoReducer.quantityItems,

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarrinhoBadge);
