import React, {Component} from "react"

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            user: "",
            password: ""
        }
        this.handlePassChange = this.handlePassChange.bind(this)
        this.handleUserChange = this.handleUserChange.bind(this)
        this.displayInfo = this.displayInfo.bind(this)
        
    }
    handleUserChange(value){
        this.setState({
            user: value
        });
    }
    handlePassChange(value){
        this.setState({
            password: value
        });

    }
    displayInfo(){
        alert("Username: "+this.state.user + "\n" + "Password: " + this.state.password)
    }
    render(){
        return(
        <div>
            <input username="username" onChange={(e) =>this.handleUserChange(e.target.value)}></input>
            <input password= "password" onChange={(e) => this.handlePassChange(e.target.value)}></input>
            <button login="login" onClick= {this.displayInfo}>Log In Here</button>
        </div>
        )
    }
}