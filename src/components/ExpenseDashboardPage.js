import React, { Fragment } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <Fragment>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </Fragment>
);

export default ExpenseDashboardPage;
