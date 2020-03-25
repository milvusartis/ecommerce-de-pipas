import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    Row,
    Button,
    Input
 } from "reactstrap";

import * as ProdutoActions from "../../redux/actions/action.product";

class ControlaQtd extends Component {
  render() {
    const {number, incrementQuantity, decrementQuantity} = this.props;
    return (
        <>
        <Row className="mt-2 mb-2 p-2">          
        <Button className="btnMenos" color="success" onClick={()=>decrementQuantity(number)}>-</Button>
        <Input
            type="number"
             className="col-2 mt-2 quantidade"
            value={number}
            readOnly
             />
        <Button className="btnMais" color="success" onClick={()=>incrementQuantity(number)}>+</Button>
        </Row>
        </>    
    );
  }
}

const mapStateToProps = state => ({
    number: state.produtoReducer.number,
});

const mapDispatchToProps = dispatch =>({
    incrementQuantity: (number)=> dispatch(ProdutoActions.incrementQuantity(number)),
    decrementQuantity: (number) => dispatch(ProdutoActions.decrementQuantity(number)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlaQtd);