import React, { Component } from "react";
import { TMDB_IMGURL } from "../../config/apiConfig";

export default class CastList extends Component {
	render() {
		if (this.props.cast) {
			const { cast } = this.props;
			const element = [];
			for (let index = 0; index < 5; index++) {
				element.push(cast[index]);
			}
			return element.map((ct) => {
				return (
					<div className="mt-8">
						<a href="{{route('actors.show',$cast['id'])}}">
							<img
								src={TMDB_IMGURL + "w300" + ct["profile_path"]}
								alt="{{$cast['name']}}"
								className="hover:opacity-75 transition ease-in-out duration-150"
							></img>
						</a>
						<div className="mt-2">
							<a
								href="{{route('actors.show',$cast['id'])}}"
								className="text-lg mt-2 hover:text-gray:300"
							>
								{ct["name"]}
							</a>
							<h4 className="text-sm mt-1">{ct["character"]}</h4>
						</div>
					</div>
				);
			});
		}
	}
}
