
import React, {useState} from 'react';
import {ListGroup} from 'react-bootstrap'
// @ts-ignore
import {Slide} from 'react-reveal';
import {CSSTransition} from 'react-transition-group';
import { Container, Button, Alert, Accordion, Card } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Delayed from'./delayed';
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa'

function AnimatedList(props: any){
    let count = 0;
    props.items.forEach((item: any) => {
        item.id = count;
        count++;
    });
    const listItems = props.items.map((item: any) =>
        <Delayed key={'d' + item.id} wait={item.id * 200}><ReactCSSTransitionGroup
        transitionName={props.right ? 'slide-in-right' : 'slide-in'}
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionLeave={false} key={'t' + item.id}>
            <Card key={item.id} className="text-left">
                <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                    {item.name}
                    <Link to="/temp" className="float-right"><FaArrowRight></FaArrowRight></Link>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={item.id}>
                    <Card.Body>{item.description}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </ReactCSSTransitionGroup></Delayed>
);



    // return(
    //     <div>
    //     <ListGroup>
    //         <TransitionGroup>{listItems}</TransitionGroup>
    //     </ListGroup>
    //     <CSSTransition timeout={1000} in={test} classNames="my-node"><p>Testing</p></CSSTransition>
    //     <button onClick={handleClick}>Test</button>
    //     </div>
    // );
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    return (
        <div className="noOverflowX">
            <Accordion>
                {listItems}
            </Accordion>
        </div>
        
    );
}

export default AnimatedList;