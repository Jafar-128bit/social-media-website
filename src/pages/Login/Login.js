import './login.css';
import {Link} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    const styleIcon = {
        fontSize: "1.75rem",
        color: "var(--light-mode-color)",
    };
    return (
        <div className="login">
            <div className="login__titleWrapper">
                <h3 className="login__title">Welcome to Rism Connect</h3>
            </div>
            <div className="login__container shadow">
                <div className="login__input">
                    <div className="login__inputElements">
                        <div className="login__iconContainer"><PersonIcon style={styleIcon}/></div>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="login__inputElements">
                        <div className="login__iconContainer"><LockIcon style={styleIcon}/></div>
                        <input type="Password" placeholder="Password"/>
                    </div>
                </div>
                <div className="login__options">
                    <Link to={"/signup"} style={{textDecoration: "none", color: "var(--text-color-light)"}}>
                        <span className="login__option">create account</span>
                    </Link>
                    <Link to={"/resetAccount"} style={{textDecoration: "none", color: "var(--text-color-light)"}}>
                        <span className="login__option">forgot password?</span>
                    </Link>
                </div>
                <div className="login__loginBtn">
                    <button type="button">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
