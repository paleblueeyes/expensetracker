import React from 'react'
import classes from './Amount.module.css'

const Amount = (props) => {
    return (
        <div className={classes.Amount}>
            <h4>{props.type}</h4>
            <p className={classes[props.color]}>{props.amount.toFixed(2)}</p>
        </div>
    )
}

export default Amount
