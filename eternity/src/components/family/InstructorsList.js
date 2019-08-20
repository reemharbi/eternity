import React, { Component } from 'react';
import Instructor from "./Instructor";
import {Card, Divider } from 'semantic-ui-react';
export default class InstructorsList extends Component {
    render() {
        const instructorsList = this.props.instructors.map((instructor, index) => {
            return <Instructor  key={index} instructor={instructor} />;
            })
        return (
            <>
                <Divider horizontal>Instructors</Divider>

                <Card.Group>
                {instructorsList}
                </Card.Group>
            </>    
        )
    }
}
