import React, { Component } from "react";
import CrewItem from "./CrewItem";
// import CrewItem from './CrewItem';

export default class CrewList extends Component {
	render() {
		if (this.props.crew) {
			const { crew } = this.props;
			const element = [];
			for (let index = 0; index < 3; index++) {
				element.push(crew[index]);
			}
			return (
				<div className="flex mt-4">
					{element.map((crw) => (
						<CrewItem crw={crw} key={crw.id} />
					))}
				</div>
			);
		}
	}
}
