import React, { Component } from "react";

export default class CrewItem extends Component {
	render() {
		if (this.props.crw) {
			const { crw } = this.props;
			return (
				<div className="mr-8">
					<div>{crw["name"]}</div>
					<div className="text-sm text-grey-400">{crw["job"]}</div>
				</div>
			);
		}
	}
}
