import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouters';
import { Provider } from 'react-redux';
import { store } from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

store.dispatch(addExpense({description: "Rent", amount: 475, createdAt: 200}));
store.dispatch(addExpense({description: "Phone Bills", amount: 80, createdAt: 400}));
store.dispatch(addExpense({description: "Car payment", amount: 650, createdAt: 500}));
store.dispatch(addExpense({description: "Internet bills", amount: 125, createdAt: 350}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
