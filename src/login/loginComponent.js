function LoginComponent() {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <p>
                    Login content.
                </p>
                <p>
                    Register content.
                </p>
            </div>
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

export default LoginComponent;