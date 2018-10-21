import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    startSetExpenses,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

describe('Expenses Action Creators', () => {

    beforeEach((done) => {
        const expensesData = {};
        expenses.forEach(({ id, description, note, amount, createdAt }) => {
            expensesData[id] =  { description, note, amount, createdAt };
        })
        database.ref('expenses').set(expensesData).then(() => done());
    });

    describe('removeExpense', () => {
        test('should set up removeExpense action object', () => {
            const action = removeExpense({ id: '123abc'});
            expect(action).toEqual({
                type: 'REMOVE_EXPENSE',
                id: '123abc'
            })
        });
    });

    describe('editExpense', () => {
        test('should set up editExpense action object', () => {
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

    describe('addExpense', () => {
        test('should set up addExpense action object with provided values', () => {
            const action = addExpense(expenses[2]);
            expect(action).toEqual({
                type: 'ADD_EXPENSE',
                expense: expenses[2]
            });
        });

        test("should  add expense  to database and store", (done) => {
            const store = createMockStore({});
            const expenseData = {
                description: 'Mouse',
                amount: 40,
                note: 'This is better',
                createdAt: 1000
            }
            store.dispatch(startAddExpense(expenseData)).then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                        id: expect.any(String),
                        ...expenseData
                    }
                });
                return database.ref(`expenses/${actions[0].expense.id}`).once('value');
            }).then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseData);
                done();
            });
        });

        test("should add expense with defaults to database and store", (done) => {
            const store = createMockStore({});
            const expenseDefaults = {
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
            store.dispatch(startAddExpense({})).then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                        id: expect.any(String),
                        ...expenseDefaults
                    }
                });
                return database.ref(`expenses/${actions[0].expense.id}`).once('value');
            }).then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseDefaults);
                done();
            });
        });
    });

    describe('setExpenses', () => {
        test('should setup setExpenses action object with data', () => {
            const action = setExpenses(expenses);
            expect(action).toEqual({
                type: 'SET_EXPENSES',
                expenses
            })
        });

        test('should fetch expenses from firebase', (done) => {
            const store = createMockStore({});
            store.dispatch(startSetExpenses()).then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: 'SET_EXPENSES',
                    expenses
                })
            })
            done();
        });
    });
});
