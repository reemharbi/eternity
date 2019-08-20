import React, { Component } from 'react';
import { Grid, Image, Card, Icon,Divider } from 'semantic-ui-react';
export default class Instructor extends Component {
    render() {
        return (

        <Card fluid  >             
                <Grid>
                {/* left section: picture and links */}
                <Grid.Column width={4}>
                <Image src='https://www.usmanbashir.com/wp-content/uploads/bb-plugin/cache/usman-bashir-circle.jpg' />
                <a href={this.props.instructor.git} target="_blank" >

                <Divider/>

                <Icon name="github"  size="huge"/>
                </a>
                <a href={this.props.instructor.linkedIn} target="_blank" >
                <Icon name="linkedin"  size="huge"/>
                </a>

                </Grid.Column>
                
                {/* right section */}
                <Grid.Column width={6}>
                <p>{this.props.instructor.name}</p>
                <p>{this.props.instructor.title}</p>
                <p>{this.props.instructor.age}</p>
                <p>{this.props.instructor.personality_type}</p>
                <p>{this.props.instructor.zodiac_sign}</p>
                <p>{this.props.instructor.quote}</p>


                </Grid.Column>
            </Grid>
            </Card>

        )
    }
}
