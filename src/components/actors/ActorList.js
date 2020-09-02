import React from "react";
import ActorItem from "./ActorItem";

function ActorList(props) {
	const { actors } = props;
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
			{actors.map((act) => (
				<ActorItem key={act.id} actor={act} />
			))}
		</div>
	);
}

export default ActorList;
