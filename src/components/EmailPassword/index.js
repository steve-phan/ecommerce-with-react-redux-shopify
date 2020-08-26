import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetPasswordStart, resetUserState } from "./../../redux/User/user.actions";

import { useHistory } from "react-router-dom";

import "./styles.scss";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr,
});

const EmailPassword = (props) => {
  const { userErr, resetPasswordSuccess } = useSelector(mapState);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState())
      history.push("/signin");
    }
  }, [resetPasswordSuccess,history,dispatch]);
  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
    return () => {
      setErrors('')
    }
  }, [userErr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  };

  const configWrapper = {
    headline: "Email Password",
  };

  return (
    <AuthWrapper {...configWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button>Submit</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default EmailPassword;
