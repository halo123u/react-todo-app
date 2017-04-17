import React, { Component } from 'react';

class Login extends Component {
    render(){
        return (
        <div className="container">
            <form >
                <div className="row">
                    <div className="form-group col-xs-5">
                        <label>Username</label>
                        <input className="form-control" type="text" placeholder="Enter Username" required/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-xs-5">
                        <label>Password</label>
                        <input className="form-control" type="password" placeholder="Enter Password" required/>
                        <a href="#" className="text-small">New? <b>Sign up</b></a>
                    </div>
                </div>
                <button className="btn btn-info">Login</button>
            </form>

        </div>
        )

    }
};

export default Login;