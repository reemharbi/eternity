import React, { Component } from 'react'

export default class ProjectItem extends Component {
    render() {
        console.log(this.props.project)
        return (
            <div>
                {this.props.project.name}
            </div>
        )
    }
}
