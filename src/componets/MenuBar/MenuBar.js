import React from "react";
import { AppBar, Box, Link, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from "./MenuItem";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		marginRight: theme.spacing(3),
	},
}));

export default function MenuBar(props) {
	const classes = useStyles();
	return (
		<Box mb={3}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title} >
						{props.companyName}
					</Typography>
					<Typography className={classes.root}>
						<MenuItem href="#">Inicio</MenuItem>
						<MenuItem href="#">Sobre nosotros</MenuItem>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}