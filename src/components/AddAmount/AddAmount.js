import React from "react";
import classes from "./AddAmount.module.css";
import ChooseType from "../ChooseType/ChooseType";
import Aux from "../hoc/Aux";

const AddAmount = (props) => {
	const toggleClasses = [classes.Content];
	props.show
		? toggleClasses.push(classes.Show)
		: toggleClasses.push(classes.Hide);
	return (
		<Aux>
			<p
				onClick={props.toggleAmountHandler}
				style={{ marginBottom: "10px" }}
			>
				<strong>{props.show ? "HIDE" : "ADD ITEM+"}</strong>
			</p>
			<div className={toggleClasses.join(" ")}>
				<ChooseType
					type={props.valueType}
					typeChanged={props.typeChanged}
				/>

				<input
					type="text"
					placeholder="Description"
					onChange={props.descriptionChangedHandler}
					value={props.description}
				/>
				<input
					type="number"
					placeholder="Amount"
					onChange={props.amountChangedHandler}
					value={props.amount}
				/>
				<button onClick={() => props.addItemHandler(props.valueType)}>
					Add Item
				</button>
				<div
					className={classes.close}
					onClick={props.toggleAmountHandler}
				>
					<p>x</p>
				</div>
			</div>
		</Aux>
	);
};

export default AddAmount;

// export default AddAmount;
