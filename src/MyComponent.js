import React, { Component } from 'react';

class MyComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			message: null
		};
	}

	async componentDidMount() {
		const response = await fetch('/message');
		const responseBody = await response.json();
		const {message} = responseBody;

		this.setState({message});
	}

	render() {
		return (<div>Nachricht vom Server: {this.state.message}</div>);
	}
}

export default MyComponent;
