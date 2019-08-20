import React, { Component } from 'react';
import { Grid, Image, Card, Icon, Segment } from 'semantic-ui-react';
import './Instructor.css';
  
export default class Instructor extends Component {
    render() {
        return (


        <Card fluid >             
        
      <Segment.Group>
      <Segment>
      <h2>{this.props.instructor.title}</h2>  
      </Segment>
      <Segment.Group horizontal>
        <Segment >  
            <Image src='https://www.usmanbashir.com/wp-content/uploads/bb-plugin/cache/usman-bashir-circle.jpg' size="medium"  centered="true" /></Segment>
        <Segment>
        <Segment.Group>
        <Segment inverted> <h4>{this.props.instructor.name}</h4> </Segment>
        <Segment color='black'> <h5>Age:</h5><p>{this.props.instructor.age}</p> </Segment>
        <Segment> <h5>Personality Type:</h5><p>{this.props.instructor.personality_type}</p> </Segment>
        <Segment> <h5>Zodiac Sign:</h5><p>{this.props.instructor.zodiac_sign}</p> </Segment>
      </Segment.Group>
        </Segment>
      </Segment.Group>
      <Segment className="quote"> <h2>{`"${this.props.instructor.quote}"`}</h2> </Segment>
      <Segment>
          <Icon name="github"  size="huge"/>
          <Icon name="linkedin"  size="huge"/>   
      </Segment>
    </Segment.Group>
                
            </Card>

        )
    }
}
