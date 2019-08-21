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
import timeline from './components/timeline/TimelineData';
import secretLogo from './images/secret_logo.gif';
import aaaLogo from './images/aaa_logo.png';
import pikminLogo from './images/pikmin_logo.png';

import {
  Container,
  Image,
  Menu,
  Visibility,
  List,
  Segment
} from 'semantic-ui-react';

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
      displayedProjects: [],
      instructors:[],
      visibleLogo: logo
    }
  }

  handleSearchValue = (e) => {
    const newSearchValue = e.target.value;


    if (newSearchValue.toLowerCase() === "sei" ){
      this.setState( (prevState, props) => {  
          return {
            visibleLogo: secretLogo,

          };   
      }) 
    }

    if (newSearchValue.toLowerCase() === "eternity" ){
      this.setState( (prevState, props) => {  
          return {
            visibleLogo: logo,

          };   
      }) 
    }

    if (newSearchValue.toLowerCase() === "aaa" ){
      this.setState( (prevState, props) => {  
          return {
            visibleLogo: aaaLogo,

          };   
      }) 
    }

    if (newSearchValue.toLowerCase() === "pikmin" ){
      this.setState( (prevState, props) => {  
          return {
            visibleLogo: pikminLogo,

          };   
      }) 
    }
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
    const instructorsRef = firebase.database().ref('instructors');
    projectsRef.on('value', (snapshot) => {
      let newState = snapshot.val();

      this.setState((prevState, props) => {
        return {
          projects: newState,
          displayedProjects: newState
        }
      })
    });

    instructorsRef.on('value', (snapshot) => {
      let newState = snapshot.val();

      this.setState((prevState, props) => {
        return {
          instructors: newState,
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
                <Image size='small' src={this.state.visibleLogo} />
              </Menu.Item>
              <Menu.Item header ><Link to="/" className='link'>Eternity</Link></Menu.Item>
              <Menu.Item as='a'> <Link to="/materials" className='link'>Materials</Link></Menu.Item>
              <Menu.Item as='a'><Link to="/projects" className='link'>Projects</Link></Menu.Item>
              <Menu.Item as='a'><Link to="/family" className='link'>The Family</Link></Menu.Item>
              <Menu.Item as='a'><Link to="/timeline" className='link'>Timeline</Link></Menu.Item>
             
            </Container>
          </Menu>
        </Visibility>

        <div>
          <Route exact path='/' component={Home} />
          {/* Used render instead of component to add props, so it doesn't change the DOM node each time it render */}
          <Route path='/projects' render={(props) => <Projects projects={this.state.displayedProjects} onChange={this.handleSearchValue} searchValue={this.state.searchValue} {...props} />} />
          <Route path='/materials' component={() => <Materials materials={materials} />} />
          <Route path='/family' component={() => <Family instructors={this.state.instructors} />} />
          <Route path='/timeline' component={() => <Timeline timeline={timeline} />} />
        </div>

<Segment inverted style={{ margin: '5em 0em 0em', padding: '2em 0em' }} className="site-footer" vertical>
<Container textAlign='center'>
  <Image src={logo_1} centered size='mini' />
  <List horizontal inverted divided link size='small'>
    <List.Item>
      Made with ♥ by The Pikmin
    </List.Item>
    </List>
</Container>
</Segment>


      </Router>
    )
  }
}


