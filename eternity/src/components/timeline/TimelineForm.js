import React, { Component } from 'react';
import { Segment, Form, Checkbox, Button, Select, TextArea } from 'semantic-ui-react';
import FileUploader from "react-firebase-file-uploader";
import firebase from '../../firebase.js';
const options = [
	{ key: '1', text: 'Week 1', value: 'week 1' },
	{ key: '2', text: 'Week 2', value: 'week 2' },
	{ key: '3', text: 'Week 3', value: 'week 3' },
	{ key: '4', text: 'Week 4', value: 'week 4' },
	{ key: '5', text: 'Week 5', value: 'week 5' },
	{ key: '6', text: 'Week 6', value: 'week 6' },
	{ key: '7', text: 'Week 7', value: 'week 7' },
	{ key: '8', text: 'Week 8', value: 'week 8' },
	{ key: '9', text: 'Week 9', value: 'week 9' },
	{ key: '10', text: 'Week 10', value: 'week 10' },
	{ key: '11', text: 'Week 11', value: 'week 11' },
	{ key: '12', text: 'Week 12', value: 'week 12' }
];
export default class TimelineForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			image: "",
			isUploading: false,
			progress: 0,
			imageURL: ""
		}
	}
	handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
	handleProgress = progress => this.setState({ progress });
	handleUploadError = error => {
	  this.setState({ isUploading: false });
	  console.error(error);
	};
	handleUploadSuccess = filename => {
	  this.setState({ image: filename, progress: 100, isUploading: false });
	  firebase
		.storage()
		.ref("timeline")
		.child(filename)
		.getDownloadURL()
		.then(url => this.setState({ imageURL: url }));
	};
  
   


	onSubmitHandle = e => {
		this.props.close();
		this.props.handleSubmit(e);
	}
	render() {
		return (
			<Form onSubmit={this.onSubmitHandle}>
				<Form.Field >
					<label>Title</label>
					<input
						placeholder="Title"
						name="title"
						onChange={this.props.handleChange}
						value={this.props.title}
					/>
				</Form.Field>
				<Form.Field>
					<label>Location</label>
					<input
						placeholder="Location"
						name="location"
						onChange={this.props.handleChange}
						value={this.props.location_name}
					/>
				</Form.Field>
				<Form.Field
					control={Select}
					name="week"
					label="Week"
					options={options}
					onChange={this.props.handleChangeSelect}
					placeholder="week"
					value={this.props.week}
				/>
				<Form.Field
					control={TextArea}
					name="content"
					label="Content"
					placeholder="What happened that day? ..."
					onChange={this.props.handleChange}
					value={this.props.content}
				/>
				<Form.Field>
					<label>Image:</label>
					{this.state.isUploading && <p>Progress: {this.state.progress}</p>}
					{this.state.imageURL && <img src={this.state.imageURL} />}
					<FileUploader
						accept="image/*"
						name="image"
						randomizeFilename
						storageRef={firebase.storage().ref("timeline")}
						onUploadStart={this.handleUploadStart}
						onUploadError={this.handleUploadError}
						onUploadSuccess={this.handleUploadSuccess}
						onProgress={this.handleProgress}
					/>
				</Form.Field>
				<Button primary type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}
