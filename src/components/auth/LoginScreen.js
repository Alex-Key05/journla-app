import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>
      <form className="auth__form">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth__input"
        />
        <button type="submit" className="auth__button">
          Send
        </button>
        <hr />
        <p className="mt-5 mb-5">Login whit social networks</p>
        <div className="auth__social">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="auth__new-account">
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
