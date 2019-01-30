import React, { Component } from 'react';
import ResultItem from './ResultItem.js';

class Vermas extends Component {
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
				{!results && <div>No Jobs done motherfucker</div>}
				{results && results.map(result => 
					<ResultItem
						key={result.id}
						title={result.title}
						subtitle={result.subtitle}
						imagenes={result.imagenes}
						videos={result.videos}
					/>)}
				<hr />
				{ this.state.limit > 4 ? <button onClick ={this.handleClose}>- Hide All</button> : <button onClick={this.handleOnVerMas}>+ View More</button>}
			</div>
			)
	}
}
export default Vermas;

