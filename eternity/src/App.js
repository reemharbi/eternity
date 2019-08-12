
import React, { Component } from 'react'
import firebase from './firebase.js'; 
import Projects from './Projects.js';

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
      this.state.projects.length ?
      <div>
        <Projects projects={this.state.projects}/>
      </div>
      :
      <h1>Loading Contents</h1>

    )
  }
}

