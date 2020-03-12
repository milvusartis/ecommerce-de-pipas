import React, {Component} from 'react';
import "./Carrinho.css";




import {
    Container,
    Row,
} from 'reactstrap';
 



class Carrinho extends Component {

    render() {
        return ( 
        <>
        <Container>
            <Row>
                <div class="container">
	                <table id="cart" class="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style={{width:50}}> Produtos</th>
							<th style={{width:10}}>Preco</th>
							<th style={{width:8}}>Quantidade</th>
							<th style={{width:22}} class="text-center">Subtotal</th>
							<th style={{width:10}}>s</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs">
                                    X
                                    </div>
									<div class="col-sm-10">
										<h4 class="nomargin">Produto 1</h4>
										<p>Que pipa maravilhosa</p>
									</div>
								</div>
							</td>
							<td data-th="Price">R$ 22,99</td>
							<td data-th="Quantity">
								<input type="number" class="form-control text-center" value="1"/>
							</td>
							<td data-th="Subtotal" class="text-center">R$ 22,99</td>
							<td class="actions" data-th="">
								<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
								<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>								
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="visible-xs">
							<td class="text-center"><strong>Total</strong></td>
						</tr>
						<tr>
							<td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue comprando conosco</a></td>
							<td colspan="2" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong>Total: R$ PRECO + FRETE</strong></td>
							<td><a href="#" class="btn btn-success btn-block btn-lg">COMPRAR <i class="fa fa-angle-right"></i></a></td>
						</tr>
					</tfoot>
				</table>
                </div>
             </Row>
        </Container>
        </>
        )
    }
}
export default Carrinho;


