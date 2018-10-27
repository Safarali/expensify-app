import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = expense => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <section className="jumbotron">
                    <div className="container">
                        <h2 className="jumbotron__title">Add Expense</h2>
                    </div>
                </section>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
