import React, { Component } from "react";
import classes from "./App.module.css";
import CurrentBalance from "./components/CurrentBalance/CurrentBalance";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import AddAmount from "./components/AddAmount/AddAmount";
import Item from "./components/Item/Item";
// import ToggleAdd from "./components/ToggleAdd/ToggleAdd";

class App extends Component {
	state = {
		balance: 0,
		income: 0,
		expense: 0,
		valueType: "expense",
		description: "",
		amount: "",
		itemsList: [],
		showAdd: false,
	};

	descriptionChangedHandler = (event) => {
		const description = event.target.value;
		this.setState({ description: description });
	};

	toggleAmountHandler = () => {
		if (this.state.showAdd) {
			this.setState({ showAdd: false });
		} else {
			this.setState({ showAdd: true });
		}
	};

	amountChangedHandler = (event) => {
		const amount = event.target.value;
		this.setState({ amount: amount });
	};

	typeChangedHandler = (type) => {
		if (type === "inc") {
			this.setState({ valueType: "income" });
		} else {
			this.setState({ valueType: "expense" });
		}
	};

	addItemHandler = (type) => {
		if (this.state.description.length > 0 && this.state.amount > 0) {
			const itemsList = this.state.itemsList;

			itemsList.push({
				description: this.state.description,
				amount: this.state.amount,
				valueType: type,
			});

			const amount = Number(this.state.amount);
			const expense = Number(this.state.expense);
			const income = Number(this.state.income);

			if (type === "income") {
				this.setState({
					income: amount + income,
					balance: amount + income - expense,
					amount: "",
					description: "",
				});
			} else {
				this.setState({
					expense: amount + expense,
					balance: income - (amount + expense),
					amount: "",
					description: "",
				});
			}
		}
	};

	deleteItemHandler = (itemIndex) => {
		const itemsList = this.state.itemsList;
		const { amount, valueType } = itemsList[itemIndex];
		if (valueType === "income") {
			this.setState({
				income: this.state.income - amount,
				balance: this.state.balance - amount,
			});
		} else {
			this.setState({
				expense: this.state.expense - amount,
				balance: Number(this.state.balance) + Number(amount),
			});
		}
		itemsList.splice(itemIndex, 1);
		this.setState({ itemsList: itemsList });
	};

	render() {
		const itemsList = this.state.itemsList.map((item, index) => {
			return (
				<Item
					description={item.description}
					amount={item.amount}
					valueType={item.valueType}
					key={index}
					delete={() => this.deleteItemHandler(index)}
				/>
			);
		});
		return (
			<div className={classes.App}>
				<CurrentBalance balance={this.state.balance} />
				<IncomeExpense
					income={this.state.income}
					expense={this.state.expense}
				/>
				<AddAmount
					valueType={this.state.valueType}
					typeChanged={this.typeChangedHandler}
					descriptionChangedHandler={this.descriptionChangedHandler}
					amountChangedHandler={this.amountChangedHandler}
					addItemHandler={this.addItemHandler}
					description={this.state.description}
					amount={this.state.amount}
					show={this.state.showAdd}
					toggleAmountHandler={this.toggleAmountHandler}
				/>
				{itemsList}
			</div>
		);
	}
}

export default App;
