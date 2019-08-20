import React, { Component } from 'react'
import { Card, Icon, Image, List, Divider, Segment} from 'semantic-ui-react'
import axios from 'axios';
import aquarius from './zodiac/aquarius-1.svg';
import libra from './zodiac/libra-1.svg';
export default class Student extends Component {
    constructor(props){
        super(props);

        this.state ={ 
            git:{}
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: `https://api.github.com/users/${this.props.student.git}`
          }).then(response => {
                this.setState({ git: response.data })
          });
    }
    render() {
        let zodiacSign;

        switch (this.props.student.zodiac_sign) {
            case "Aquarius":
              zodiacSign = aquarius;
              break;
            case "Libra":
                zodiacSign = libra;
              default:
                zodiacSign = libra;
          }
        return (
            <Card>
                <Card.Content header={this.props.student.name} />
                <Divider/>
                <Image src={this.state.git.avatar_url}  size='mini' wrapped ui={false}/>
                <Card.Content>



        <Segment.Group>
        <Segment> <h5>Team:</h5><p>{this.props.student.team}</p> </Segment>
        <Segment> <h5>Personality Type:</h5><p>{this.props.student.personality_type}</p> </Segment>
        <Segment> <h5>Zodiac Sign:</h5><Image src= {zodiacSign} size='tiny' /> </Segment>

      </Segment.Group>
      
                </Card.Content>
                <Card.Content extra>

                    <a href={`https://github.com/${this.props.student.git}`} target="_blank" >
                    <Icon name="github square" size="big"/>
                    </a>

                    <a href={this.props.student.linkedIn} target="_blank" >
                    <Icon name="linkedin" size="big"/>
                    </a>



                </Card.Content>
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
            </Card>
        )
    }
}
