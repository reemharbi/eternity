import React, { Component } from 'react'
import './ProjectItem.css';
import PosterImage from './PosterImage';
import ProjectTag from './ProjectTag';
import { Card, Icon, Image, CardContent, Label } from 'semantic-ui-react'

export default class ProjectItem extends Component {
    render() {
        const tagsList = this.props.project.tags.map((tag, index) => {
            return <ProjectTag tag={tag}/>
        })
        return (
            <Card>
            <Image src={this.props.project.img_url}  wrapped ui={false} />


    <Card.Content>
      <Card.Header>{this.props.project.name}</Card.Header>


    <Card.Meta>       
</Card.Meta>
      <Card.Description>
         {this.props.project.text}
      </Card.Description>

    </Card.Content>
    <Card.Content extra>

          <a href={this.props.project.git_url} target="_blank" >
          <Icon name="github square" size="big"/>
          </a>

          <a href={this.props.project.deployed_url} target="_blank" >
          <Icon name="play" size="big"/>
          </a>
          <Label as='a' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      {this.props.project.by}

    </Label>
          
      </Card.Content>

      <Card.Content extra>

      <p>{tagsList}</p>
          
      </Card.Content>
            </Card>
        )
    }
}
