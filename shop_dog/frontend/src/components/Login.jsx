const Login = () => {
    return (
        <form className="form-signin text-center"
        >
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <input
                id="form_search"
                type="email"
                className="form-control"
                placeholder="Email address"
                required
                autofocus
            />
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
            />
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" defaultValue="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-secondary" type="submit">
                Login
            </button>
            <button className="btn btn-secondary" type="submit">
                Register
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
        </form>

    );
}

export default Login;