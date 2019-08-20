import React, { Component } from 'react';
import ProjectsList from './projectsList';
import Search from '../Search';

import {
    Pagination,
    Grid,
    Divider,
    Container
  } from 'semantic-ui-react'
export default class Projects extends Component {
    state = {
        activePage: 1,
        boundaryRange: 1,
        siblingRange: 1,
      }

    onChange = (v) => {
        this.setState({
            activePage: 1
        })
        this.props.onChange(v)

    }

    handlePaginationChange = (e, { activePage }) => {
          console.log(activePage);
          this.setState({ activePage })}

    render() {
        const {
            activePage,
            boundaryRange,
            siblingRange,
          } = this.state
        return (
   

            <Container textAlign='center'>     
                <Divider horizontal>Projects</Divider>
                <Search onChange={(v)=>this.onChange(v)} value={this.props.searchValue}/>
               
          <Divider />
                <ProjectsList projects={this.props.projects} activePage={this.state.activePage}/>
          
                <Divider />  
                <Pagination
                    activePage={activePage}
                    boundaryRange={boundaryRange}
                    onPageChange={this.handlePaginationChange}
                    siblingRange={siblingRange}
                    totalPages={Math.ceil(this.props.projects.length/6)}

          />
            </Container>      
        )
    }
}
