import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
export default class projectsList extends Component {
    render() {
        
        const projectsList = this.props.projects.map((project, index) => {
            return <ProjectItem  key={index} project={project}/>;
        })
        return (
            <div>
                {projectsList}
            </div>
        )
    }
}
