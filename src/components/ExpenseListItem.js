import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
    <Link className="list-item" to={`/edit/${props.id}`}>
        <div>
            <h3 className="list-item__title">{props.description}</h3>
            <span className="list-item__subtitle">{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <div>
            <h3 className="list-item__amount">{numeral(props.amount).format('$0,0.00')}</h3>
        </div>
    </Link>
);

export default ExpenseListItem;

// <h1><a href={`/edit/${props.id}`}>{props.description}</a></h1> => this causes a full page refresh