import React from "react";
import login from "./Signin.module.css";
import backgroundimg from "../../assets/bg-img.webp";

function Login() {
    return (
        <div className={`d-flex ${login.wrapper}`}>
        <img src={backgroundimg} alt="" />
        <section className={`d-flex ${login.container}`}>
          <main className={`d-flex ${login.main}`}>
            <header className={login.brand}>
              <h1>Mitttttarrrrr</h1>
            </header>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button className={`btn btn-primary ${login.login_btn}`}>
          Log In
        </button>
        
        <button className={`btn btn-primary ${login.login_btn}`}>
          Use Test Credential
        </button>
      </main>
      <footer className={`d-flex ${login.footer}`}>
        <p>
          Don't have an account? <a href="#signup">Sign Up</a>
        </p>
       
      </footer>
    </section>
    </div>
  );
}

export{Login};