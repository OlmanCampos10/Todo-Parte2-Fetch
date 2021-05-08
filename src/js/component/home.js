import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Header } from "./header.js";
import { List } from "./list.js";

//create your first component
export function Home() {
	return (
		<div>
			<Header />
			<List />
		</div>
	);
}
