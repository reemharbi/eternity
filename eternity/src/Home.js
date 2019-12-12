import React, { Component } from 'react'
import './Home.css'
import _ from 'lodash'
import {
  Container,
  Divider,
  Image
} from 'semantic-ui-react'


export default class Home extends Component {
  render() {

    return (
      <div className='please'>

        <Container>
        <Divider horizontal>Hi</Divider>        
        <Image src=""></Image>
        <Container className="hometext" textAlign='center'>
        <p className="animated infinite pulse slowest big">" A circle is the reflection of eternity. It has no beginning and it has no end - and if you put several circles over each other, then you get a spiral. "</p>
        <p>This website was made as a way to remember all the great memories and members of the SEI - Eternity course. It also serves as a great reference to all the course materials that were took in the duration of it. Hope you enjoy it ❤️</p>
        </Container>
        </Container>
             
      </div>
    )
  }
}