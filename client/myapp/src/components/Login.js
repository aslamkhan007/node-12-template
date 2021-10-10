import React from "react";
import { NavLink, useHistory ,Redirect} from "react-router-dom";
import loginpic from "../images/logo.png";
import { useState } from "react";
import { Navigation  } from "./Navigation";

export function Login() {
  const [userLogin, setLogin] = useState({ email: "", password: "" });

  const history = useHistory();

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e.target.value);

    setLogin({ ...userLogin, [name]: value });
  };
  const handlesubmit = async (e) => {
    try {
      const { email, password } = userLogin;
      e.preventDefault();

      const response = await fetch("http://localhost:3030/authentication", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          strategy: "local",
        }),
      });

      const data1 = await response.json();

      if (data1.email) {
        console.log("hello");
      } else {
      }
      console.log(data1);
      if (data1 && data1.accessToken) {
        localStorage.setItem(
          "token",
          JSON.stringify({
            login: true,
            token: data1.accessToken,
          })
        );

        console.log(data1,"hhhhhhhhhhhh");
        history.push("/home");
        // <Redirect to ="/home"/>

       
      } else {
        console.log("hellol");
      }

      //  sessionStorage.setItem("token",JSON.stringify(data1))

      //  localStorage.getItem("token")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <Navigation/>
      <div className="sufee-login d-flex align-content-center flex-wrap  bg-dark ">
        <div className="container">
          <div className="login-content">
            <div className="login-logo">
              <a href="index.html">
                <img className="align-content" src={loginpic} alt="in" />
              </a>
            </div>
            <div className="login-form">
              <form method="post">
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    value={userLogin.email}
                    onChange={handleChange}
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={userLogin.password}
                    onChange={handleChange}
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                  <label className="pull-right">
                    <a href="#">Forgotten Password?</a>
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={handlesubmit}
                  className="btn btn-success btn-flat m-b-30 m-t-30"
                >
                  Sign in
                </button>

                <div className="social-login-content">
                  <div className="social-button"></div>
                </div>
                <div className="register-link m-t-15 text-center">
                  <p>
                    Don't have account ?{" "}
                    <NavLink to="/register"> Sign Up Here</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
