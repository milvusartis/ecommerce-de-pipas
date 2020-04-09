import  React, { Component } from 'react';
import { connect } from 'react-redux';
import InputMask from "react-input-mask";
import {
    FormGroup,
    Label,
    InputGroup,
    Button
} from 'reactstrap'
import * as CartActions from "../../redux/actions/action.cart";

const dias = "dias";

class CalculaFrete extends Component{
    state={
        cep:''
    }
    handleCepValue=(event)=>{
        this.setState({cep:event.target.value.replace(/\D/g,"")})
    }
    render(){
        const {changeCepValue,valorFrete,diasEntrega,getCep} = this.props
        return(
            <>
        <FormGroup className="mt-5 mb-2 p-2 border border-dark">
            <Label>
                Informe seu CEP para calcular o frete
            </Label>
        <InputGroup>
        {/*------------------------------aqui esta o InputMask*-----------------------------------------------*/}
            <InputMask
                placeholder="00000-000"
                mask="99999-999"
                className="col-7 col-md-4"
                id="asd"
                value={this.state.cep}
                maskPlaceholder={null}
                onChange={this.handleCepValue}
            />
        {/*------------------------------aqui esta o InputMask*-----------------------------------------------*/}
            <Button
                color="success"
                onClick={()=>{changeCepValue(this.state.cep);getCep(this.state.cep)}}
                >
                Calcular Frete
            </Button>
         </InputGroup>
                <p className="mt-2 mb-2"
                    title="Valor do Frete">
                    Valor do Frete: {valorFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
                <p className="mt-2 mb-2">
                    Prazo de Entrega: {diasEntrega} {diasEntrega!==''?dias:''}
                </p>
            </FormGroup>
         </>
        );
    }
}

const mapStateToProps = state => ({
    valorFrete:state.carrinhoReducer.valorFrete,
    diasEntrega:state.carrinhoReducer.diasEntrega,
});

const mapDispatchToProps = dispatch =>({
    changeCepValue:(cep)=>dispatch(CartActions.changeCepValue(cep)),
    getCep:(cep)=>dispatch(CartActions.getCep(cep))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculaFrete);