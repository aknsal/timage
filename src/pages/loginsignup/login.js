import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import "./login.css";

export function Login() {
  const [nameSignup, setnameSignup] = useState();
  const [emailSignup, setemailSignup] = useState();
  const [passwordSignup, setpasswordSignup] = useState();

  const [emailSignin, setemailSignin] = useState();
  const [passwordSignin, setpasswordSignin] = useState();
  const { user, setUser } = useContext(AuthContext);

  function SignUpSubmit() {
    const body = {
      name: nameSignup,
      email: emailSignup,
      password: passwordSignup,
    };

    const article = body;
    axios
      .post("https://infinite-brook-72848.herokuapp.com/register", article)
      .then((response) => setUser(response.data))
      .then(console.log("user", user))
      // .then((dataRec) => setData(dataRec.data.data))
      .catch((err) => console.log(err));

    console.log("body", body);
  }

  async function SignInSubmit() {
    const body = { email: emailSignin, password: passwordSignin };
    const article = body;
    axios
      .post("https://infinite-brook-72848.herokuapp.com/login", article)
      .then((response) => setUser(response.data))
      .then(console.log("user", user))
      // .then((dataRec) => setData(dataRec.data.data))
      .catch((err) => console.log(err));
    console.log(body);
  }

  const [signupShow, setsignUpshow] = useState(1);
  function signupButton() {
    // const container=document.getElementsByClassName("container");
    // container.classList.add("right-panel-active");(
    setsignUpshow(1 - signupShow);
    console.log(signupShow);
  }

  return (
    <div>
      <div class="full">
        <div
          className={
            signupShow == 0 ? "container" : "container right-panel-active"
          }
          id="container"
        >
          <div class="form-container sign-up-container">
            <form action="/stoneage">
              <h1 class="h1">Create Account</h1>
              <input
                class="input"
                id="name_signup"
                type="text"
                placeholder="Name"
                onChange={(e) => setnameSignup(e.target.value)}
              />
              <input
                class="input"
                id="email_signup"
                type="email"
                placeholder="Email"
                onChange={(e) => setemailSignup(e.target.value)}
              />
              <input
                class="input"
                id="password_signup"
                type="password"
                placeholder="Password"
                onChange={(e) => setpasswordSignup(e.target.value)}
              />
              <button class="button" onClick={SignUpSubmit}>
                Sign Up
              </button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="/stoneage">
              <h1 class="h1">Sign in</h1>
              <input
                class="input"
                id="email_signin"
                type="email"
                placeholder="Email"
                onChange={(e) => setemailSignin(e.target.value)}
              />
              <input
                class="input"
                id="pass_signin"
                type="password"
                placeholder="Password"
                onChange={(e) => setpasswordSignin(e.target.value)}
              />
              <a class="a" href="#">
                Forgot your password?
              </a>
              <button class="button" onClick={SignInSubmit} href="/stoneage">
                Sign In
              </button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1 class="h1">Welcome Back!</h1>
                <p class="p">
                  {" "}
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={signupButton}
                  class="button"
                  id="ghost1"
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h2 class="h2" style={{ color: "black" }}>
                  {" "}
                  Don't Have a account!
                </h2>
                <h3 class="h3" style={{ color: "black" }}>
                  Wanna sign up either?
                </h3>
                <b>
                  <button
                    onClick={signupButton}
                    class="button"
                    style={{ color: "black" }}
                    id="signUp"
                  >
                    Sign Up
                  </button>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
