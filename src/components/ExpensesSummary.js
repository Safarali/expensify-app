import React from 'react';
import numeral from 'numeral';
import pluralize from 'pluralize';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total'
import { getVisibleExpenses as selectExpenses } from '../selectors/expenses';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const formattedExpensesTotal = numeral((expensesTotal / 100)).format('$0,0.00');
    const expenseWord = pluralize('expense', expensesCount, true);

    return (
        <div>
            <h2>Viewing {expenseWord} totaling {formattedExpensesTotal}</h2>
        </div>
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
