import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses as selectExpenses} from
 '../selectors/expenses';

export const ExpenseList = (props) => (
    <section className="section-expense-list">
        <div className="container">
            <div className="cart">
                <div className="cart-header">
                    <div className="cart-header__title--mobile">
                        Expenses
                    </div>
                    <div className="cart-header__title--desktop">
                        Expense
                    </div>
                    <div className="cart-header__amount--desktop">Amount</div>
                </div>
                { props.expenses.length === 0 ? (
                    <div class="cart-item">
                        <h3 className="cart-empty">
                            No expenses
                        </h3>
                    </div>
                ) : (
                    props.expenses.map(expense => {
                        return <ExpenseListItem key={expense.id} {...expense}/>
                    })
                ) }
            </div>
        </div>
    </section>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};
export default connect(mapStateToProps)(ExpenseList);
