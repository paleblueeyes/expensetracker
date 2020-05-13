import React from "react";
import classes from "./ChooseType.module.css"; 

const ChooseType = (props) => {
	return (
		<div className={classes.ChooseType}>
			<p onClick={() => props.typeChanged("exp")} className={props.type === "expense" ? classes.highlight : null}>EXP</p>
			<p onClick={() => props.typeChanged("inc")} className={props.type === "income" ? classes.highlight : null}>INC</p>
		</div>
	);
};

export default ChooseType;
