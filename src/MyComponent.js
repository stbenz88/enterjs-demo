import React, { Component } from 'react';

export default class MyComponent extends Component {
    constructor(props){
        super(props);

        this.state = {message: null};
    }

    async componentDidMount() {
        const response = await fetch('/message');
        const responseBody = await response.json();

        const {message} = responseBody;
        this.setState({message});
    }

    render() {
        return (<div>Hello enterJS</div>);
    }
}