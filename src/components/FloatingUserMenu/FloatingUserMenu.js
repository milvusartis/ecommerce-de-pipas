import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import "./FloatingUserMenu.scss";

class FloatingUserMenu extends Component {
    render() {
        // const {  } = this.props
        return (
            <>
                <div className="user-menu">
                    <div className="user-menu-header">

                    </div>

                    <ul className="user-menu-items">
                        <li>
                            <Link to="/historico" className="">Meus Pedidos</Link>
                        </li>
                    </ul>

                </div>
                {/* <div className="user-menu" style={this.state.visible}> */}
            </>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FloatingUserMenu);