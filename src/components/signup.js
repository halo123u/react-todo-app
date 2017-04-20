import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state= { email:'', pass:'', pass2:''};
        this.emailChange= this.emailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <div className="container"> 
                <h3>Sign Up!</h3>
                <form>
                    <div className="row">
                        <div className="form-group col-xs-5">
                            <label >Email</label>
                            <input 
                            className="form-control"
                            type="email"
                            placeholder="Email" 
                            onChange={event => this.emailChange(event.target.value)}
                            value={this.state.email}/>
                        </div>
                    </div> 

                    <div className="row">
                        <div className="form-group col-xs-5">
                            <label >Password</label>
                            <input className="form-control" 
                            type="password" 
                            placeholder="Password" 
                            onChange={event => this.passChange(event.target.value)}
                            value={this.state.pass}/>
                        </div>
                    </div> 

                    <div className="row">
                        <div className="form-group col-xs-5">
                            <label >Retype Password</label>
                            <input className="form-control" 
                            type="password" 
                            placeholder="Retype Password" 
                            onChange={event => this.secondPassChange(event.target.value)}
                            value={this.state.pass2}/>
                        </div>
                    </div>

                    <button className="btn btn-info" onClick={this.handleSubmit}>Submit</button> 
                </form>
        </div>
        );
    };

    emailChange(email) {
        this.setState({email});
    }
     passChange(pass) {
        this.setState({pass});
    }
     secondPassChange(pass2) {
        this.setState({pass2});
    }

    handleSubmit(event){
        event.preventDefault();
        const password = this.state.pass;
        const secondPass= this.state.pass2;

        if(password !== secondPass){
            console.log('passwords do not match');
        } else {
            axios.post('http://localhost:3000/users', {
                email: this.state.email,
                password: password         
            }).then((res)=>{
                if(res.status === 200){
                window.location.href='hello';
                }
            });
        }
    }

}

export default SignUp;