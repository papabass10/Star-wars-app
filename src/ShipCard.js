import React, {Component} from 'react';

class ShipCard extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	wasClicked = () => {
		const url = this.props.ship.url;
		return this.props.clicked(url)
	}
	render(){
		return(
			<div className='bg-light-red dib br3 b--blue pa3 ma2 grow bw3 w5' onClick={this.wasClicked}>
				<h2> {this.props.ship.name} </h2>
				<p> Model: {this.props.ship.model}</p>
				<p> Manufacturer: {this.props.ship.manufacturer}</p>
				<p> Cost in Credits: {this.props.ship.cost_in_credits}</p>
				<p> Length: {this.props.ship.length}</p>
				<p> Crew: {this.props.ship.crew}</p>
				<p> Cargo Capacity: {this.props.ship.cargo_capacity}</p>
				<p> Hyperdrive Rating: {this.props.ship.hyperdrive_rating}</p>
				<p> Starship Class: {this.props.ship.starship_class}</p>
				</div>
		);
	}
}

export default ShipCard;