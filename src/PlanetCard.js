import React, {Component} from 'react';

class PlanetCard extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	wasClicked = () => {
		const url = this.props.planet.url;
		return this.props.clicked(url)
	}
	render(){
		return(
			<div className='bg-light-purple dib br3 b--blue pa3 ma2 grow bw3 w5' onClick={this.wasClicked}>
				<h2> {this.props.planet.name} </h2>
				<p> Rotation Period: {this.props.planet.rotation_period} hours</p>
				<p> Orbital Period: {this.props.planet.orbital_period} days</p>
				<p> Diameter: {this.props.planet.diameter}</p>
				<p> Climate: {this.props.planet.climate}</p>
				<p> Gravity: {this.props.planet.gravity}</p>
				<p> Terrain: {this.props.planet.terrain}</p>
				<p> Population: {this.props.planet.population}</p>
				</div>
		);
	}
}

export default PlanetCard;