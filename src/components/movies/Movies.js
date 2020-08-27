import React, { Component } from "react";
import MoviesList from "./MoviesList";
import axios from "axios";
import { TMDB_BASEURL, TMDB_TOKEN } from "../../config/apiConfig";

export default class Movies extends Component {
	// constructor(props) {
	//    super(props);
	//    this.state = {
	//      pm: null,
	//      nwp: null
	//    };
	//  }

	state = {
		pm: null,
		nwp: null,
		gnr: null,
	};

	componentDidMount() {
		// popular movies
		axios
			.get(TMDB_BASEURL + "/movie/popular", {
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					Authorization: `Bearer ${TMDB_TOKEN}`,
				},
			})
			.then((res) => {
				this.setState({ pm: res.data["results"] });
			})
			.catch((err) => console.log(err));

		// now playing
		axios
			.get(TMDB_BASEURL + "/movie/now_playing", {
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					Authorization: `Bearer ${TMDB_TOKEN}`,
				},
			})
			.then((res) => this.setState({ nwp: res.data["results"] }))
			.catch((err) => console.log(err));

		// genre
		axios
			.get(TMDB_BASEURL + "/genre/movie/list", {
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					Authorization: `Bearer ${TMDB_TOKEN}`,
				},
			})
			.then((res) => this.setState({ gnr: res.data }))
			.catch((err) => console.log(err));
	}

	render() {
		if (this.state.pm === null || this.state.gnr === null) {
			return <div>Loading..</div>;
		} else {
			return (
				<div className="container mx-auto px-4 pt-16">
					<div className="popular-movies">
						<h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
							Popular Movies
						</h2>
						{/* {console.log(this.state.gnr)} */}
						<MoviesList movies={this.state.pm} genres={this.state.gnr} />
					</div>

					{/* end popular-movies */}

					<div className="now-playing-movies py-24">
						<h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
							Now Playing
						</h2>

						<MoviesList movies={this.state.nwp} genres={this.state.gnr} />
					</div>
					{/* end now playing */}
				</div>
			);
		}
	}
}
