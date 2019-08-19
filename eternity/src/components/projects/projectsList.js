import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
import { Card } from 'semantic-ui-react';
export default class projectsList extends Component {
    render() {
        
        const projectsList = this.props.projects.map((project, index) => {
        return <ProjectItem  key={index} project={project} />;
        })
        return (
            <>
                <Card.Group itemsPerRow={4}>{projectsList}</Card.Group>
                
            </>
        )
    }
}
