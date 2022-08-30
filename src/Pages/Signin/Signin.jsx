import React from "react";
import google from '../../Assets/google.png'
import './signin.css'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { signIn } from "../../Services/UserService";
import {useNavigate} from 'react-router-dom'

const emailRegex =
    /^[0-9A-Za-z]+([._+-][0-9A-Za-z]+)*[@][0-9A-Za-z]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
const passwordRegex =
    /^[a-z A-Z 0-9]{1,}[!*@#$%^&+=]?[a-z A-Z 0-9]{1,}[0-9]{1,}[a-z A-Z 0-9]{1,}$/;

function SignIn() {
    const navigate = useNavigate()
    const [signinObj, setSigninObj] = React.useState({ email: "", password: "" });
    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false,
        passwordBorder: false,
        emailHelper: "",
        passwordHelper: "",
    });

    const takeEmail = (event) => {
        setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
    };
    const takePassword = (event) => {
        setSigninObj((abc) => ({ ...abc, password: event.target.value }));
        
    };

    const submit = async () => {
        const emailTest = emailRegex.test(signinObj.email);
        const passwordTest = passwordRegex.test(signinObj.password);
        console.log(emailTest, passwordTest);

        if (emailTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "enter correct email",
            }));
        }
        else if (emailTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: false,
                emailHelper: "",
            }));
        }

        if (passwordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "enter correct password",
            }));
        }
        else if (passwordTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }

        if (emailTest === true && passwordTest === true)
        {
            let response = await signIn(signinObj);
            navigate('/Dashboard')
            localStorage.setItem("Token", response?.data?.data)
        }
    };

    return (
        <div className="mainsi">
            <div className="logosi">
                <img src={google} style={{ width: "70px", height: "23px" }} />
                <h3>Sign in</h3>
                <h4>to continue to Gmail</h4>
            </div>
            <div className="usersi">
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="medium"
                    onChange={takeEmail}
                    error={regexObj.emailBorder}
                    helperText={regexObj.emailHelper}
                />
                <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size="medium"
                    onChange={takePassword}
                    error={regexObj.passwordBorder}
                    helperText={regexObj.passwordHelper}
                />
                <a href=" " style={{ textDecoration: "none" }}>Forgot email?</a>
            </div>
            <div className="guestsi">
                <h5>Not your computer? Use Guest mode to sign in privately.</h5>
                <a href=" " style={{ textDecoration: "none" }}>Learn more</a>
            </div>
            <div className="buttonsi">
                <a href="SignUp.html" style={{ textDecoration: "none" }}>Create account</a>
                <Button variant="contained" size="small" onClick={submit}>Next</Button>
            </div>
        </div>
    )
}

export default SignIn;