import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { MdExpandMore } from 'react-icons/md';

import './ItemHistoricoDePedido.scss'


const useStyles = makeStyles((theme) => ({
    heading: {
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



export default function ItemHistoricoDePedido({ key, pedido }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const pedidoItens = pedido.pedidoItens;
    console.log(pedido)


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <>



            <ExpansionPanel TransitionProps={{ unmountOnExit: true }} expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)}>
                <ExpansionPanelSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls={`panel${key}c-content`}
                    id={`panel${key}c-header`}>
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Pedido: #{pedido.idPedido}</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>ooba, pedido entregue</Typography>
                    </div>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails className={classes.details}>
                    <ol className="progress-track" data-steps="4">
                        <li className="done">
                            <span className="name">Pedido realizado</span>
                            <span className="step"><span>1</span></span>
                        </li>
                        <li className="done">
                            <span className="name">Pagamento confirmado</span>
                            <span className="step"><span>2</span></span>
                        </li>
                        <li className="active">
                            <span className="name">Pedido enviado</span>
                            <span className="step"><span>3</span></span>
                        </li>
                        <li>
                            <span className="name">Pedido entregue</span>
                            <span className="step"><span>4</span></span>
                        </li>
                    </ol>
                </ExpansionPanelDetails>


                {pedidoItens.map(pedidoItem => (



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
                                <p>Subtotal: {((pedidoItem.quantidade)*(pedidoItem.precoVendido)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </Typography>
                        </div>
                    </ExpansionPanelDetails>

                ))}


                <Divider />

                <ExpansionPanelActions>
                    {/* <Button size="small">Cancel</Button> */}
                <strong >Total - {pedido.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                    <Button size="small" color="primary">
                        Refazer pedido
                                 </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>






        </>
    );

}

