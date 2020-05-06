import React from 'react';
import { connect } from 'react-redux';

class Navbar extends React.Component{
    constructor(props: any){
        super(props);
    }
    render() {
        const { loggedIn }: any = this.props;
        const { user }: any = this.props;
        console.log("Logged: ", loggedIn);
        return (
            <div>
                {loggedIn && <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Dropin</a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Logout ({user.user.first_name + " " + user.user.last_name})</a>
                        </li>
                    </ul>
                </nav>}
            </div>
        )
    }
    
}

function mapStateToProps(state: any) {
    const { loggedIn } = state.authentication;
    const { user } = state.authentication;
    console.log("Logline: ", loggedIn);
    return {
        loggedIn: loggedIn,
        user: user
    };
}

const ConnectedComponent = connect(mapStateToProps)(Navbar);

export {ConnectedComponent as Navbar};