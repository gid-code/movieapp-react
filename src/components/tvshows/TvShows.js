import React, { Component } from "react";
import axios from "axios";
import { TMDB_BASEURL, TMDB_TOKEN } from "../../config/apiConfig";
import MoviesList from "../movies/MoviesList";
import eaterbig from "../eaterbig.svg";

export default class TvShows extends Component {
	state = {
		ptv: null,
		trs: null,
		gnr: null,
	};

	componentDidMount() {
		// popular tvshows
		axios
			.get(TMDB_BASEURL + "/tv/popular", {
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					Authorization: `Bearer ${TMDB_TOKEN}`,
				},
			})
			.then((res) => {
				this.setState({ ptv: res.data["results"] });
			})
			.catch((err) => console.log(err));

		// top tv
		axios
			.get(TMDB_BASEURL + "/tv/top_rated", {
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					Authorization: `Bearer ${TMDB_TOKEN}`,
				},
			})
			.then((res) => this.setState({ trs: res.data["results"] }))
			.catch((err) => console.log(err));

		// genre
		axios
			.get(TMDB_BASEURL + "/genre/tv/list", {
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					Authorization: `Bearer ${TMDB_TOKEN}`,
				},
			})
			.then((res) => this.setState({ gnr: res.data }))
			.catch((err) => console.log(err));
	}

	render() {
		const { ptv, trs, gnr } = this.state;
		if (ptv === null || gnr === null) {
			return (
				<div className="container mx-auto">
					<div className="mx-auto p-20 m-20">
						<img alt="" src={eaterbig} className="mx-auto"></img>
					</div>
				</div>
			);
		} else {
			return (
				<div className="container mx-auto px-4 pt-16">
					<div className="popular-movies">
						<h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
							Popular Tv
						</h2>

						<MoviesList tvs={ptv} genres={gnr} />
					</div>

					{/* end popular-movies */}

					<div className="now-playing-movies py-24">
						<h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
							Top Rated Tv Shows
						</h2>

						<MoviesList tvs={trs} genres={gnr} />
					</div>
					{/* end now playing */}
				</div>
			);
		}
	}
}
