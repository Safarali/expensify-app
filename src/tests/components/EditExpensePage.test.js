import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

describe('<EditExpensePage/>', () => {
    const expense = expenses[2];
    let startEditExpense, startRemoveExpense, history, wrapper;

    beforeEach(() => {
        startEditExpense = jest.fn();
        startRemoveExpense = jest.fn();
        history = { push: jest.fn() };
        wrapper = shallow(<EditExpensePage
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expense}
        />);
    });

    test('should render EditExpensePage correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should handle editExpense', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expense);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
    });

    test('should handle removeExpense', () => {
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id});
    });
});
