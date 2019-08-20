import React, { Component } from 'react';
import { Grid, Image, Card, Icon,Divider, Segment } from 'semantic-ui-react';


const SegmentExampleNestedSegments = () => (
    <Segment.Group>
      <Segment>
        
      </Segment>
      <Segment.Group>
        <Segment>Nested Top</Segment>
        <Segment>Nested Middle</Segment>
        <Segment>Nested Bottom</Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment>  
            <Image src='https://www.usmanbashir.com/wp-content/uploads/bb-plugin/cache/usman-bashir-circle.jpg' /></Segment>
        <Segment>Middle</Segment>
      </Segment.Group>
      <Segment>

          <Icon name="github"  size="huge"/>
          <Icon name="linkedin"  size="huge"/>
        
</Segment>
    </Segment.Group>
  )

  
export default class Instructor extends Component {
    render() {
        return (


        <Card fluid  >             
        
            <SegmentExampleNestedSegments />
            <p>{this.props.instructor.name}</p>
                <p>{this.props.instructor.title}</p>
                <p>{this.props.instructor.age}</p>
                <p>{this.props.instructor.personality_type}</p>
                <p>{this.props.instructor.zodiac_sign}</p>
                <p>{this.props.instructor.quote}</p>
 
                <Divider/>
                
            </Card>

        )
    }
}
