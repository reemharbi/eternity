import React, { Component } from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'


export default class MaterialItem extends Component {
    render() {
    
        return (
                  <Card>
                        {<Modal trigger={<Image src={this.props.material.img_url}  wrapped ui={false} />}>
                                <Modal.Header>Material</Modal.Header>
                                <Modal.Content image>
                                <Image wrapped size='medium' src={this.props.material.img_url} />
                                <Modal.Description>
                                        <Header><h2>{this.props.material.title}</h2></Header>
                                        <p>{this.props.material.content}</p>
                                        <p>Click <a target="_blank" href={this.props.material.pdf_url}>here</a> to view some resource</p>
                                </Modal.Description>
                                </Modal.Content>
                        </Modal>}
                </Card>
        )
    }
}