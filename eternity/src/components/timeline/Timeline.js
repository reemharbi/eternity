import React, { Component } from 'react'
import TimelineItem from './TimelineItem';
import { Container, Image, Divider } from 'semantic-ui-react';
import logo from '../../images/Triskelion_A.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';


export default class Timeline extends Component {
    render() {


        const allTimeline = this.props.timeline.map((timeline, index) => {
            return <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date={timeline.week}
                    iconStyle={{ background: '#999999', color: '#000' }} 
                    icon={<Image size="mini" src={logo} centered="true" className="icon" />}>
                    
                    <TimelineItem key={index} timeline={timeline} /></VerticalTimelineElement>;
            })

        return (
            
            <Container>
            <div className="memories">
             <Divider horizontal>Memories Timeline</Divider>
             
            <div className="test">
                <Divider />
                <VerticalTimeline>

                    {allTimeline}

                </VerticalTimeline>
            </div>
            </div>
            </Container>
        )
    }
}
