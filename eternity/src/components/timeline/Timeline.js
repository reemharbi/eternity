import React, { Component } from 'react'
import TimelineItem from './TimelineItem';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';


export default class Timeline extends Component {
    render() {

        const allTimeline = this.props.timeline.map((timeline, index) => {
            return <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date={timeline.week}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} >
                    
                    <TimelineItem key={index} timeline={timeline} /></VerticalTimelineElement>;
            })

        return (
            <div className="test">
                <VerticalTimeline>

                    {allTimeline}

                </VerticalTimeline>
            </div>
        )
    }
}
