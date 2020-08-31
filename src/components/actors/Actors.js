import React, { Component } from "react";
import axios from "axios";
import { TMDB_BASEURL } from "../../config/apiConfig";
import { TMDB_TOKEN } from "../../config/apiConfig_dev";
import ActorList from "./ActorList";

export default class Actors extends Component {
	state = {
		acts: null,
	};

	componentDidMount() {
		// popular movies
		var page = 1;
		axios
			.get(TMDB_BASEURL + "/person/popular?page=" + page, {
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					Authorization: `Bearer ${TMDB_TOKEN}`,
				},
			})
			.then((res) => {
				this.setState({ acts: res.data["results"] });
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { acts } = this.state;
		if (acts) {
			return (
				<div className="container mx-auto px-4 py-16">
					<div className="popular-movies">
						<h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
							Popular Actors
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
							<ActorList actors={acts} />
						</div>
					</div>
				</div>
			);
		} else {
			return <div>Loading...</div>;
		}
	}
}
