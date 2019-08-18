import React, { Component } from 'react'

export default class MaterialItem extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.material.title}</h2>
                <p>{this.props.material.content}</p>
            </div>
        )
    }
}
