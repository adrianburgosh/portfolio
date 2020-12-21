import React from "react";
import { AppBar, Box, Link, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuItem: {
		marginRight: theme.spacing(3),
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
						<Link href="#" color="inherit" className={classes.menuItem}>
							Inicio
						</Link>
						<Link href="#" color="inherit" className={classes.menuItem}>
							Sobre nosotros
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}