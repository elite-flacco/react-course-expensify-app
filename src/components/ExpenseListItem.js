import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h1>{props.description}</h1>
        </Link>
        <p>{numeral(props.amount).format('$0,0.00')}</p>
        <p>Created at: {moment(props.createdAt).format('MMMM Do, YYYY')}</p>
    </div>
);

export default ExpenseListItem;

// <h1><a href={`/edit/${props.id}`}>{props.description}</a></h1> => this causes a full page refresh