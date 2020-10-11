import React, { Component } from "react";
import MovieItem from "./MovieItem";
import eaterbig from "../eaterbig.svg";

export default class MoviesList extends Component {
	constructor(props) {
		super(props);

		const { movies, genres, tvs } = this.props;

		this.state = {
			movies,
			genres,
			tvs,
			itemData: null,
			type: "",
		};
	}

	componentDidMount() {
		if (this.state.tvs) {
			this.setState({
				itemData: this.state.tvs,
				type: "tv",
			});
		}
		if (this.state.movies) {
			this.setState({
				itemData: this.state.movies,
				type: "movie",
			});
		}
	}
	//
	render() {
		const { genres, itemData, type } = this.state;
		if (itemData) {
			return (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{itemData.map((elt) => (
						<MovieItem item={elt} key={elt.id} genres={genres} type={type} />
					))}
				</div>
			);
		} else {
			return (
				<div className="container mx-auto">
					<div className="mx-auto p-20 m-20">
						<img alt="" src={eaterbig} className="mx-auto"></img>
					</div>
				</div>
			);
		}
	}
}
