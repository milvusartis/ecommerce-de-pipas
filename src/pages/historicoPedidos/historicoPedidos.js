import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { MdExpandMore } from 'react-icons/md';
import api from '../../services/api';

import {CartActions, addToCart} from "../../redux/actions/action.cart";

import './historicoPedidos.scss'
import pedido from '../../redux/reducers/reducer.cart';
import { toast } from "react-toastify";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }, heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const HistoricoPedidos = ({requestRefazerPedido, addToCart}) => {
    const classes = useStyles();

    const [pedidos, setPedidos] = useState([]);

    const usuario = sessionStorage.getItem('usuario');
    const { idUsuario } = usuario != null ? JSON.parse(usuario) : {};

    const [expanded, setExpanded] = React.useState(false);



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleTrackStep = {
        PEDIDO_REALIZADO: value => 1,
        PAGAMENTO_CONFIRMADO: value => 2,
        PEDIDO_ENVIADO: value => 3,
        PEDIDO_ENTREGUE: value => 4,
        // default: value => value,
    };

    const changeTrackerStep = (statusPedido, value) => {
        const handler = handleTrackStep[statusPedido]
        return handler(value);
    };

    const handlePedidoMensage = {
        PEDIDO_REALIZADO: value => "parabéns pela compra",
        PAGAMENTO_CONFIRMADO: value => "pagamento confirmado, oh yeah!",
        PEDIDO_ENVIADO: value => "uhuuu, seu pedido está a caminho",
        PEDIDO_ENTREGUE: value => "oba, seu pedido foi entregue",
    };


    const showMenssage = (statusPedido, value) => {
        const handler = handlePedidoMensage[statusPedido]
        return handler(value);
    };

    const montaPedido = (pedido, addToCart) => {

     
        pedido.pedidoItens.map(item=>(
            addToCart(item.produto, item.quantidade)
        ));
        toast.success("Pedido adicionado ao carrinho")

    }


    useEffect(() => {
        api.get(`historico-pedidos`, {

        }).then(response => {
            // setPedidos(response.data)
            setPedidos(response.data);

        })
    }, [idUsuario]);
    return (
        <>
            <div className="pedido-container">
                <div className="content">
                    <h1>Pedidos realizados</h1>
                    <div className={classes.root}>
                        {pedidos.map(pedido => (


                            <ExpansionPanel key={pedido.idPedido} TransitionProps={{ unmountOnExit: true }} expanded={expanded === `panel${pedido.idPedido}`} onChange={handleChange(`panel${pedido.idPedido}`)}>
                                <ExpansionPanelSummary
                                    expandIcon={<MdExpandMore />}
                                    aria-controls={`panel${pedido.idPedido}c-content`}
                                    id={`panel${pedido.idPedido}c-header`}>
                                    <div className={classes.column}>
                                        <Typography className={classes.heading}>Pedido: #{pedido.idPedido}</Typography>
                                    </div>
                                    <div className={classes.column}>
                                        <Typography className={classes.secondaryHeading}>{showMenssage(pedido.statusPedido)}</Typography>
                                    </div>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails className={classes.details}>
                                    <ol className="progress-track" data-steps="4">
                                        <li className={changeTrackerStep(pedido.statusPedido) >= 1 ? "done" : ""}>
                                            <span className="name">Pedido realizado</span>
                                            <span className="step"><span>1</span></span>
                                        </li>
                                        <li className={changeTrackerStep(pedido.statusPedido) >= 2 ? "done" : ""}>
                                            <span className="name">Pagamento confirmado</span>
                                            <span className="step"><span>2</span></span>
                                        </li>
                                        <li className={changeTrackerStep(pedido.statusPedido) >= 3 ? "done" : ""}>
                                            <span className="name">Pedido enviado</span>
                                            <span className="step"><span>3</span></span>
                                        </li>
                                        <li className={changeTrackerStep(pedido.statusPedido) >= 4 ? "done" : ""}>
                                            <span className="name">Pedido entregue</span>
                                            <span className="step"><span>4</span></span>
                                        </li>
                                    </ol>
                                </ExpansionPanelDetails>


                                {pedido.pedidoItens.map(pedidoItem => (

                                    <div key={pedidoItem.idPedidoItem}>

                                        <ExpansionPanelDetails className={classes.details}>
                                            {/* <div className={classes.column} /> */}
                                            <div className={classes.column}>
                                                {/* <Chip label="Barbados" onDelete={() => {}} /> */}
                                                <img width="80" src={pedidoItem.produto.imagem} alt="" />
                                            </div>
                                            <div className={clsx(classes.column, classes.helper)}>
                                                <Typography variant="caption">
                                                    <p>{pedidoItem.produto.nome}</p>
                                                    <strong>{pedidoItem.quantidade} und - {pedidoItem.precoVendido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                                                    <p>Subtotal: {((pedidoItem.quantidade) * (pedidoItem.precoVendido)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                                </Typography>
                                            </div>
                                        </ExpansionPanelDetails>

                                    </div>


                                ))}


                                <Divider />

                                <ExpansionPanelActions>
                                    {/* <Button size="small">Cancel</Button> */}
                                    <strong >Total - {pedido.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                                    <Button size="small" color="primary" onClick={()=>montaPedido(pedido, addToCart)}>
                                        Refazer pedido
                                                 </Button>
                                </ExpansionPanelActions>
                            </ExpansionPanel>



                        ))}

                    </div>
                </div>
            </div>
        </>
    )
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    requestRefazerPedido: (pedido) => dispatch(CartActions.requestRefazerPedido(pedido)),
    addToCart: (produto, number) => dispatch(CartActions.addToCart(produto,number)),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoricoPedidos);
