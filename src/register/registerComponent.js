import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {createUserThunk} from "../users/processing/user-thunks";

function RegisterComponent() {

    let state = {
        _id: '',
        username: '',
        password: '',
        bio: '',
        type: 'USER'
    }

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.user)
    const failed = userDetails.failed

    const register = (user) => {
        user.type = document.querySelector("#userType").value
        dispatch(createUserThunk(user))
    }

    const setUsername = (state, username) =>
        state.username = username

    const setPassword = (state, password) =>
        state.password = password

    const setBio = (state, bio) =>
        state.bio = bio

    const checkPasswords = (state) =>
        state.password === document.getElementById('registerVerifyPassword').value

    const clearInput = (target) =>
        target.value = ''

    return (
        <div>
            <h1>Register</h1>
            <span id={'noMatchMessage'} hidden={true}>The "password" and "verify password" fields do not match</span>
            <span id={'failedMessage'} hidden={failed}>Failed to register account</span>
            <div className={"list-group"}>
                <div className={"list-group-item"}>
                    <input
                        id={'registerUsername'}
                        onChange={(e) => setUsername(state, e.target.value)}
                        className={'form-control'}
                        placeholder="username"/>
                </div>
                <div className={"list-group-item"}>
                    <input
                        id={'registerPassword'}
                        onChange={(e) => setPassword(state, e.target.value)}
                        className={'form-control'}
                        type="password"
                        placeholder="password"/>
                </div>
                <div className={"list-group-item"}>
                    <input
                        id={'registerVerifyPassword'}
                        className={'form-control'}
                        type="password"
                        placeholder="verify password"/>
                </div>
                <div className={"list-group-item"}>
                        <textarea
                            id={'registerBio'}
                            onChange={(e) => setBio(state, e.target.value)}
                            className={'form-control'}
                            placeholder="tell us about yourself"/>
                </div>
                <div className={"list-group-item"}>
                    <select className={"form-select"} id="userType" name="stars">
                        <option value={"USER"}>user</option>
                        <option value={"ADMIN"}>admin</option>
                    </select>
                </div>


            </div>

            <button
                onClick={
                    () => {
                        if (checkPasswords(state)) {
                            state._id = new Date().valueOf()
                            document.getElementById('noMatchMessage').hidden = true
                            register(state)
                        } else {
                            clearInput(document.getElementById('registerPassword'))
                            clearInput(document.getElementById('registerVerifyPassword'))
                            document.getElementById('noMatchMessage').hidden = false
                        }
                    }
                }
                className={'btn btn-primary btn-block'}>
                Register
            </button>
            <div>
                Exact requirements are:
                <ul>
                    <li>{"Must allow users to register and create a new account"}</li>
                    <li>{"Must allow choosing a role(s) for a user. For instance, when signing up you can provide a checkbox or radio button to select the role or roles. Alternatively provide an admin role and admin page that allows configuring user role(s)"}</li>
                    <li>{"Must allow login in and identifying themselves"}</li>
                    <li>{"Must disallow access to at least one Web page unless logged in"}</li>
                    <li>{"Must allow access to all other Web pages even when not logged in"}</li>
                    <li>{"Must adapt content based on whether user is logged in or not for at least the Home page and Profile page"}</li>
                    <li>{"Must force login only when identity is required. For instance, an anonymous user might search for movies and visit the details page for a particular movie without needing to login. But if they attempt to like the movie, or rate it, or comment on it, or write a review, or follow someone, the application must request the user to login. Most of the Web application must be available without login (see me if not)"}</li>
                    <li>{"Must be mapped to /login if both login and register are implemented in the same page"}</li>
                    <li>{"The login and register page can be implemented as a single page or as two separate pages. In that case the login page must be mapped to /login and the register page must be mapped to /register"}</li>
                </ul>
            </div>
        </div>

    );
}

export default RegisterComponent;