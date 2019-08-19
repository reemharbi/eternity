import React, { Component } from 'react';
import ProjectsList from './projectsList';
import Search from '../Search';
import {
    Grid,
    Divider,
    Container
  } from 'semantic-ui-react'
export default class Projects extends Component {
    render() {

        return (

               <Container textAlign='center'>     
                <Search onChange={this.props.onChange} value={this.props.searchValue}/>
                <Divider horizontal>Projects</Divider>
                <ProjectsList projects={this.props.projects} />
            </Container>      
        )
    }
}
