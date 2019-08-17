import React, { Component } from 'react'
import logo from './images/Triskelion_A.png'
import { Image, Divider, Menu, Segment } from 'semantic-ui-react'


export default class Home extends Component {
    state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (

            <Segment inverted>
        <Menu inverted pointing secondary>
        <Image src={logo} size='mini' />
    <Divider hidden />
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
            
        )
    }
}
