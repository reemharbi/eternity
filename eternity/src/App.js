

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import firebase from './firebase.js'; 
import Projects from './Projects.js';
import Home from './Home';
import Materials from './Materials';
import materials from './MaterialsData';


export default class App extends Component {

  constructor(props){
    super(props);
    

    this.state = {
      projects: []
    }
  }

  componentDidMount(){

    // fetch Projects  from realtime database and set state
    // will fetch every time there is a change on the database
    const projectsRef = firebase.database().ref('projects');
    projectsRef.on('value', (snapshot) => {
      let newState = snapshot.val();

      this.setState((prevState, props) => {
        return {
          projects: newState
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
         <Link to="/materials">Materials</Link>{' '}
        </nav>

        <div>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={() => <Projects projects={this.state.projects}/>} />
          <Route path='/materials' component={() => <Materials materials={materials} />} />
        </div>
      </Router>

    )
  }
}


