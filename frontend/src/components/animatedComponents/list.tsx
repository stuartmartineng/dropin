
import React, { useState } from 'react';
import {ListGroup} from 'react-bootstrap'
// @ts-ignore
import {Slide} from 'react-reveal';
import {CSSTransition} from 'react-transition-group';
import { Container, Button, Alert } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Delayed from'./delayed';

function AnimatedList(props: any){
    let count = 0;
    props.items.forEach((item: any) => {
        item.id = count;
        count++;
    });
    const listItems = props.items.map((item: any) =>
        <Delayed key={'d' + item.id} wait={item.id * 200}><ReactCSSTransitionGroup
        transitionName="slide-in"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionLeave={false} key={'t' + item.id}>
            <ListGroup.Item key={item.id}><a>{item.name}</a></ListGroup.Item>
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
            <ListGroup>
                {listItems}
            </ListGroup>
        </div>
        
    );
}

export default AnimatedList;