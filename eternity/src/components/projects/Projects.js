import React, { Component } from 'react';
import ProjectsList from './projectsList';
import Search from '../Search';
export default class Projects extends Component {
    render() {

        return (
            <div>
                <Search onChange={this.props.onChange} value={this.props.searchValue}/>
                <ProjectsList projects={this.props.projects} />
            </div>
        )
    }
}
