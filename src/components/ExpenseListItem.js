import React, { Fragment } from 'react';
import{ Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Fragment>
        <Link to={`/edit/${id}`}>
            <div className="cart-item">
                <div className="cart-item__right">
                    <h3 className="cart-item__description">
                        {description}
                    </h3>
                    <p className="cart_item__amount">
                        {moment(createdAt).format('MMMM Do, YYYY')}
                    </p>
                </div>
                <div className="cart-item__leftt">
                    <h3 className="cart-item__amount">
                        {numeral(amount / 100).format('$0,0.00')}
                    </h3>
                </div>
            </div>
        </Link>
    </Fragment>
);

export default ExpenseListItem;
