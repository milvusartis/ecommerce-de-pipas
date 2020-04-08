import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { MdExpandMore } from 'react-icons/md';

import './historicoPedidos.scss'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
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



export default function HistoricoPedidosl() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div className="pedido-container">
                <div className="content">

                    <h1>Pedidos realizados</h1>


                    <ol class="progress" data-steps="4">
                        <li class="done">
                            <span class="name">Foo</span>
                            <span class="step"><span>1</span></span>
                        </li>
                        <li class="done">
                            <span class="name">Bar</span>
                            <span class="step"><span>2</span></span>
                        </li>
                        <li class="active">
                            <span class="name">Baz</span>
                            <span class="step"><span>3</span></span>
                        </li>
                        <li >
                            <span class="name">Quux</span>
                            <span class="step"><span>4</span></span>
                        </li>
                    </ol>

                    <div className={classes.root}>


                        <ExpansionPanel TransitionProps={{ unmountOnExit: true }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <ExpansionPanelSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel1c-content"
                                id="panel1c-header">
                                <div className={classes.column}>
                                    <Typography className={classes.heading}>Pedido: #1234</Typography>
                                </div>
                                <div className={classes.column}>
                                    <Typography className={classes.secondaryHeading}>ooba, pedido entregue</Typography>
                                </div>
                            </ExpansionPanelSummary>

                            <ExpansionPanelDetails className={classes.details}>
                                {/* <div className={classes.column} /> */}
                                <div className={classes.column}>
                                    {/* <Chip label="Barbados" onDelete={() => {}} /> */}
                                    <img width="80" src="https://i.ibb.co/SvxNRNy/pipa-box.png" alt="" />
                                </div>
                                <div className={clsx(classes.column, classes.helper)}>
                                    <Typography variant="caption">
                                        <p>Pipa Grande Colorida</p>
                                        <strong>2 und - R$ 50,00</strong>
                                        <p>Subtotal: R$ 100</p>
                                    </Typography>
                                </div>
                            </ExpansionPanelDetails>

                            <ExpansionPanelDetails className={classes.details}>
                                <div className={classes.column}>
                                    {/* <Chip label="Barbados" onDelete={() => {}} /> */}
                                    <img width="80" src="https://i.ibb.co/SvxNRNy/pipa-box.png" alt="" />
                                </div>
                                <div className={clsx(classes.column, classes.helper)}>
                                    <Typography variant="caption">
                                        <p>Pipa Grande Colorida</p>
                                        <strong>2 und - R$ 50,00</strong>
                                        <p>Subtotal: R$ 100</p>
                                    </Typography>
                                </div>
                            </ExpansionPanelDetails>

                            <Divider />

                            <ExpansionPanelActions>
                                {/* <Button size="small">Cancel</Button> */}
                                <strong >Total - R$ 200,00</strong>
                                <Button size="small" color="primary">
                                    Refazer pedido
                                 </Button>
                            </ExpansionPanelActions>
                        </ExpansionPanel>



                        <ExpansionPanel TransitionProps={{ unmountOnExit: true }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <ExpansionPanelSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel1c-content"
                                id="panel1c-header">
                                <div className={classes.column}>
                                    <Typography className={classes.heading}>Pedido: #1234</Typography>
                                </div>
                                <div className={classes.column}>
                                    <Typography className={classes.secondaryHeading}>ooba, pedido entregue</Typography>
                                </div>
                            </ExpansionPanelSummary>

                            <ExpansionPanelDetails className={classes.details}>
                                {/* <div className={classes.column} /> */}
                                <div className={classes.column}>
                                    {/* <Chip label="Barbados" onDelete={() => {}} /> */}
                                    <img width="80" src="https://i.ibb.co/SvxNRNy/pipa-box.png" alt="" />
                                </div>
                                <div className={clsx(classes.column, classes.helper)}>
                                    <Typography variant="caption">
                                        <p>Pipa Grande Colorida</p>
                                        <strong>2 und - R$ 50,00</strong>
                                        <p>Subtotal: R$ 100</p>
                                    </Typography>
                                </div>
                            </ExpansionPanelDetails>

                            <ExpansionPanelDetails className={classes.details}>
                                <div className={classes.column}>
                                    {/* <Chip label="Barbados" onDelete={() => {}} /> */}
                                    <img width="80" src="https://i.ibb.co/SvxNRNy/pipa-box.png" alt="" />
                                </div>
                                <div className={clsx(classes.column, classes.helper)}>
                                    <Typography variant="caption">
                                        <p>Pipa Grande Colorida</p>
                                        <strong>2 und - R$ 50,00</strong>
                                        <p>Subtotal: R$ 100</p>
                                    </Typography>
                                </div>
                            </ExpansionPanelDetails>

                            <Divider />

                            <ExpansionPanelActions>
                                {/* <Button size="small">Cancel</Button> */}
                                <strong >Total - R$ 200,00</strong>
                                <Button size="small" color="primary">
                                    Refazer pedido
                                 </Button>
                            </ExpansionPanelActions>
                        </ExpansionPanel>






                    </div>


                </div>
            </div>

        </>
    );

}

