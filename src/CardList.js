import React, {Component} from 'react'
import PeopleCard from './PeopleCard'
import ShipCard from './ShipCard'
import VehicleCard from './VehicleCard'
import SpeciesCard from './SpeciesCard'
import PlanetCard from './PlanetCard'
import FilmCard from './FilmCard'


class CardList extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}

	render() {
		const cards = []
		const peopleList = this.props.dataArray.filter(listItem => listItem.url.includes('people'));
		const shipsList = this.props.dataArray.filter(listItem => listItem.url.includes('starships'));
		const vehicleList = this.props.dataArray.filter(listItem => listItem.url.includes('vehicles'));
		const speciesList = this.props.dataArray.filter(listItem => listItem.url.includes('species'));
		const planetList = this.props.dataArray.filter(listItem => listItem.url.includes('homeworld'));
		const filmList = this.props.dataArray.filter(listItem => listItem.url.includes('films'));

		if (peopleList === undefined || peopleList.length !== 0){
			peopleList.map(person => cards.push(<PeopleCard person={person} clicked={this.props.resetPrimary}/>));
		}
		if (shipsList === undefined || shipsList.length !== 0){
			shipsList.map(ship => cards.push(<ShipCard ship={ship} clicked={this.props.resetPrimary}/>));
		}
		if (vehicleList === undefined || vehicleList.length !== 0){
			vehicleList.map(vehicle => cards.push(<VehicleCard vehicle={vehicle} clicked={this.props.resetPrimary}/>));
		}
		if (speciesList === undefined || speciesList.length !== 0){
			speciesList.map(species => cards.push(<SpeciesCard species={species} clicked={this.props.resetPrimary}/>));
		}
		if (planetList === undefined || planetList.length !== 0){
			planetList.map(planet => cards.push(<PlanetCard planet={planet} clicked={this.props.resetPrimary}/>));
		}
		if (filmList === undefined || filmList.length !== 0){
			filmList.map(film => cards.push(<FilmCard film={film} clicked={this.props.resetPrimary}/>));
		}
		if (cards !== undefined && cards.length !== 0){
			return cards;
		}
		else {
			return <p>Loading</p>
		}
	}
}
export default CardList;