import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'

export default class ProjectTag extends Component {
    render() {
        let color = "";

        switch (this.props.tag) {
            case "HTML":
              color = "red";
              break;
            case "CSS":
              color = "yellow";
              break;
            case "JavaScript":
               color = "blue";
              break;
            case "Ruby":
              color = "green";
              break;
            case "Ruby on Rails":
              color = "Brown";
              break;
            case "React":
              color = "cyan";
              break;
              default:
                color =""
          }
        return (
            <Label color={color} tag>{this.props.tag} </Label>
        )
    }
}
