import { useState } from 'react';
import './Form.scss'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser, infoUser } from "../../Redux/loginSlice";
import { logUser, getUserProfile } from "../../API/api";

export default function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await logUser(email, password);
            const token = userData.body.token;
            await dispatch(loginUser(token));

            if (rememberMe) {
                localStorage.setItem('token', token);
            }

            const userInfo = await getUserProfile(token);
            const userInfos = {
                email: userInfo.body.email,
                firstName: userInfo.body.firstName,
                lastName: userInfo.body.lastName,
                userName: userInfo.body.userName
            };
            await dispatch(infoUser(userInfos));
            navigate("/user");
        } catch (error) {
            console.error("Erreur lors de la connexion:", error);
            setErrorMessage("Identifiants incorrects");
        }
    };

    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemple@gmail.com"
                    required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={handleRememberMe}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type='submit'>Sign In</button>
            {errorMessage && <p className='errorConexion'>{errorMessage}</p>}
        </form>
    );
}