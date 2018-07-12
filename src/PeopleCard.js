import React, {Component} from 'react';

class PeopleCard extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	wasClicked = () => {
		const url = this.props.person.url;
		return this.props.clicked(url)
	}
	render(){
		return(
			<div className='bg-washed-yellow dib br3 b--blue pa3 ma2 grow bw3 w5' onClick={this.wasClicked}>
				<h2> {this.props.person.name} </h2>
				<p> Height: {this.props.person.height}</p>
				<p> Mass: {this.props.person.mass}</p>
				<p> Hair Color: {this.props.person.hair_color}</p>
				<p> Skin Color: {this.props.person.skin_color}</p>
				<p> Eye Color: {this.props.person.eye_color}</p>
				<p> Birth Year: {this.props.person.birth_year}</p>
				<p> Gender: {this.props.person.gender}</p>
				</div>
		);
	}
}
export default PeopleCard;