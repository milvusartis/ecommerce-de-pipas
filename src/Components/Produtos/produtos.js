 
import React, { Component } from 'react';
import { Navbar,Input,Button,Row,InputGroup,InputGroupAddon,Container,Col,Form,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Spinner} from 'reactstrap';
import { MdSearch } from 'react-icons/md';
import axios from 'axios';
import {Link} from 'react-router-dom'
import "./produtos.css"
class Produtos extends Component{
    render(){
        return (
            <div>
      <Card>
        <CardImg top width="100%" src="" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>



        )
    }
  }

    export default Produtos;