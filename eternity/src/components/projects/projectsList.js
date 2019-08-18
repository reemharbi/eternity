import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
import FlipMove from 'react-flip-move';
import { Card } from 'semantic-ui-react';
export default class projectsList extends Component {
    render() {
        
        const projectsList = this.props.projects.map((project, index) => {
        return <ProjectItem  key={index} project={project}/>;
        })
        return (
            <>
                <Card.Group>{projectsList}</Card.Group>
                
            </>
        )
    }
}
