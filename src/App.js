import React from "react";
import { Box, Container	 } from "@material-ui/core";
import MainContent from "./MainContent";

import MenuBar from "./componets/MenuBar";

export default function App() {

	return (
		<Box>
			<MenuBar companyName="CoMo"/>
			<Container fixed>
				<MainContent/>
			</Container>
		</Box>
	);
};