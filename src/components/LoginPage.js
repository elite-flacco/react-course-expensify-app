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
    <div>
        <h1>Please log in!</h1>
        <button onClick={startLogin}>Log in</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);