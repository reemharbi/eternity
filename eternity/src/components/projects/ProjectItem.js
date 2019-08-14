import React, { Component } from 'react'
import './ProjectItem.css';
import PosterImage from './PosterImage';
import ProjectTag from './ProjectTag';

export default class ProjectItem extends Component {
    render() {
        const tagsList = this.props.project.tags.map((tag, index) => {
            return <ProjectTag tag={tag}/>
        })
        return (
            <div className="project" >
               <h2>{this.props.project.name}</h2>
               <PosterImage img={this.props.project.img_url} />
                <h4> By: {this.props.project.by}</h4>
                <h5>Project NO: {this.props.project.no}</h5>
                <p>{this.props.project.text}</p>
                <p>Git Link: {this.props.project.git_url}</p>
                <p>Deployed Link:{this.props.project.deployed_url}</p>
                <p>{tagsList}</p>
            </div>
        )
    }
}
