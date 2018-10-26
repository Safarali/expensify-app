import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <header className="header">
        <div className="header__box">
            <h1 className="header__title">Expensify App</h1>
            <p className="header__sub-title">It's time to get your expenses under control.</p>
            <button className="header__btn" onClick={startLogin}>Login with Google</button>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
