import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (login, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            login: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/cabinet');
        console.log(user);
      })
      .catch(err => console.log(err));
  };

  return <Form title={"sign-in"} handleClick={handleLogin} />;
}
