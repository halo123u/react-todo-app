import React, { Component } from 'react';
import axiox from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {user:'' , pass:''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onPassChange = this.onPassChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="form-group col-xs-5">
                        <label>Username</label>
                        <input className="form-control"
                        val={this.state.user}
                        onChange= { event => this.onInputChange(event.target.value)}
                         type="text" 
                         placeholder="Enter Username" 
                         required/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-xs-5">
                        <label>Password</label>
                        <input className="form-control"
                         val={this.state.pass}
                         onChange= {event => this.onPassChange(event.target.value)}
                         type="password"
                         placeholder="Enter Password" 
                         required/>
                        <a href="#" className="text-small">New? <b>Sign up</b></a>
                    </div>
                </div>
                <button className="btn btn-info" type="submit">Login</button>
            </form>

        </div>
        )
    }

    handleSubmit(event){
        event.preventDefault();
        axiox.post('http://localhost:3000/users', {
            email: this.state.user,
            password: this.state.pass
        }).then( res =>{
            console.log(res)
        });
    }

    onInputChange(user){
        this.setState({user});
        console.log(this.state.user)
    }

    onPassChange(pass){
        this.setState({pass});
        console.log(this.state.pass);
    }
};

export default Login;