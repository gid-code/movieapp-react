import React, { Component } from "react";
import { TMDB_IMGURL } from "../../config/apiConfig";

export default class ImageList extends Component {
	render() {
		if (this.props.imgs) {
			const { imgs } = this.props;
			const element = [];
			for (let index = 0; index < 3; index++) {
				element.push(imgs[index]);
			}
			return element.map((img) => {
				return (
					<div className="mt-8">
						<a
							onClick={() => {
								this.props.openImgModal(img["file_path"]);
								// this.props.showImgModal(img["file_path"]);
							}}
						>
							<img
								src={TMDB_IMGURL + "w500" + img["file_path"]}
								alt="parasite"
								class="hover:opacity-75 transition ease-in-out duration-150"
							></img>
						</a>
					</div>
				);
			});
		}
	}
}
