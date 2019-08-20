import React, { Component } from 'react'
import { Card, Icon, Image, List} from 'semantic-ui-react'

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
        return (
            <Card>
                <Card.Content header={this.props.student.name} />
                <Card.Content>
                    <List>
                        <List.Item>Age: {this.props.student.age}</List.Item>
                        <List.Item>Zodiac sign: {this.props.student.zodiac_sign}</List.Item>
                        <List.Item>Personality: {this.props.student.personality_type}</List.Item>
                    </List>
                </Card.Content>
                <Card.Content extra>

                    <a href={`https://github.com/users/${this.props.student.git}`} target="_blank" >
                    <Icon name="github square" size="big"/>
                    </a>

                    <a href={this.props.student.linkedIn} target="_blank" >
                    <Icon name="linkedin" size="big"/>
                    </a>



                </Card.Content>

            </Card>
        )
    }
}
