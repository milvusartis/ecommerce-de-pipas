import React, { Component } from 'react';
import {
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';
import { MdSearch } from 'react-icons/md';

export default class BarraDePesquisa extends Component {
    render() {
        return(
            <>
                <InputGroup>
                <Input placeholder="Busque por produtos" />
                <InputGroupAddon addonType="append">
                    <InputGroupText>
                        <MdSearch />
                    </InputGroupText>
                </InputGroupAddon>
                </InputGroup>
            </>
        )
    }
}