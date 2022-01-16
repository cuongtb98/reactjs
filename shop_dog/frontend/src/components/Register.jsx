const Register = () => {
    return (
        <form className="form-signin text-center"
        >
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <input
                type="email"
                className="form-control"
                placeholder="Enter User"
                required
            />
            <input
                type="email"
                className="form-control"
                placeholder="Email address"
                required
            />
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
            />
            <input
                type="password"
                className="form-control"
                placeholder="Password ..."
                required
            />

            <button className="btn btn-secondary" type="submit">
                Register
            </button>
        </form>

    );
}

export default Register;