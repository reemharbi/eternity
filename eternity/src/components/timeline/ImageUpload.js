import React, { Component } from 'react';
import firebase from '../../firebase.js';
import FileUploader from "react-firebase-file-uploader";
export default class ImageUpload extends Component {
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

    render() {
        return (
            <>
                <label>Image:</label>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {this.state.imageURL && <img src={this.state.imageURL} width="100%" height="100%"/>}
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
            </>
        );
    }
}
