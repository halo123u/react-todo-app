import React, { Component } from 'react';
import { Link } from 'react-router';
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
            <form>
                <div className="row">
                    <div className="form-group col-xs-5">
                        <label>Username</label>
                        <input className="form-control"
                        value={this.state.user}
                        onChange= { event => this.onInputChange(event.target.value)}
                         type="email" 
                         placeholder="Enter Username" 
                         required/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-xs-5">
                        <label>Password</label>
                        <input className="form-control"
                         value={this.state.pass}
                         onChange= {event => this.onPassChange(event.target.value)}
                         type="password"
                         placeholder="Enter Password" 
                         required/>
                        <Link to="/signup" className="text-small">New? <b>Sign up</b></Link>
                    </div>
                </div>
                <button className="btn btn-info" onClick={this.handleSubmit}>Login</button>
            </form>

        </div>
        )
    }

    handleSubmit(event){
        event.preventDefault();
        axiox.post('http://localhost:3000/users/login', {
            email: this.state.user,
            password: this.state.pass
        }).then( res =>{
            switch(res.status){
                case 200:
                window.location.href = 'hello';

            }
            console.log(res)
            
        });
        
    }

    onInputChange(user){
        this.setState({user});
    }

    onPassChange(pass){
        this.setState({pass});
    }
};

export default Login;