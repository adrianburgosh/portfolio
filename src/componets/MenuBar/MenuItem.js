import React from 'react';

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