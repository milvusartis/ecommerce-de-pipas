import  React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputMask from "react-input-mask";
import {
    FormGroup,
    Label,
    InputGroup,
    Button
} from 'reactstrap'
import * as CartActions from "../../redux/actions/action.cart";
class CalculaFrete extends Component{
    state={
        cep:''
    }
    handleCepValue=(event)=>{
        this.setState({cep:event.target.value.replace(/\D/g,"")})
    }
    render(){
        const {cep,changeCepValue} = this.props
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
                onClick={()=>{changeCepValue(this.state.cep);console.log(this.state.cep)}}
            //nesse onClick:usar o change para guardar o valor do cep e subtistuir o console.log pela função de busca do cep
                >
                Calcular Frete
            </Button>
            <Button onClick={()=>console.log(cep)}>
                Testar
            </Button>
         </InputGroup>
                <p className="mt-2 mb-2"
                    title="Valor do Frete">
                    Valor do Frete: R$ 
                </p>
                <p className="mt-2 mb-2">
                    Prazo de Entrega:
                </p>
            </FormGroup>
         </>
        );
    }
}

const mapStateToProps = state => ({
    cep:state.carrinhoReducer.cep,
    //valorFrete:state.carrinhoReducer.valorFrete,
    //diasEntrega:state.carrinhoReducer.diasEntrega,
});

const mapDispatchToProps = dispatch =>({
    changeCepValue:(cep)=>dispatch(CartActions.changeCepValue(cep))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculaFrete);
