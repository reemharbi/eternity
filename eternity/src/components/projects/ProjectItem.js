import React, { Component } from 'react'
import './ProjectItem.css';

export default class ProjectItem extends Component {
    render() {
        return (
            <div className="project" >
               <h2>{this.props.project.name}</h2>
                <h4> By: {this.props.project.by}</h4>
                <h5>Project NO: {this.props.project.no}</h5>
                <p>{this.props.project.text}</p>
                <p>Git Link: {this.props.project.git_url}</p>
                <p>Deployed Link:{this.props.project.deployed_url}</p>

            </div>
        )
    }
}
