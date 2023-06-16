import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useUserAuth } from '../authContext/AuthContext'
import { useTranslation } from 'react-i18next'
import { FacebookAuthProvider } from "firebase/auth";
import Data from './Data'


const SignUp = (Props) => {

    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agreed, setAgreed] = useState(false)
    const [formErrors, setFormErrors] = useState({});

    const { createUser, signInWithGoogle, signInWithFacebook, signInWithApple } = useUserAuth()

    let navigate = useNavigate()
    const { t } = useTranslation()

    const handleGoogle = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithGoogle(email, password);
            navigate('/')
        } catch (e) {
            setError(e.message);
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

    const handleFacebook = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithFacebook(email, password);
            navigate('/blog')
        } catch (e) {
            setError(e.message);
            console.log(error);
        }
    }









    return (
        <section className="signup section">
            <div className="signup__container container">
                <div className="signup__content">
                    <div className="signup__page-right">
                        <div className="login__text ">
                            <h1>register</h1>
                        </div>
                        <form className="signup__form" onSubmit={handleSubmit}>

                            <div className="signup__form-container">
                                <div className="signup__user">
                                    <h3>email</h3>
                                    <input type="email" id="email" name='email' className="login__input-field" placeholder={t("signup__form__email")} value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <h3>password</h3>
                                    <input type="password" id="password" name='password' className="signup__input-field" placeholder={t("signup__form__password")} value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <h3>confirm password</h3>
                                    <input type="password" id="password" name="confirmPassword" className="signup__input-field" placeholder={t("signup__form__password_again")} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <div className="signup__button">
                                    <button type="submit" className="login__button-sign">
                                        <h3>REGISTER</h3>
                                        <i className="uil uil-arrow-right button__icon-login"></i>
                                    </button>
                                </div>
                                <div className="social__logins">
                                    <div className="signup__social-button facebook__button_blacked">
                                        <i class='bx bxl-facebook' ></i>
                                        <button onClick={handleGoogle} className="">facebook</button>
                                    </div>
                                    <div className="signup__social-button google__button_blacked">
                                        <i class='bx bxl-google' ></i>
                                        <button onClick={handleGoogle}>google</button>
                                    </div>
                                </div>
                                <div className="login__checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                            required
                                        />
                                    </label>
                                    <p>You agree on our Privacy Policy and Terms & Conditions</p>
                                </div>
                                {formErrors.agreed && <p className="error-message">{formErrors.agreed}</p>}
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SignUp


// <div class="or__container">
// <div class="line__separator"></div>
// <div class="or__label">{t("form__or")}</div>
// <div class="line__separator"></div>
// </div>
// <div className="signup__social">
// <div className="signup__box">
//     <button onClick={handleGoogle} className='signup-with-google-btn'>{t("button__sign__up__with__google")}</button>
// </div>
// </div>
// <div className="signup__forgot">
// <span className="signup__account">{t("signup__form__have_account_already")} <Link className="signup__link" to="/login">{t("signup__form__login")}</Link></span>
// </div>