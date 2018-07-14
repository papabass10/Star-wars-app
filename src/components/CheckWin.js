import React, {Component} from 'react'

class CheckWin extends Component {
	constructor(props){
		super(props) 
		this.state = {}
	}
	render() {
		if(this.props.primary[0] !== undefined){
			if(this.props.primary[0].name === this.props.target){
				return(
					<div>
						<h1 className='f-6 white header'>You Win!!</h1>
						<h3 className='br3 bg-red ba f2 white' onClick={this.props.reset}> Play Again? </h3>
					</div>
				)
			} else if (this.props.counter === 6) {
				return(
					<div>
						<h1 className='f-6 white header'>You Lose!!</h1>
						<h3 className='br3 bg-red ba f2 white' onClick={this.props.reset}> Play Again? </h3>
					</div>
				)
			} else {
				return (
					<header className='header'>
							<p className='w4 white ma4'> Clicking cards shows you all cards associated with that card, try to find the target in six moves! </p>
								<div className='ba br4 bw3 b--yellow w5 center yellow'>
									<h1> Six Degrees of Wicket</h1>
									<p> Target: {this.props.target} </p>
								</div>
							<p className='counter w4 ma4'> {this.props.counter} </p>
					</header>
				)
			}
		} else {
			return(
				<header className='header'>
							<p className='w4 white ma4'> Clicking cards shows you all cards associated with that card, try to find the target in six moves! </p>
								<div className='ba br4 bw3 b--yellow w5 center yellow'>
									<h1> Six Degrees of Wicket</h1>
									<p> Target: {this.props.target} </p>
								</div>
							<p className='counter w4 ma4'> {this.props.counter} </p>
					</header>
			)
		}
	}
}

export default CheckWin;