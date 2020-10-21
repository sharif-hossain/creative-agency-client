import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './login.css';
import * as firebase from "firebase/app";
import { UserContext } from '../../App';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from  '../../images/logos/logo.png'
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email: email, img: photoURL }
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className="text-center account">
            <div>
                <div>
                    <Link to="/"><img src={logo} style={{ width: '150px' }} className="img-fluid mt-5" alt="img" /></Link>
                </div>
                <div className="row ml-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 ml-5">
                        <div className="login-div mt-5 border text-center">
                            <div className="login-btn ">
                                <h3 className="mb-3">Login With</h3>
                                <div className="form-control social-btn ml-3 m-2" onClick={handleGoogleSignIn}>
                                    <div className="d-flex "  > 
                                        
                                        <div className="text-margin">
                                            <p  className="">Continue with Google</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Don’t have an account? <Link to="/login"> Create an account</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;