import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// class LoginPage extends React.Component {
//     onClick = () => {
//         console.log('logging in');
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Please log in!</h1>
//                 <button onClick={this.onClick}>Log in</button>
//             </div>
//         )
//     }
// }

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <button onClick={startLogin} className="button">Login with Google</button>
        </div>

    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);