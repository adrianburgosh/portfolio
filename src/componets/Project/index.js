import React from "react";
import { Card, CardContent, CardActions, Typography, Button } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

import ProjectDescription from "./ProjectDescription";

export default function Project(props) {
	return(
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="h2">
					{props.title}
				</Typography>
				<ProjectDescription description={props.description} />
			</CardContent>
			<CardActions>
				<Button fontSize="small" variant="outlined">
					<LanguageIcon color="primary" fontSize="small"/>
				</Button>
				<Button fontSize="small" variant="outlined">
					<GitHubIcon color="primary" fontSize="small"/>
				</Button>
			</CardActions>
		</Card>
	);
}