import React, {Component} from 'react';

class VehicleCard extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	wasClicked = () => {
		const url = this.props.vehicle.url;
		return this.props.clicked(url)
	}

	render(){
		return(
			<div className='bg-light-green dib br3 b--blue pa3 ma2 grow bw3 w5' onClick={this.wasClicked}>
				<h2> {this.props.vehicle.name} </h2>
				<p> Model: {this.props.vehicle.model}</p>
				<p> Manufacturer: {this.props.vehicle.manufacturer}</p>
				<p> Cost in Credits: {this.props.vehicle.cost_in_credits}</p>
				<p> Length: {this.props.vehicle.length}</p>
				<p> Crew: {this.props.vehicle.crew}</p>
				<p> Cargo Capacity: {this.props.vehicle.cargo_capacity}</p>
				<p> Max Speed: {this.props.vehicle.max_atmosphering_speed}</p>
				<p> Vehicle Class: {this.props.vehicle.vehicle_class}</p>
				</div>
		);
	}
}

export default VehicleCard;