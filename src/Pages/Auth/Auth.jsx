import { useContext, useState } from "react";
import style from "./auth.module.css";
import amazonLogo from "../../Componets/Header/Image/amazon_logo_black.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import { DataContext } from "../../Componets/DataProvider/DataProvidere";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);
  

  console.log("User state from context:", user);
  console.log("Email:", email, "Password:", password);

  const authHandler = (e) => {
    e.preventDefault();
    const action = e.target.name; // Get button name (signIn or signUp)
    // console.log("Button clicked:", action);

    setLoading((prev) => ({ ...prev, [action]: true }));
    // console.log("Loading state updated:", loading);

    if (action === "signIn") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // console.log("Sign-in successful:", userCredential.user);
          dispatch({ type: Type.SET_USER, user: userCredential.user });
          setLoading((prev) => ({ ...prev, signIn: false }));
          setError("");
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          // console.error("Sign-in error:", err);
          setError(err.message);
          setLoading((prev) => ({ ...prev, signIn: false }));
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // console.log("Account created successfully:", userCredential.user);
          dispatch({ type: Type.SET_USER, user: userCredential.user });
          setError("");
          setLoading((prev) => ({ ...prev, signUp: false }));
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          // console.error("Sign-up error:", err);
          setError(err.message);
          setLoading((prev) => ({ ...prev, signUp: false }));
        });
    }
  };

  return (
    <section className={style.login}>
      <Link to="/">
        <img src={amazonLogo} alt="Amazon Logo" />
      </Link>
      <div className={style.loginContainer}>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
            className={style.login_signInBtn}
          >
            {loading.signIn ? (
              <ClipLoader color="white" size={25} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p className={style.loginCondition}>
          By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, Cookies Notice, and
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signUp"
          className={style.login_registerBtn}
        >
          {loading.signUp ? (
            <ClipLoader color="white" size={25} />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {error && <small>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;
