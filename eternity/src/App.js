// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'
import firebase from './firebase.js'; 
import Projects from './Projects.js';

export default class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      projects: [{
        "by" : null,
        "deployed_url" : null,
        "git_url" : null,
        "id" : null,
        "name" : null,
        "no" : null,
        "text" : null
      }
      ]
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
      <div>
        <Projects projects={this.state.projects}/>
      </div>
    )
  }
}

