import React from "react";
import HeadNext from "next/head";

function Head({ title = "Title default" }) {
	return (
		<HeadNext>
			<title>{title}</title>
		</HeadNext>
	);
}

export default Head;
