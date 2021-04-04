import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h1>{props.description}</h1>
        </Link>
        <p>{props.amount}</p>
        <p>Create at: {props.createdAt}</p>
    </div>
);

export default ExpenseListItem;

// <h1><a href={`/edit/${props.id}`}>{props.description}</a></h1> => this causes a full page refresh