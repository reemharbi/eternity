import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom';
import logo from './images/Triskelion_B.gif';
import logo_1 from './images/Triskelion_A.png';
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
import saraCatsLogo from './images/sara_cats.jpg';
import ModelAzzam from './components/ModelAzzam';
import {
	Container,
	Image,
	Menu,
	Visibility,
	List,
	Segment,
	Divider,
	Modal,
	Icon,
	Button,
	Header
} from 'semantic-ui-react';

const menuStyle = {
	border: 'none',
	borderRadius: 0,
	boxShadow: 'none',
	marginBottom: '1em',
	transition: 'box-shadow 0.5s ease, padding 0.5s ease'
};

const fixedMenuStyle = {
	backgroundColor: '#fff',
	border: '1px solid #ddd',
	boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
};

export default class App extends Component {
	state = {
		menuFixed: false,
		overlayFixed: false
	};
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	constructor(props) {
		super(props);

		this.state = {
			searchValue: '',
			projects: [],
			displayedProjects: [],
			instructors: [],
			students: [],
			visibleLogo: logo,
			azzam: false,
			websiteAlive: true,

			secretText: '',
			savedText: 'sudo  rm  -rf  /',
			pos: 0,
			secretText1: '',
			savedText1: 'rm: /sei/projects: projects has been deleted',

			secretText2: '',
			savedText2: 'rm: /pikmin/red: RIP Hazim',

			secretText3: '',
			savedText3: 'rm: /pikmin/yellow: RIP Reem',

			secretText4: '',
			savedText4: 'rm: /pikmin/blue: RIP Bedour',

			secretText5: '',
			savedText5: 'rm: /pikmin: Goodbye Pikmin'
		};
	}

	resetSearchValue = (e) => {
		this.setState((prevState, props) => {
			return {
				searchValue: '',
				azzam: false,
				displayedProjects: prevState.projects
			};
		});
	};
	handleSearchValue = (e) => {
		const newSearchValue = e.target.value;

		if (newSearchValue.toLowerCase() === 'sei') {
			this.setState((prevState, props) => {
				return {
					visibleLogo: secretLogo
				};
			});
		}

		if (newSearchValue.toLowerCase() === 'eternity') {
			this.setState((prevState, props) => {
				return {
					visibleLogo: logo
				};
			});
		}

		if (newSearchValue.toLowerCase() === 'aaa') {
			this.setState((prevState, props) => {
				return {
					visibleLogo: aaaLogo
				};
			});
		}

		if (newSearchValue.toLowerCase() === 'pikmin') {
			this.setState((prevState, props) => {
				return {
					visibleLogo: pikminLogo
				};
			});
		}
		if (newSearchValue.toLowerCase() === 'sara') {
			this.setState((prevState, props) => {
				return {
					visibleLogo: saraCatsLogo
				};
			});
		}
		if (newSearchValue.toLowerCase() === 'azzam') {
			this.setState((prevState, props) => {
				return {
					azzam: true
				};
			});
		} else {
			this.setState((prevState, props) => {
				return {
					azzam: false
				};
			});
		}

		this.setState((prevState, props) => {
			const filteredProjects = prevState.projects.filter((project) => {
				return (
					project.name.toLowerCase().includes(newSearchValue.toLowerCase()) ||
					project.by.some((person) => {
						return person.toLowerCase().includes(newSearchValue.toLowerCase());
					}) ||
					(project.team_name != undefined
						? project.team_name.toLowerCase().includes(newSearchValue.toLowerCase())
						: false) ||
					project.no == newSearchValue
				);
			});

			return {
				searchValue: newSearchValue,
				displayedProjects: filteredProjects
			};
		});
	};

	killWebsite = (e) => {
		this.setState((prevState, props) => {
			return {
				websiteAlive: false
			};
		});
		setTimeout(this.changeText.bind(this), 1000);
	};
	text1 = () => {
		this.setState((prevState, props) => {
			return {
				secretText1: prevState.savedText1
			};
		});
		setTimeout(this.text2.bind(this), 2000);
	};
	text2 = () => {
		this.setState((prevState, props) => {
			return {
				secretText2: prevState.savedText2
			};
		});
		setTimeout(this.text3.bind(this), 2000);
	};
	text3 = () => {
		this.setState((prevState, props) => {
			return {
				secretText3: prevState.savedText3
			};
		});
		setTimeout(this.text4.bind(this), 2000);
	};
	text4 = () => {
		this.setState((prevState, props) => {
			return {
				secretText4: prevState.savedText4
			};
		});
		setTimeout(this.text5.bind(this), 2000);
	};
	text5 = () => {
		this.setState((prevState, props) => {
			return {
				secretText5: prevState.savedText5
			};
		});
	};

