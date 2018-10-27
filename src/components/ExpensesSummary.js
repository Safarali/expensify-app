import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import pluralize from 'pluralize';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total'
import { getVisibleExpenses as selectExpenses } from '../selectors/expenses';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const formattedExpensesTotal = numeral((expensesTotal / 100)).format('$0,0.00');
    const expenseWord = pluralize('expense', expensesCount, true);

    return (
        <section className="section-summary">
            <div className="container">
                <h2>
                    Viewing <span>{expenseWord}</span> totaling <span>{formattedExpensesTotal}</span>
                </h2>
                <Link to="/create"><button className="button button--white">Add Expense</button></Link>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    let visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
