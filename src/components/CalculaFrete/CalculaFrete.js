import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputMask from "react-input-mask";
import {
    FormGroup,
    Label,
    InputGroup,
    Button
} from 'reactstrap'
const CalculaFrete = (cep,valorFrete,diasEntrega) => (
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
                value={cep}
                // onChange={this.handleCepValeu}
                maskplaceholder={null}
                />
    {/*------------------------------aqui esta o InputMask*-----------------------------------------------*/}
            <Button
                color="success"
                >{/*onClick={this.sendCep}*/}
                Calcular Frete
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

const mapStateToProps = state => ({
    cep:state.carrinhoReducer.cep,
    valorFrete:state.carrinhoReducer.valorFrete,
    diasEntrega:state.carrinhoReducer.diasEntrega,
});

const mapDispatchToProps = dispatch =>({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculaFrete);
