import React, { Component } from "react";

export class Lifecycles extends Component{
    constructor(){
        super();
        console.log('Constructor!');
    }

    componentDidMount() {
        console.log('componentDidMount!');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate!')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate!')
        return nextProps.text !== this.props.text
    }

    render() {
        return(
            <div>
                <h2>LIFECYCLES COMPONENT</h2>
                {this.props.text}
            </div>
        )
    }
}