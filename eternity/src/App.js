import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './images/Triskelion_B.gif'
import logo_1 from './images/Triskelion_A.png'
import firebase from './firebase.js'; 
import Projects from './components/projects/Projects.js';
import Home from './Home';
import Materials from './components/materials/Materials';
import materials from './components/materials/MaterialsData';
import Family from './components/family/Family';
import Timeline from './components/timeline/Timeline';

import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
  List,
  Segment
} from 'semantic-ui-react'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}


export default class App extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  constructor(props){
    super(props);
    

    this.state = {
      searchValue: '',
      projects: [],
      displayedProjects: []
    }
  }

  handleSearchValue = (e) => {
    const newSearchValue = e.target.value;

    this.setState( (prevState, props) => {
      const filteredProjects = prevState.projects.filter( project => {
        return (
          project.name.toLowerCase().includes(newSearchValue.toLowerCase()) ||
          project.by[0].toLowerCase().includes(newSearchValue.toLowerCase())
        )
      })

        return {
          searchValue: newSearchValue,
          displayedProjects: filteredProjects
        };   
    }) 
  }

  componentDidMount(){

    const projectsRef = firebase.database().ref('projects');
    projectsRef.on('value', (snapshot) => {
      let newState = snapshot.val();

      this.setState((prevState, props) => {
        return {
          projects: newState,
          displayedProjects: newState
        }
      })
    });

  }
  render() {
    const { menuFixed, activeItem } = this.state

    return (
          <Router>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='small' src={logo} />
              </Menu.Item>
              <Menu.Item header ><Link to="/" className='link'>Eternity</Link></Menu.Item>
              <Menu.Item as='a'> <Link to="/materials" className='link'>Materials</Link></Menu.Item>
              <Menu.Item as='a'><Link to="/projects" className='link'>Projects</Link></Menu.Item>
              <Menu.Item as='a'><Link to="/family" className='link'>The Family</Link></Menu.Item>
              <Menu.Item as='a'><Link to="/timeline" className='link'>Timeline</Link></Menu.Item>
             
              <Menu.Menu position='right'>
                <Dropdown text='Dropdown' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>

        <div>
          <Route exact path='/' component={Home} />
          {/* Used render instead of component to add props, so it doesn't change the DOM node each time it render */}
          <Route path='/projects' render={(props) => <Projects projects={this.state.displayedProjects} onChange={this.handleSearchValue} searchValue={this.state.searchValue} {...props} />} />
          <Route path='/materials' component={() => <Materials materials={materials} />} />
          <Route path='/family' component={() => <Family Family={Family} />} />
          <Route path='/timeline' component={() => <Timeline Timeline={Timeline} />} />
        </div>

        <Segment inverted style={{ margin: '5em 0em 0em', padding: '2em 0em' }} vertical>
<Container textAlign='center'>
  <Image src={logo_1} centered size='mini' />
  <List horizontal inverted divided link size='small'>
    <List.Item as='a' href='#'>
      Site Map
    </List.Item>
    <List.Item as='a' href='#'>
      Contact Us
    </List.Item>
    <List.Item as='a' href='#'>
      Terms and Conditions
    </List.Item>
    <List.Item as='a' href='#'>
      Privacy Policy
    </List.Item>
  </List>
</Container>
</Segment>


      </Router>
    )
  }
}


