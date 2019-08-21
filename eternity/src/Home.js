import React, { Component } from 'react'
import './Home.css'
import _ from 'lodash'
import {
  Container,
  
  Divider
} from 'semantic-ui-react'


export default class Home extends Component {
  render() {

    return (
      <div>

        <Container className="hometext" textAlign='center'>
        <Divider horizontal></Divider>        
        <h1>" The experience of eternity right here and now is the function of life. Heaven is not the place to have the experience; here is the place to have the experience "</h1>
        
        </Container>

     
      </div>
    )
  }
}