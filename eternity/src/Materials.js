import React, { Component } from 'react'
import MaterialItem from './MaterialItem'

export default class Materials extends Component {
    render() {

        const materialsList = this.props.materials.map((material, index) => {
            return <MaterialItem  key={index} material={material}/>;
        })

        return (
            <div>
                {materialsList}
            </div>
        )
    }
}
