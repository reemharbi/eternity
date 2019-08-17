import React, { Component } from 'react'
import logo from './images/Triskelion_B.png'
export default class Home extends Component {
    render() {
        return (
            <div>
                <img id="logo" class="animated inifinite rotateIn" src={logo} />
                <h1>Hello</h1>
            </div>
        )
    }
}
