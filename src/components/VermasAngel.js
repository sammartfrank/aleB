import React, { Component } from 'react';
import ResultItemIC from './ResultItemIC.js';

class VermasAngel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			limit: 1,
		}
	}
	handleOnVerMas = () => {
		this.setState({
			limit: this.state.limit + 1,
		})
	}
	handleClose = () => {
		this.setState({
			limit: 1,
		})
	}
	render() {
		const results = this.props.results.slice(0, this.state.limit);
		return (
			<div className="results">
				{!results && <div>No Jobs to display</div>}
				{results && results.map(result => 
					<ResultItemIC
						key={result.title}
						title={result.title}
						subtitle={result.subtitle}
						parraf={result.parraf}
						imagenes={result.imagenes}
						insta={result.insta}
						yot={result.yot}
						videos={result.videos}
						web={result.web}
						fabook={result.fabook}
					/>)}
				{this.state.limit >= 6 ? <a className="btn btn-md animated-button" onClick ={this.handleClose}>-</a> : <a  className="btn btn-md animated-button" onClick={this.handleOnVerMas}>+</a>}
			</div>
			)
	}
}
export default VermasAngel;

