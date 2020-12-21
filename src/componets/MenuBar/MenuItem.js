import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	menuItem: {
		marginRight: theme.spacing(3),
	}
}));

export default function MenuItem(props) {
	const { text, href } = props;
	const classes = useStyles();

	return (
		<Link href={href} color="inherit" className={classes.menuItem}>
			{text}
		</Link>
	);
}