import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <Fragment>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={expense => {
                props.dispatch(addExpense(expense));
                props.history.push('/')
            }}
        />
    </Fragment>
);

export default connect()(AddExpensePage);