	componentDidMount() {
		const projectsRef = firebase.database().ref('projects');
		const instructorsRef = firebase.database().ref('instructors');
		const studentsRef = firebase.database().ref('students');
		projectsRef.on('value', (snapshot) => {
			let newState = snapshot.val();

			this.setState((prevState, props) => {
				return {
					projects: newState,
					displayedProjects: newState
				};
			});
		});

		instructorsRef.on('value', (snapshot) => {
			let newState = snapshot.val();

			this.setState((prevState, props) => {
				return {
					instructors: newState
				};
			});
		});

		studentsRef.on('value', (snapshot) => {
			let newState = snapshot.val();

			this.setState((prevState, props) => {
				return {
					students: newState
				};
			});
		});
	}

	changeText() {
		this.setState((prevState, props) => {
			return {
				secretText: prevState.secretText + prevState.savedText.charAt(prevState.pos),
				pos: prevState.pos + 1
			};
		});
		if (this.state.pos < this.state.savedText.length) {
			setTimeout(this.changeText.bind(this), 200);
		} else {
			setTimeout(this.text1.bind(this), 2000);
		}
	}
	render() {
		const { menuFixed, activeItem } = this.state;

		if (this.state.websiteAlive) {
			return (
				<HashRouter basename="/eternity">
					<Visibility onBottomPassed={this.stickTopMenu} onBottomVisible={this.unStickTopMenu} once={false}>
						<Menu
							borderless
							fixed={menuFixed ? 'top' : undefined}
							style={menuFixed ? fixedMenuStyle : menuStyle}
						>
							<Container text>
								<Menu.Item>
									<Link to="/">
										{' '}
										<Image size="small" src={this.state.visibleLogo} />{' '}
									</Link>
								</Menu.Item>
								<Menu.Item header>
									<Link to="/" className="link">
										Eternity
									</Link>
								</Menu.Item>
								<Menu.Item as="a">
									{' '}
									<Link to="/materials" className="link">
										Materials
									</Link>
								</Menu.Item>
								<Menu.Item as="a">
									<Link to="/projects" className="link">
										Projects
									</Link>
								</Menu.Item>
								<Menu.Item as="a">
									<Link to="/family" className="link">
										The Family
									</Link>
								</Menu.Item>
								<Menu.Item as="a">
									<Link to="/timeline" className="link">
										Timeline
									</Link>
								</Menu.Item>
							</Container>
						</Menu>
					</Visibility>

					<div>
						<Route exact path="/" component={Home} />
						{/* Used render instead of component to add props, so it doesn't change the DOM node each time it render */}
						<Route
							path="/projects"
							render={(props) => (
								<Projects
									projects={this.state.displayedProjects}
									onChange={this.handleSearchValue}
									searchValue={this.state.searchValue}
									azzam={this.state.azzam}
									reset={this.resetSearchValue}
									{...props}
								/>
							)}
						/>
						<Route path="/materials" component={() => <Materials materials={materials} />} />
						<Route
							path="/family"
							component={() => (
								<Family
									instructors={this.state.instructors}
									students={this.state.students}
									usman={this.killWebsite}
								/>
							)}
						/>
						<Route path="/timeline" component={() => <Timeline timeline={timeline} />} />
					</div>

					<div class="ui bottom fixed menu inverted centered">
						<Container style={{ padding: '2em 0em' }} vertical>
							<p className="pikmin">
								<Image src={logo_1} size="mini" centered />
								Made with ♥ by The Pikmin
							</p>
						</Container>
					</div>
				</HashRouter>
			);
		} else {
			return (
				<Container>
					<style>
						{`
      html, body {
        background-color: #000000 !important;
      }
      p {
        color: white;
        font-size: 60px:
        font-family: "Consolas"
      }
      .green {
        color: green;
      }
      .blue {
        color: blue;
      }
      span {

      }
    }
    `}
					</style>

					<p>
						<span className="green">ThePikmin@PC-A4JAE23</span>:<span className="blue">/sei/projects/eternity</span>
					</p>
					<p>$ {this.state.secretText}</p>
					<p>{this.state.secretText1}</p>
					<p>{this.state.secretText2}</p>
					<p>{this.state.secretText3}</p>
					<p>{this.state.secretText4}</p>
					<p>{this.state.secretText5}</p>
				</Container>
			);
		}
	}
}
