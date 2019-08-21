import React, { Component } from 'react'
import MaterialItem from './MaterialItem'
import { Card, Container } from 'semantic-ui-react';

export default class Materials extends Component {
    render() {

        const materialsList = this.props.materials.map((material, index) => {
            return <MaterialItem  key={index} material={material}/>;
        })

        return (
            <Container textAlign='center'>    
                <Card.Group centered='true'>{materialsList}</Card.Group>
            </Container>
        )
    }
}