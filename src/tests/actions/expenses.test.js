import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

describe('Test Expenses Action Creators', () => {

    describe('Remove Expense', () => {
        test('should set up remove expense action object', () => {
            const action = removeExpense({ id: '123abc'});
            expect(action).toEqual({
                type: 'REMOVE_EXPENSE',
                id: '123abc'
            })
        });
    });

    describe('Update Expense', () => {
        test('should set up update expense action object', () => {
            const action = editExpense('123abc', { note: "Updated Text" });

            expect(action).toEqual({
                type: 'EDIT_EXPENSE',
                id: '123abc',
                updates: {
                    note: "Updated Text"
                }
            });
        });
    });

    describe('Add Expense', () => {
        test('should set up add expense action object with provided values', () => {
            const expenseDate = {
                description: 'Rent',
                note: 'For September Rent',
                amount: 500,
                createdAt: 1000
            }
            const action = (addExpense(expenseDate));
            expect(action).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    ...expenseDate,
                    id: expect.any(String)
                }
            })
        });

        test('should set up add expense action object with default values', () => {
            const action = addExpense();

            expect(action).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    description: 'a',
                    note: '',
                    amount: 0,
                    createdAt: 0
                }
            });
        });

    });
});
