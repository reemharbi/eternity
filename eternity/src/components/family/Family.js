import React, { Component } from 'react';
import {
    Divider,
    Container
  } from 'semantic-ui-react';
import InstructorsList from './InstructorsList';
import StudentsList from "./StudentsList";
import Search from '../Search';


export default class Family extends Component {
    render() {
        return (
            <Container textAlign='center'>     

            <Divider horizontal>The Family</Divider>
            <InstructorsList instructors={this.props.instructors}/>
            <StudentsList students={this.props.students}/>
            </Container>
        )
    }
}
