import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 NOT FOUND
        <Link to="/">Go back to homepage</Link> 
    </div>
)
export default NotFoundPage;