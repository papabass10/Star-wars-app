import React, { Component } from 'react';
import Search from './Search';
import InfoCard from './InfoCard'
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			attributes: [],
			values: []
		}
	}
	
	componentDidMount() {
		fetch('https://swapi.co/api/people/1/')
		.then(response => response.json())
		.then(resp => {
			this.setState({attributes: Object.keys(resp), values: Object.values(resp)});
		})
	}

	render() {
		const {attributes, values} = this.state;
		return (
		<div className="App">
			<header className='bg-black'>
				<div className='ba br4 bw3 b--yellow w5 center yellow'>
					<h1> Star Wars </h1>
					<h5> Reference Cards </h5>
				</div>
			</header>
			<body className='bg-black items-center-l pt5'>
				<Search search/>
				<InfoCard attributes={attributes} values={values}/>
			</body>
		</div>
		);
	}
}

export default App;
