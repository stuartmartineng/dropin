import React from 'react';
import { connect } from 'react-redux';
import {Nav} from 'react-bootstrap'

class Navbar extends React.Component{
    render() {
        const { loggedIn }: any = this.props;
        //const { user }: any = this.props;
        console.log("Logged: ", loggedIn);
        return (

            <div>
                {loggedIn && <Nav fill variant="tabs">
                    <Nav.Item><Nav.Link href="#/">Dropin</Nav.Link></Nav.Item>
                    <Nav.Item ><Nav.Link href="/login">Logout</Nav.Link></Nav.Item>
                </Nav>
            }
            </div>
        )
    }
    
}

function mapStateToProps(state: any) {
    const { loggedIn } = state.authentication;
    const { user } = state.authentication;
    return {
        loggedIn: loggedIn,
        user: user
    };
}

const ConnectedComponent = connect(mapStateToProps)(Navbar);

export {ConnectedComponent as Navbar};