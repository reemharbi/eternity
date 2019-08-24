import React, { Component } from 'react';
import TimelineItem from './TimelineItem';
import { Container, Image, Divider, Button, Modal } from 'semantic-ui-react';
import logo from '../../images/Triskelion_A.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import TimelineForm from './TimelineForm.js';
import ModelAzzam from '../ModelAzzam';

export default class Timeline extends Component {
	showAddMemory = () => {
		if (this.props.user && this.props.students) {
			return this.props.students.some((student) => {
				return student.git === this.props.user.login;
			}) ? (
				<Modal
					trigger={
						<Button basic color="teal" centered>
							Add a New Memory
						</Button>
					}
				>
					<Modal.Header textAlign="center">New Memory</Modal.Header>
					<Modal.Content>
						<TimelineForm
							handleChange={this.props.handleChange}
							title={this.props.title}
							content={this.props.content}
							location_name={this.props.location_name}
							week={this.props.week}
							handleChangeSelect={this.props.handleChangeSelect}

						/>
					</Modal.Content>
				</Modal>
			) : null;
		}
	};

	render() {
		const allTimeline = this.props.timeline.map((timeline, index) => {
			return (
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={timeline.week}
					iconStyle={{ background: '#999999', color: '#000' }}
					icon={<Image size="mini" src={logo} centered="true" className="icon" />}
				>
					<TimelineItem key={index} timeline={timeline} />
				</VerticalTimelineElement>
			);
		});

		return (
			<Container className="timeline">
				<div className="memories">
					<Divider horizontal>Memories Timeline</Divider>
					<Container textAlign="center">{this.showAddMemory()}</Container>

					<div className="test">
						<Divider />
						<VerticalTimeline>{allTimeline}</VerticalTimeline>
					</div>
				</div>
			</Container>
		);
	}
}
