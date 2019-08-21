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

        <Container>
        <Divider horizontal>Hi</Divider>        
        
        <Container className="hometext" textAlign='center'>
        {/* <h1 className="animated infinite pulse slowest">" The experience of eternity right here and now is the function of life. Heaven is not the place to have the experience; here is the place to have the experience "</h1> */}
        <h1 className="animated infinite pulse slowest">" A circle is the reflection of eternity. It has no beginning and it has no end - and if you put several circles over each other, then you get a spiral. "</h1>
        </Container>
        </Container>
     
      </div>
    )
  }
}