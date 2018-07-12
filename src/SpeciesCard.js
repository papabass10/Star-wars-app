import React, {Component} from 'react';

class SpeciesCard extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	wasClicked = () => {
		const url = this.props.species.url;
		console.log(url)
		return this.props.clicked(url)
	}
	render(){
		return(
			<div className='bg-light-blue dib br3 b--blue pa3 ma2 grow bw3 w5' onClick={this.wasClicked}>
				<h2> {this.props.species.name} </h2>
				<p> Classification: {this.props.species.classification}</p>
				<p> Designation: {this.props.species.designation}</p>
				<p> Average Height: {this.props.species.average_height}</p>
				<p> Skin Colors: {this.props.species.skin_colors}</p>
				<p> Hair Colors: {this.props.species.hair_colors}</p>
				<p> Eye Colors: {this.props.species.eye_colors}</p>
				<p> Lifespan: {this.props.species.lifespan}</p>
				<p> Language: {this.props.species.language}</p>
				</div>
		);
	}
}

export default SpeciesCard;