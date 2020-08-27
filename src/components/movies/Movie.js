import React, { Component } from "react";
import { TMDB_IMGURL, TMDB_BASEURL, TMDB_TOKEN } from "../../config/apiConfig";
import Axios from "axios";
import CrewList from "./CrewList";
import ImageList from "../ImageList";
import CastList from "../CastList";

export default class Movie extends Component {
	state = {
		details: null,
		modalOpen: false,
		imgModal: false,
		chImg: "",
		type: "",
	};

	componentDidMount() {
		const { id, type } = this.props.match.params;

		this.setState({ type });

		// if (type === 'movie') {

		// }

		Axios.get(
			TMDB_BASEURL +
				`/${type}/${id}` +
				"?append_to_response=credits,videos,images",
			{
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					Authorization: `Bearer ${TMDB_TOKEN}`,
				},
			}
		)
			.then((res) => res.data)
			.then((data) => {
				this.setState({ details: data });
			})
			.catch((err) => console.log(err));
	}
	render() {
		if (this.state.details === null) {
			return <div>Loading...</div>;
		} else {
			const {
				poster_path,
				original_title,
				vote_average,
				release_date,
				genres,
				overview,
				credits,
				images,
				videos,
				name,
				first_air_date,
				created_by,
			} = this.state.details;

			var genrate = function (grs) {
				return grs
					.map((el) => {
						return el["name"];
					})
					.join(", ");
			};

			var displayTrailer = (vid) => {
				return (
					<div>
						<div className="mt-12">
							<button
								onClick={() => {
									this.setState({ modalOpen: true });
								}}
								className="flex inline-flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150"
							>
								<svg className="w-6 fill-current" viewBox="0 0 24 24">
									<path d="M0 0h24v24H0z" fill="none" />
									<path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
								</svg>
								<span className="ml-2">Play Trailer</span>
							</button>
						</div>

						{this.state.modalOpen ? displayModal(vid) : null}
					</div>
				);
			};

			var displayModal = (des) => {
				return (
					<div
						style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
						className="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
					>
						<div className="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
							<div className="bg-gray-900 rounded">
								<div className="flex justify-end pr-4 pt-2">
									<button
										onClick={() => {
											this.setState({ modalOpen: false });
										}}
										className="text-3xl leading-none hover:text-gray-300"
									>
										&times;
									</button>
								</div>
								<div className="modal-body px-8 py-8">
									<div
										className="responsive-container overflow-hidden relative"
										style={{ paddingTop: 525 }}
									>
										<iframe
											class="responsive-iframe absolute top-0 left-0 w-full h-full"
											src={
												"https://www.youtube.com/embed/" + des.results[0].key
											}
											style={{ border: 0 }}
											allow="autoplay; encrypted-media"
											allowFullScreen
										></iframe>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			};

			var showImgModal = (img) => {
				return (
					<div
						style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
						className="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
					>
						<div className="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
							<div className="bg-gray-900 rounded">
								<div className="flex justify-end pr-4 pt-2">
									<button
										onClick={() => {
											this.setState({ imgModal: false });
										}}
										className="text-3xl leading-none hover:text-gray-300"
									>
										&times;
									</button>
								</div>
								<div className="modal-body px-8 py-8">
									<img src={TMDB_IMGURL + "original" + img} alt="poster"></img>
								</div>
							</div>
						</div>
					</div>
				);
			};

			var openImgModal = (img) => {
				this.setState({ imgModal: true });
				this.setState({ chImg: img });
			};

			var crew = (cr) => {
				return (
					<div className="mt-12">
						<h4 className="text-white font-semibold">Featured Crew</h4>
						<div className="flex mt-4">
							<CrewList crew={cr} />
						</div>
					</div>
				);
			};

			var creator = (cr) => {
				var count;
				if (cr.length >= 3) {
					count = 3;
				} else {
					count = cr.length;
				}
				const element = [];
				for (let index = 0; index < count; index++) {
					element.push(cr[index]);
				}
				console.log(element);
				return (
					<div className="mt-12">
						<div className="flex mt-4">
							{element.map((el) => {
								return (
									<div className="mr-8">
										<div>{el.name}</div>
										<div className="text-sm text-grey-400">Creator</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			};

			return (
				<div>
					<div className="movie-info border-b border-gray-800">
						<div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
							<img
								className="w-64 lg:w-96"
								alt=""
								src={TMDB_IMGURL + "w500" + poster_path}
							></img>
							<div className="md:ml-24">
								<h2 className="text-4xl font-semibold">
									{original_title ? original_title : name}
								</h2>
								<div className="flex flex-wrap items-center text-gray-400 text-sm">
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
									<span clasName="mx-2">|</span>
									<span>{genrate(genres)}</span>
								</div>

								<p className="text-gray-300 mt-8">{overview}</p>

								{this.state.type === "movie"
									? crew(credits.crew)
									: creator(created_by)}

								{videos.results.length > 0 ? displayTrailer(videos) : null}
							</div>
						</div>
					</div>
					{/* end of info */}

					<div className="movie-cast border-b border-gray-800">
						<div className="container mx-auto px-4 py-16">
							<h2 className="text-4xl font-semibold">Cast</h2>

							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
								<CastList cast={credits.cast} />
							</div>
						</div>
					</div>

					{/* end of cast */}

					{/* <div class="movie-images" x-data="{ isOpen: false, image: ''}"> */}
					<div className="container mx-auto px-4 py-16">
						<h2 className="text-4xl font-semibold">Images</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
							<ImageList imgs={images.backdrops} openImgModal={openImgModal} />
						</div>

						{this.state.imgModal ? showImgModal(this.state.chImg) : null}
					</div>
					{/* </div> */}
					{/* {{-- end of images --}} */}
				</div>
			);
		}
	}
}
