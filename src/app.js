import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouters';
import { Provider } from 'react-redux';
import { store } from './store/configStore';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});
