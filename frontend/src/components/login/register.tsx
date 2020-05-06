import React from 'react';
import {userActions} from '../../actions/login.actions'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Register extends React.Component{
    constructor(props: any){
        super(props);
        const { dispatch }: any = this.props;

        dispatch(userActions.logout());
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            email: "",
            firstName: "",
            lastName: "",
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e: any) {
        e.preventDefault();


        this.setState({ submitted: true });
        const { username, password, passwordConfirm, email, firstName, lastName}: any = this.state;
        const { dispatch }: any = this.props;
        let user = {
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName
        }
        if (username && password && passwordConfirm && password == passwordConfirm && email && firstName && lastName) {
            dispatch(userActions.register(user));
        }
    }

    handleChange(e: any) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        
        const { loggingIn } :any = this.props;
        const { username, password, passwordConfirm, email, firstName, lastName, submitted }: any = this.state;

        return (
            <form name="form row" onSubmit={this.handleSubmit}>
                <div className="card login-card">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }

                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>

                        <div className={'form-group' + (submitted && !passwordConfirm ? ' has-error' : '')}>
                            <label htmlFor="passwordConfirm">Confirm Password</label>
                            <input type="password" className="form-control" name="passwordConfirm" value={passwordConfirm} onChange={this.handleChange} />
                            {submitted && !passwordConfirm &&
                                <div className="help-block">You must confirm your Password</div>
                            }
                            {submitted && password != passwordConfirm  &&
                                <div className="help-block">Your passwords do not match</div>
                            }
                        </div>

                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={firstName} onChange={this.handleChange} />
                        {submitted && !firstName &&
                            <div className="help-block">First Name is required</div>
                        }

                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={lastName} onChange={this.handleChange} />
                        {submitted && !lastName &&
                            <div className="help-block">Last Name is required</div>
                        }

                        <label htmlFor="lastName">Email</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                    <Link className="bottom-padding" to="/login">Already have an account? Login!</Link>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state: any) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Register);
export { connectedLoginPage as Register }; 