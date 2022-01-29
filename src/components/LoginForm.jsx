import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const context = useContext(MyContext);
  const { form, auth, handleFormInput, handleFormSubmit } = context;
  const { user, password } = form;

  const navigate = useNavigate();

  // useEffect(() => {
  //   auth && navigate("/category");
  // }, [auth, navigate]);

  const logged = !auth ? (
    <form>
      <h2 className="login-message">Please Login</h2>
      <input
        onChange={(e) => handleFormInput(e)}
        name="user"
        value={user}
        type="text"
        placeholder="UserName"
      />
      <input
        onChange={(e) => handleFormInput(e)}
        name="password"
        value={password}
        type="password"
        placeholder="Password"
      />
      <button className="form-button" onClick={(e) => handleFormSubmit(e)}>
        Login
      </button>
    </form>
  ) : (
    <button className="form-button" onClick={(e) => handleFormSubmit(e)}>
      Logout{" "}
    </button>
  );

  return logged;
};
export default LoginForm;
