import React from 'react';
import PropTypes from 'prop-types';

type MyProps = { wait: number };
type MyState = { hidden: boolean };
class Delayed extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.wait);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }

}


export default Delayed;