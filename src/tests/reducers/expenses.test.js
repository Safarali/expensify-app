import { expensesReducer } from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

describe('expensesReducer', () => {
    describe('@@INIT', () => {
        test('should set default state', () => {
            const state = expensesReducer(undefined, { type: '@@INIT' });
            expect(state).toEqual([]);
        });
    });

    describe('REMOVE_EXPENSE', () => {
        test('should removeExpense by id', () => {
            const action = {
                type: 'REMOVE_EXPENSE',
                id: expenses[1].id
            };

            const state = expensesReducer(expenses, action);
            expect(state).toEqual([expenses[0], expenses[2]]);
        });

        test('should not removeExpense if id not found', () => {
            const action = {
                type: 'REMOVE_EXPENSE',
                id: '4'
            };

            const state = expensesReducer(expenses, action);
            expect(state).toEqual([...expenses]);
        });
    });

    describe('ADD_EXPENSE', () => {
        test('should addExpense', () => {
            const expense = {
                id: '4',
                description: 'PGG',
                note: '',
                amount: 65,
                createdAt: 100000
            };
            const action = {
                type: 'ADD_EXPENSE',
                expense
            };

            const state = expensesReducer(expenses, action);
            expect(state).toEqual([...expenses, expense]);
        });
    });

    describe('EDIT_EXPENSE', () => {
        test('should editExpense by id', () => {
            const amount = 650;
            const action = {
                type: 'EDIT_EXPENSE',
                id: expenses[2].id,
                updates: { amount }
            }

            const state = expensesReducer(expenses, action);
            expect(state[2].amount).toBe(amount);
        });

        test('should not editExpense if id not found', () => {
            const amount = 650;
            const action = {
                type: 'EDIT_EXPENSE',
                id: '4',
                updates: { amount }
            }

            const state = expensesReducer(expenses, action);
            expect(state).toEqual([...expenses]);
        });
    });

});
