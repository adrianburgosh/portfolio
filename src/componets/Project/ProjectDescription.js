import React from "react";
import { Typography } from "@material-ui/core";

export default function ProjectDescription(props){
	let cardBody;
	const { description } = props;
	if (description === undefined || description === null) return null;
	if (description.length >= 20) {
		cardBody = (
			<Typography variant="body2" component="p">
				{description}
			</Typography>
		);
	} else {
		cardBody = (
			<Typography variant="body2" component="p">
				{description}
			</Typography>
		);
	}
	return cardBody;
}