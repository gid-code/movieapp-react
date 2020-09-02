import React from "react";
import { TMDB_IMGURL } from "../../config/apiConfig";
import { Link } from "react-router-dom";

export default function ActorItem(props) {
	const { actor } = props;

	var img = (pp) => {
		if (pp) {
			return TMDB_IMGURL + "w235_and_h235_face" + pp.profile_path;
		} else {
			return "https://ui-avatars.com/api/?size=2356name=" + pp.name;
		}
	};

	var known = (act) => {
		return act
			.map((kf) => {
				if (kf.original_name) {
					return kf.original_name;
				} else {
					return kf.title;
				}
			})
			.join(", ");
	};

	// console.log(actor);

	return (
		<div className="actor mt-8">
			<Link to={`/${actor.id}`}>
				<img
					src={img(actor)}
					alt={actor.name}
					className="hover:opacity-75 transition ease-in-out duration-150"
				></img>
			</Link>
			<div className="mt-2">
				<Link to={`/${actor.id}`} className="text-lg mt-2 hover:text-gray:300">
					{actor["name"]}
				</Link>
				<div className="text-gray-400 truncate text-sm">
					{known(actor["known_for"])}
				</div>
			</div>
		</div>
	);
}
