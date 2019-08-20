import React, { Component } from 'react'
import MaterialItem from './MaterialItem'
import { Divider, Container } from 'semantic-ui-react'

export default class Materials extends Component {
    render() {

        const materialsList = this.props.materials.map((material, index) => {
            return <MaterialItem  key={index} material={material}/>;
        })

        return (
            <Container>
            <Divider horizontal>Projects</Divider>
            </Container>
        )
    }
}
