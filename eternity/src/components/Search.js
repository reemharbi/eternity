import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <Input
                icon='search' 
                placeholder='Search...'
                 type="search"
                       name="search"
                       value={this.props.value}
                       onChange={this.props.onChange}/>
            </div>
        )
    }
}
