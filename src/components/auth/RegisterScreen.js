import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div>
      <>
        <h3 className="auth__title mb-5">RegisterScreen</h3>
        <form className="auth__form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="auth__input"
            autoComplete="off"
          />
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
          <input
            type="password"
            name="password2"
            placeholder="Confirm password"
            className="auth__input"
          />
          <button type="submit" className="auth__button">
            Register
          </button>
          <Link to="/auth/login" className="auth__new-account">
            Already register?
          </Link>
        </form>
      </>
    </div>
  );
};

export default RegisterScreen;
