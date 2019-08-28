import React, { Component, Button } from 'react'

export default class ImageUpload extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         image: null,
    //         url: ''
    //     };
    //     this.handleChange = this.handleChange.bind(this);

    // }

    // handleChange = e => {
    //     const image= e.target.files[0];
    //     if (image){
    //         this.setState({image});
    //     }
    // }

    render() {
        return (
            <div>
                <input type="file" />
                <Button>Upload</Button>
                {/* <Button
                    content="Choose File"
                    labelPosition="left"
                    icon="file"
                    onClick={() => this.fileInputRef.current.click()}
                />
                <input
                    ref={this.fileInputRef}
                    type="file"
                    hidden
                    onChange={this.fileChange}
                /> */}
            </div>
        )
    }
}
