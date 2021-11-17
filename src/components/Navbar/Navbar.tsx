import { withRouter, Link } from "react-router-dom"


const Navbar = () => {

    return (
        <div className="d-flex py-2  mb-3 px-3 px-md-5 my-navbar justify-content-between align-items-center">
            <Link to="/">
                <img src="/logo.svg" alt="logo" />
            </Link>
            <img src="/user.png" height={40} alt="user-account" />
        </div>
    )
}

export default withRouter(Navbar)