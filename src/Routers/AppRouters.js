import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header/>
            <Switch>
                <Route exact={true} path='/' component={LoginPage} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);

export default AppRouter;
