import React, { Component } from "react";
import CrewItem from "./CrewItem";
// import CrewItem from './CrewItem';

export default class CrewList extends Component {
	render() {
		if (this.props.crew) {
			const { crew } = this.props;
			var count;
			if (crew.length >= 3) {
				count = 3;
			} else {
				count = crew.length;
			}
			const element = [];
			for (let index = 0; index < count; index++) {
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
