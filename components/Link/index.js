import React from "react";
import LinkNext from "next/link";

function Link({ children, href = "/", ...rest }) {
	return (
		<LinkNext href={href} {...rest}>
			<a>{children}</a>
		</LinkNext>
	);
}

export default Link;
