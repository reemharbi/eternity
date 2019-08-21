import React, { Component,  } from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Image} from 'semantic-ui-react';
export default class TimelineItem extends Component {
    render() {
        let img = null;
        if (this.props.timeline.img != null){
            img = <Image src={this.props.timeline.img}/>
        }
        return (
            <div>
                    <h3 className="vertical-timeline-element-title">{this.props.timeline.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle meta">Location: {this.props.timeline.location}</h4>
                    <div className="line"></div>
                    <h4 dangerouslySetInnerHTML={{ __html: this.props.timeline.content}}/><br />
                    {/* <p>{this.props.timeline.content}</p> */}
                    <>{img}</>
                    <p>Added by: <span>{this.props.timeline.addedBy}</span></p>                
            </div>
        )
    }
}
