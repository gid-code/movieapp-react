import React, { Component } from "react";
import { TMDB_IMGURL } from "../config/apiConfig";
import { Link } from "react-router-dom";

export default class CastList extends Component {
	render() {
		if (this.props.cast) {
			const { cast } = this.props;
			const element = [];
			var count;
			if (cast.length >= 5) {
				count = 5;
			} else {
				count = cast.length;
			}
			for (let index = 0; index < count; index++) {
				element.push(cast[index]);
			}
			return element.map((ct) => {
				return (
					<div className="mt-8" key={ct.id}>
						<Link to={`/${ct.id}`}>
							<img
								src={TMDB_IMGURL + "w300" + ct["profile_path"]}
								alt={ct["name"]}
								className="hover:opacity-75 transition ease-in-out duration-150"
							></img>
						</Link>
						<div className="mt-2">
							<Link
								to={`/${ct.id}`}
								className="text-lg mt-2 hover:text-gray:300"
							>
								{ct["name"]}
							</Link>
							<h4 className="text-sm mt-1">{ct["character"]}</h4>
						</div>
					</div>
				);
			});
		}
	}
}
