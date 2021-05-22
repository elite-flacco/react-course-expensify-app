import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Go back to homepage</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Need help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

// export default Header;
export default connect(undefined, mapDispatchToProps)(Header);