import React, { Component } from 'react';
import './App.css';
import CardList from './CardList'

class App extends Component {
	constructor(){
		super()
		this.state = {
			primary: [],
			cardList: [],
			}
	}
	
	componentDidMount() {
		this.getLists('https://swapi.co/api/people/30/');
		
	}

	getLists(url) {
		fetch(url)
		.then(response => response.json())
		.then(primaryCard => {
			const myArray = [primaryCard]
			this.setState({primary: myArray});
			return this.buildCardList(primaryCard);			
		})
		.then(linkArray => this.getData(linkArray))
	}

	resetPrimary= (url) => {
		this.getLists(url);
	}

	getData(linkArray) {
		Promise.all(linkArray.map(link => fetch(link)))
			.then(response => Promise.all(response.map(res => res.json())))
			.then(dataArray => this.setState({cardList: dataArray}))
		}
	
	buildCardList(primaryCard){
		let totalCards = [];
		if (primaryCard.hasOwnProperty('characters') && Array.isArray(primaryCard.characters)) {
			primaryCard.characters.map(item => totalCards.push(item))
		} else if (primaryCard.hasOwnProperty('characters')) {
			totalCards.push(primaryCard.people)
		}
		if (primaryCard.hasOwnProperty('films') && Array.isArray(primaryCard.films)) {
			primaryCard.films.map(item => totalCards.push(item))
		} else if (primaryCard.hasOwnProperty('films')) {
			totalCards.push(primaryCard.films)
		}
		if (primaryCard.hasOwnProperty('homeworld') && Array.isArray(primaryCard.homeworld)) {
			primaryCard.homeworld.map(item => totalCards.push(item))
		} else if (primaryCard.hasOwnProperty('homeworld') && primaryCard.homeworld !== null) {
			totalCards.push(primaryCard.homeworld)
		}
		if (primaryCard.hasOwnProperty('species') && Array.isArray(primaryCard.species)) {
			primaryCard.species.map(item => totalCards.push(item))
		} else if (primaryCard.hasOwnProperty('species')) {
			totalCards.push(primaryCard.species)
		}
		if (primaryCard.hasOwnProperty('vehicles') && Array.isArray(primaryCard.vehicles)) {
			primaryCard.vehicles.map(item => totalCards.push(item))
		} else if (primaryCard.hasOwnProperty('vehicles')) {
			totalCards.push(primaryCard.vehicles)
		}
		if (primaryCard.hasOwnProperty('starships') && Array.isArray(primaryCard.starships)) {
			primaryCard.starships.map(item => totalCards.push(item))
		} else if (primaryCard.hasOwnProperty('starships')) {
			totalCards.push(primaryCard.starships)
		}
		return totalCards;
	}

	render() {
		const {primary, cardList} = this.state;
		
		return (
		<div className="App">
			<header className='bg-black'>
				<div className='ba br4 bw3 b--yellow w5 center yellow'>
					<h1> Six Degrees of Wicket</h1>
				</div>
			</header>
			<body className='bg-black items-center-l pt5'>
				<div>
					<CardList dataArray = {primary} resetPrimary = {this.resetPrimary}/>
				</div>
				<div>
					<CardList dataArray = {cardList} resetPrimary = {this.resetPrimary}/>
				</div>
			</body>
		</div>
		);
	}
}

export default App;
