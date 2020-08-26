import React, { Component } from "react";
import MovieItem from "./MovieItem";

export default class MoviesList extends Component {
	// constructor(props) {
	//    super(props);
	//  }

	render() {
		const { movies, genres } = this.props;
		if (movies) {
			return (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{movies.map((movie) => (
						<MovieItem mv={movie} key={movie.id} genres={genres} />
					))}
				</div>
			);
		} else {
			return <div>Loading</div>;
		}
	}
}
