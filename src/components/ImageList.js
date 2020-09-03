import React, { Component } from "react";
import { TMDB_IMGURL } from "../config/apiConfig";

export default class ImageList extends Component {
	render() {
		if (this.props.imgs) {
			const { imgs } = this.props;
			const element = [];
			var count;
			if (imgs.length >= 10) {
				count = 10;
			} else {
				count = imgs.length;
			}
			for (let index = 0; index < count; index++) {
				element.push(imgs[index]);
			}
			return element.map((img) => {
				return (
					<div className="mt-8" key={img}>
						<a
							onClick={() => {
								this.props.openImgModal(img["file_path"]);
								// this.props.showImgModal(img["file_path"]);
							}}
						>
							<img
								src={TMDB_IMGURL + "w500" + img["file_path"]}
								alt="parasite"
								className="hover:opacity-75 transition ease-in-out duration-150"
							></img>
						</a>
					</div>
				);
			});
		}
	}
}
