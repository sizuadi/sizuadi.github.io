import React from "react";
import { Link } from "react-router-dom";

export const NavItem = (props) => {
	return (
		<div>
			<Link
				to={props.link}
				className={`${props.textClass} px-3 py-2 rounded-md text-md`}>
				{props.text}
			</Link>
		</div>
	);
};
