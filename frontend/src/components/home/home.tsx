import React from 'react';
//import LeaguesTable from './leaguesTable';
import AnimatedList from '../animatedComponents/list'
import {Container, Row, Col, Card, Button, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaPlus} from 'react-icons/fa'


class Home extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render() {
        const leagues = [
            {name: "League1", description: "This the description of the leagues.  It is a good description"},
            {name: "League2", description: "This the description of the leagues.  It is a good description"},
            {name: "League3", description: "This the description of the leagues.  It is a good description"},
            {name: "League4", description: "This the description of the leagues.  It is a good description"},
        ];
        return (
            <Container>
                <div className="Home">
                    <h1>Home</h1>
                </div>
                <Row>
                    <Col>
                        <h3 className="display-inline">Leagues</h3><Link to="/temp" ><FaPlus></FaPlus></Link>
                    </Col>
                    <Col>
                        <h3>Teams</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AnimatedList items={leagues} right={false}/>
                    </Col>
                    <Col>
                        <AnimatedList items={leagues} right={false}/>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Home;