import React from "react";
import Amount from "./Amount/Amount";
import classes from "./IncomeExpense.module.css";

const IncomeExpense = props => {
	return (
		<div className={classes.IncomeExpense}>
			<Amount
				className={classes.Amount}
				type="INC: "
				amount={props.income}
				color="Green"
			/>
			<Amount
				className={classes.Amount}
				type="EXP: "
				amount={props.expense}
				color="Red"
			/>
		</div>
	);
};

export default IncomeExpense;
