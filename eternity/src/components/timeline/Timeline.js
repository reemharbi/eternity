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
			const user = this.props.students.some((student) => {
				return student.git === this.props.user.login;
			});
			if (user) {

				return (
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
								handleSubmit={this.props.handleSubmit}
							/>
						</Modal.Content>
					</Modal>
				);
			} else {
				return null;
			}
		}
	};

	render() {
		const allTimeline = this.props.timeline.map((timeline, key) => {
			return (
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date={timeline.week}
					iconStyle={{ background: '#999999', color: '#000' }}
					icon={<Image size="mini" src={logo} centered="true" className="icon" />}
				>
					<TimelineItem key={key} timeline={timeline} />
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
