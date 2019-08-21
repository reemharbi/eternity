import React, { Component } from 'react'
import { Card, Icon, Image, Popup, Divider, Segment, Label} from 'semantic-ui-react'
import axios from 'axios';

import question from './zodiac/question.svg';
import aquarius from './zodiac/aquarius-1.svg';
import libra from './zodiac/libra-1.svg';
import aries from './zodiac/aries-1.svg';
import cancer from './zodiac/cancer-1.svg';
import capricorn from './zodiac/capricornus-1.svg';
import gemini from './zodiac/gemini-1.svg';
import leo from './zodiac/leo-1.svg';
import pisces from './zodiac/pisces-1.svg';
import sagittarius from './zodiac/sagittarius-1.svg';
import scorpio from './zodiac/scorpio-1.svg';
import taurus from './zodiac/taurus-1.svg';
import virgo from './zodiac/virgo-1.svg';

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
        // Zodiac Icons
        switch (this.props.student.zodiac_sign) {
            case "Aquarius":
                zodiacSign = aquarius;
                break;
            case "Libra":
                zodiacSign = libra;
                break;
            case "Cancer":
                zodiacSign = cancer;
                break;
            case "Capricorn":
                zodiacSign = capricorn;
                break;                
            case "Aries":
                zodiacSign = aries;
                break;
            case "Gemini":
                zodiacSign = gemini;
                break;
            case "Leo":
                zodiacSign = leo;
                break;
            case "Pisces":
                zodiacSign = pisces;
                break;
            case "Sagittarius":
                zodiacSign = sagittarius;
                break;
            case "Scorpio":
                zodiacSign = scorpio;
                break;
            case "Taurus":
                zodiacSign = taurus;
                break;
            case "Virgo":
                zodiacSign = virgo;
                break;

            default:
                zodiacSign = question;
          }

        let perColor;
        // Personality label color
        switch (this.props.student.personality_type) {

            case "Advocate":
            case "Mediator":
            case "Protagonist":
            case "Campaigner":
                perColor = 'green';
                break;

            case "Architect":
            case "Logician":
            case "Commander":
            case "Debater":
                perColor = 'purple';
                break;

            case "Logistician":
            case "Defender":
            case "Executive":
            case "Consul":    
                perColor = 'teal';
                break;

            case "Virtuoso":
            case "Adventurer":
            case "Entrepreneur":
            case "Entertainer":
                perColor = 'yellow';
                break;                
 

            default:
                perColor = 'grey';
          }
        return (
            <Card>
                <Segment inverted color={perColor}>  <Card.Content  header={this.props.student.name} /></Segment>
                <Image src={this.state.git.avatar_url}  size='mini' wrapped ui={false}/>
                <Card.Content>

                
                

        <Segment.Group>
        <Segment> <h5>Team:</h5><p>{this.props.student.team}</p> </Segment>
        <Segment> <h5>Personality Type:</h5><Label color={perColor} >{this.props.student.personality_type}</Label></Segment>
        <Segment> <h5>Zodiac Sign:</h5> <Popup content={this.props.student.zodiac_sign} trigger={<Image src= {zodiacSign} size='tiny' />} /> </Segment>

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
