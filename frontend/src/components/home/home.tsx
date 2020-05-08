import React from 'react';
//import LeaguesTable from './leaguesTable';
import AnimatedList from '../animatedComponents/list'
import {Container, Row, Col} from 'react-bootstrap';

class Home extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render() {
        const leagues = [
            {name: "League1"},
            {name: "League2"},
            {name: "League3"},
            {name: "League4"}
        ];
        return (
            <Container>
                <div className="Home">
                    <h1>Home</h1>
                </div>
                <Row>
                    <Col>
                        <h3>Leagues</h3>
                    </Col>
                    <Col>
                        <h3>Teams</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AnimatedList items={leagues}/>
                    </Col>
                    <Col>
                        <AnimatedList items={leagues}/>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Home;