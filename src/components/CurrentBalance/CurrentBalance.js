import React from "react";
import classes from "./CurrentBalance.module.css";

const CurrentBalance = ({ balance }) => {
	return (
		<div
			className={classes.CurrentBalance}
			style={
				balance === 0
					? { opacity: "0" }
					: { opacity: "1" }
			}
		>
			<header>
				<h2>BALANCE: </h2>
				<h3>{balance.toFixed(2)}</h3>
			</header>
		</div>
	);
};

export default CurrentBalance;
