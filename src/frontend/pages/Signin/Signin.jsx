import React, { useEffect, useState } from "react";
import logincss from "./Signin.module.css";
import backgroundimg from "../../assets/bg-img.webp";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler, signUpHandler } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { store } from "../../app/store";

function Login() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  },[token]);
    return (
        <div className={`d-flex ${logincss.wrapper}`}>
        <img src={backgroundimg} alt="" />
        <section className={`d-flex ${logincss.container}`}>
          <main className={`d-flex ${logincss.main}`}>
            <header className={logincss.brand}>
              <h1>Mitttttarrrrr</h1>
            </header>
            <input
            type="text"
            placeholder="username"
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
          />
            <button className={`btn btn-primary ${logincss.login_btn}`}onClick={() => {
              dispatch(
                loginHandler({
                  username: userDetails.username,
                  password: userDetails.password,
                })
              )
            }}
          >
          Log In
        </button>
        
        <button className={`btn btn-primary ${logincss.login_btn}`}onClick={() => {
              setUserDetails({ username: "mramandeepsinha@gmail.com", password: "Abc@123" });
              dispatch(
                loginHandler({ username: "mramandeepsinha@gmail.com", password: "Abc@123" })
              );
            }}
          >
          Use Test Credential
        </button>
      </main>
      <footer className={`d-flex ${logincss.footer}`}>
        <p>
          Don't have an account? <a href="#signup">Sign Up</a>
        </p>
       
      </footer>
    </section>
    </div>
  );
}

export {Login};