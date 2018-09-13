import React, { Fragment } from 'react';

const EditExpensePage = (props) => (
        <Fragment>
            <h1>I am Editing expense with id of {props.match.params.id}</h1>
        </Fragment>
);

export default EditExpensePage;
