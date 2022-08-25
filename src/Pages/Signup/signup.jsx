import React from "react";
import google from '../../Assets/google.png'
import account from '../../Assets/account.svg'
import './signup.css'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { signUp } from "../../Services/UserService";

const emailRegex =
    /^[0-9A-Za-z]+([._+-][0-9A-Za-z]+)*[@][0-9A-Za-z]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
const passwordRegex =
    /^[a-z A-Z 0-9]{1,}[!*@#$%^&+=]?[a-z A-Z 0-9]{1,}[0-9]{1,}[a-z A-Z 0-9]{1,}$/;
const fNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lNameRegex = /^[A-Z]{1}[a-z]{2,}$/;

function Signup() {
    const [signupObj, setSignupObj] = React.useState({ FirstName: "", LastName: "", Email: "", Password: "", confirm: "" });
    const [regexObj, setRegexObj] = React.useState({
        fNameBorder: false,
        lNameBorder: false,
        emailBorder: false,
        passwordBorder: false,
        confirmBorder: false,
        emailHelper: "",
        passwordHelper: "",
    });

    const takefName = (event) => {
        setSignupObj((prevState) => ({ ...prevState, FirstName: event.target.value }));
    };
    const takelName = (event) => {
        setSignupObj((prevState) => ({ ...prevState, LastName: event.target.value }));
    };
    const takeEmail = (event) => {
        setSignupObj((prevState) => ({ ...prevState, Email: event.target.value }));
    };
    const takePassword = (event) => {
        setSignupObj((prevState) => ({ ...prevState, Password: event.target.value }));

    };
    const takeConfirm = (event) => {
        setSignupObj((prevState) => ({ ...prevState, confirm: event.target.value }));
    };

    const submit = async () => {
        const fNameTest = fNameRegex.test(signupObj.FirstName);
        const lNameTest = lNameRegex.test(signupObj.LastName);
        const emailTest = emailRegex.test(signupObj.Email);
        const passwordTest = passwordRegex.test(signupObj.Password);
        console.log(fNameTest, lNameTest, emailTest, passwordTest);

        if (fNameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                fNameBorder: true,
                fNameHelper: "enter correct name",
            }));
        }
        else if (fNameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                fNameBorder: false,
                fNameHelper: "",
            }));
        }

        if (lNameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                lNameBorder: true,
                lNameHelper: "enter correct name",
            }));
        }
        else if (lNameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                lNameBorder: false,
                lNameHelper: "",
            }));
        }

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

        if (signupObj.confirm === signupObj.Password) {
            setRegexObj((prevState) => ({
                ...prevState,
                confirmBorder: false,
                confirmHelper: "",
            }));
        }
        else {
            setRegexObj((prevState) => ({
                ...prevState,
                confirmBorder: true,
                confirmHelper: "Password does not match.",
            }));
        }

        if (fNameTest === true && lNameTest === true && emailTest === true && passwordTest === true) {
            let response = await signUp(signupObj);
            console.log(response);
        }
    };

    return (
        <div>
            <div className="main">
                <div className="form">
                    <div className="logo">
                        <img src={google} style={{ width: "75px", height: "25px" }} />
                        <h2>Create your Google Account</h2>
                        <h4>to continue to Gmail</h4>
                    </div>
                    <div className="name">
                        <TextField
                            type="text"
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            size="small"
                            onChange={takefName}
                            error={regexObj.fNameBorder}
                            helperText={regexObj.fNameHelper}
                        />
                        <TextField
                            type="text"
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            size="small"
                            onChange={takelName}
                            error={regexObj.lNameBorder}
                            helperText={regexObj.fNameHelper}
                        />
                    </div>
                    <div className="email">
                        <TextField
                            type="email"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size="small"
                            onChange={takeEmail}
                            error={regexObj.emailBorder}
                            helperText={regexObj.emailHelper}
                        />
                        <h6>You can use letters, numbers & periods</h6>
                    </div>
                    <div className="pass">
                        <div className="password">
                            <TextField
                                type="password"
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                size="small"
                                onChange={takePassword}
                                error={regexObj.passwordBorder}
                                helperText={regexObj.passwordHelper}
                            />
                            <TextField
                                type="password"
                                id="outlined-basic"
                                label="Confirm"
                                variant="outlined"
                                size="small"
                                onChange={takeConfirm}
                                error={regexObj.confirmBorder}
                                helperText={regexObj.confirmHelper}
                            />
                        </div>
                        <h6>Use 8 or more characters with a mix of letters, numbers & symbols</h6>
                    </div>
                    <div>
                        <input className="check" type="checkbox" />
                        <label className="check">Show password</label>
                    </div>
                    <div className="button">
                        <a href="SignIn.html" style={{ textDecoration: "none" }}>Sign in instead</a>
                        <Button variant="contained" size="small" onClick={submit}>Next</Button>
                    </div>
                </div>
                <div className="image">
                    <img src={account} style={{ width: "250px", height: "250px" }} />
                    <h3>One account. All of Google</h3>
                    <h3>working for you.</h3>
                </div>
            </div>
            <div className="footercontainer">
                <select className="select" style={{ border: "none" }}>
                    <option value="English(United States)">English(United States)</option>
                    <option value="English(United Kingdom)">English(United Kingdom)</option>
                    <option value="English(Hindi)">Hindi</option>
                </select>
                <div className="footer">
                    <a href=" " style={{ textDecoration: "none" }}>Help</a>
                    <a href=" " style={{ textDecoration: "none" }}>Privacy</a>
                    <a href=" " style={{ textDecoration: "none" }}>Terms</a>
                </div>
            </div>
        </div>
    )
}

export default Signup;