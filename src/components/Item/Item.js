import React from "react";
import classes from "./Item.module.css";

const Item = props => {
	const itemClasses = [classes.Item];
	if (props.valueType === "income") {
		itemClasses.push(classes.Green);
	} else {
		itemClasses.push(classes.Red);
	}
	return (
		<div className={itemClasses.join(" ")}>
			<p className={classes.Right} onClick={props.delete}>
				<strong>Delete</strong>
			</p>
			<p>{props.description}</p>
			<p className={classes.Left}>{props.amount},-</p>
		</div>
	);
};

export default Item;
