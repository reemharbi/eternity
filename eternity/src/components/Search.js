import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <label htmlFor="search">
                    Search: 
                </label>
                <input type="search"
                       name="search"
                       value={this.props.value}
                       onChange={this.props.onChange}/>
            </div>
        )
    }
}
