import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TMDB_IMGURL } from "../../config/apiConfig";

export default class MovieItem extends Component {
	render() {
		if (this.props) {
			const {
				poster_path,
				original_title,
				vote_average,
				release_date,
				genre_ids,
				id,
				first_air_date,
				name,
			} = this.props.item;
			const { genres, type } = this.props;

			var genrate = function (grs) {
				return grs
					.map((el) => {
						var gnr = genres.genres.filter((gn) => gn["id"] === el);
						return gnr[0]["name"];
					})
					.join(", ");
			};

			return (
				<div class="mt-8">
					<Link to={`/${type}/${id}`}>
						<img
							src={TMDB_IMGURL + "w500" + poster_path}
							alt=""
							className="hover:opacity-75 transition ease-in-out duration-150"
						></img>
					</Link>
					<div className="mt-2">
						<Link
							to={`/${type}/${id}`}
							className="text-lg mt-2 hover:text-gray:300"
						>
							{original_title ? original_title : name}
						</Link>
						<div className="flex items-center text-gray-400 text-sm mt-1">
							<svg
								className="fill-current text-orange-500 w-4"
								viewBox="0 0 24 24"
							>
								<g data-name="Layer 2">
									<path
										d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.52-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4 1 5.63a1 1 0 01-.4 1 1 1 01-.62.18z"
										data-name="star"
									/>
								</g>
							</svg>
							<span className="ml-1">{vote_average * 10 + "%"}</span>
							<span className="mx-2">|</span>
							<span>{release_date ? release_date : first_air_date}</span>
						</div>
						<div className="text-gray-400 text-sm">{genrate(genre_ids)}</div>
					</div>
				</div>
			);
		}
	}
}
