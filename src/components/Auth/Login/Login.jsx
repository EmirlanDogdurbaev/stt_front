import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../store/slicers/authSlice.js";
import cl from "./Login.module.scss";
const Login = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const loading = useSelector((state) => state.auth.status === "loading");
    const error = useSelector((state) => state.auth.error);

    const handleLogin = () => {
        dispatch(login({ password, email }));
    };

    return (
        <div className={cl.Login}>
            <div>
                <h2>Войти</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span>
          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Загрузка..." : "Войти"}
          </button>
          <Link to="/signup">Регистрация</Link>
        </span>
                {error && <p>Error: {error}</p>}
            </div>
        </div>
    );
};
export default Login;
