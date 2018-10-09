import { createStore, combineReducers } from 'redux';
import { filtersReducer } from '../reducers/filters';
import { expensesReducer } from '../reducers/expenses';


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
