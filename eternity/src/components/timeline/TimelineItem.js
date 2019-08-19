import React, { Component } from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class TimelineItem extends Component {
    render() {
        return (
            <div>
                    <h3 className="vertical-timeline-element-title">{this.props.timeline.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle meta">Location: {this.props.timeline.location}</h4>
                    <div className="line"></div>
                    <p>{this.props.timeline.content}</p>
                    <p>Added by: <span>{this.props.timeline.addedBy}</span></p>                
            </div>
        )
    }
}
