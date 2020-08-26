import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "./../../redux/User/user.actions";

import "./styles.scss";

import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";
import AuthWrapper from "../AuthWrapper";
import { Link, useHistory } from "react-router-dom";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const SignIn = (props) => {
  const { userErr, currentUser } = useSelector(mapState);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState('');

  const history = useHistory();
 
  useEffect(() => {
    if (currentUser) {
      resetForm();
      // Need import withRouter from react-router-dom to access history
      history.push("/");
    }
  }, [currentUser, history]);
 
  useEffect(() => {
    console.log(userErr)

    // if (Array.isArray(userErr) && userErr.length > 0) {
    //   setErrors(userErr);
    // }
    return () => {
      setErrors('')
    }
  }, [userErr]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };
  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const configAuthWrapper = {
    headline: "Login",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="fromWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              // if(err !== 'Email not found.. try again' && err !== 'auth/email-already-in-use')
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}
        {/* Just submit form do something */}
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>

          <div className="socialSignin"></div>
          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
        <div className="row">
          {/* Just call a function from firebase/utils */}
          <Button onClick={handleGoogleSignIn}>Sign In with Google</Button>
        </div>
      </div>
    </AuthWrapper>
  );
};
export default SignIn;

{
  /* <form className="phonelogin" onSubmit={this.signInWithPhone}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full name"
              onChange={this.handleChange}
            />
            <FormInput
              type="number"
              name="number"
              value={number}
              placeholder="phone number"
              onChange={this.handleChange}
            />{" "}
            <div id="recaptcha"></div>
            <Button type="submit"> SignIn with Phone </Button>
          </form> */
}
