import React from 'react';
import { connect } from 'react-redux';
import {Nav, Navbar, Button} from 'react-bootstrap';

class DropinNavbar extends React.Component{
    render() {
        const { loggedIn, user }: any = this.props;
        //const { user }: any = this.props;
        console.log("Logged: ", loggedIn);

        return (

            <div>
                {loggedIn && 
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">Dropin</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Item>
                                <Navbar.Text>
                                    <a>Signed in as: {user.user.first_name + ' ' + user.user.last_name + ' '}{'\u00A0'}</a>
                                </Navbar.Text>
                            </Nav.Item>
                            <Nav.Item>
                                <Button variant="outline-info" size="sm" href="/login">Logout</Button>
                            </Nav.Item>
                        </Navbar.Collapse>
                    </Navbar>
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

const ConnectedComponent = connect(mapStateToProps)(DropinNavbar);

export {ConnectedComponent as DropinNavbar};