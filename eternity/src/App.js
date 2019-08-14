

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import firebase from './firebase.js'; 
import Projects from './components/projects/Projects.js';
import Home from './Home';

export default class App extends Component {

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

    // fetch Projects  from realtime database and set state
    // will fetch every time there is a change on the database
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
    return (
          <Router>
        <nav>
          <Link to="/">Home</Link>{' '}
         <Link to="/projects">Projects</Link>{' '}
        </nav>

        <div>
          <Route exact path='/' component={Home} />
          {/* Used render instead of component to add props, so it doesn't change the DOM node each time it render */}
          <Route path='/projects' render={(props) => <Projects projects={this.state.displayedProjects} onChange={this.handleSearchValue} searchValue={this.state.searchValue} {...props} />} />
        </div>
      </Router>

    )
  }
}


