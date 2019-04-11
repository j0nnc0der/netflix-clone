import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Jon'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
