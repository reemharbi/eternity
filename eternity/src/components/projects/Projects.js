import React, { Component } from 'react';
import ProjectsList from './projectsList';
export default class Projects extends Component {
    render() {

        return (
            <div>
                <ProjectsList projects={this.props.projects} />
            </div>
        )
    }
}
