import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "";


const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || ""}</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
		
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string
};

export default Head;
