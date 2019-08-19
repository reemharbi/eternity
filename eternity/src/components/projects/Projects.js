import React, { Component } from 'react';
import ProjectsList from './projectsList';
import Search from '../Search';
import {
    Container
  } from 'semantic-ui-react'
export default class Projects extends Component {
    render() {

        return (
            <Container>
                <Search onChange={this.props.onChange} value={this.props.searchValue}/>
                <ProjectsList projects={this.props.projects} />
                </Container>
        )
    }
}
