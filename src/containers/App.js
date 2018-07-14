import React, { Component } from 'react';
import '../containers/App.css';
import CardList from '../components/CardList'
import CheckWin from '../components/CheckWin'

class App extends Component {
	constructor(){
		super()
		this.state = {
			primary: [],
			cardList: [],
			counter: 0,
			target: '',
			}
	}

	componentDidMount = () => {
		this.setState({counter: 0});
		this.getLists('https://swapi.co/api/people/30/');
		fetch(this.getTarget())
		.then(response => response.json())
		.then(newTarget => {
			this.setState({target: newTarget.name})})
	}

	getLists = (url) => {
		fetch(url)
		.then(response => response.json())
		.then(primaryCard => {
			const myArray = [primaryCard]
			this.setState({primary: myArray});
			return this.buildCardList(primaryCard);			
		})
		.then(linkArray => this.getData(linkArray))
	}

	reset = () => {
		this.setState({counter: 0});
		this.getLists('https://swapi.co/api/people/30')
	}

	getTarget = () => {
		const targetNum = Math.floor(Math.random() * 87) + 1;
		if(targetNum === 30){this.getTarget()}
		return ('https://swapi.co/api/people/' + targetNum);
	}

	resetPrimary= (url) => {
		const {counter} = this.state;
		this.setState({counter: counter+1});
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
			totalCards.push(primaryCard.characters)
		}
		if (primaryCard.hasOwnProperty('people') && Array.isArray(primaryCard.people)) {
			primaryCard.people.map(item => totalCards.push(item))
		} else if (primaryCard.hasOwnProperty('people')) {
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
		const {primary, cardList, counter, target} = this.state;		
		return (
			<div className="App">
				<div>
					<CheckWin primary = {primary} target = {target} counter = {counter} reset={this.componentDidMount}/> 
				</div>
				<body className='items-center-l pt5'>
					<div>
						<CardList dataArray = {primary} resetPrimary = {this.resetPrimary}/>
					</div>
					<div className='container'>
						<CardList dataArray = {cardList} resetPrimary = {this.resetPrimary}/>
					</div>
				</body>
			</div>
		);
	}
}

export default App;
