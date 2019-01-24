import React, {Component} from "react"
import App from "./App.js"

export default class ToDo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               <p>{this.props.label}</p>
            </div>
        )
    }
}