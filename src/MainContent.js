import React from "react";
import { Grid } from "@material-ui/core";
import Project from "./componets/Project";

export default function MainContent() {
	return(
		<Grid container justify="center" spacing={3}>
			<Grid item md={4} sm={6} xs={10}>
				<Project title="Med App" description="Aplicación para llevar un registro médico personal"/>
			</Grid>
			<Grid item md={4} sm={6} xs={10}>
				<Project title="Mascotita" description="Aplición para tu mascota"/>
			</Grid>
			<Grid item md={4} sm={6} xs={10}>
				<Project title="Academia" description="Tu academia de confianza"/>
			</Grid>
			<Grid item md={4} sm={6} xs={10}>
				<Project title="Tejidos" description="Compra tejidos"/>
			</Grid>
			<Grid item md={4} sm={6} xs={10}>
				<Project title="Arte" description="Tu centro artístico de divulgación"/>
			</Grid>
		</Grid>
	);
}