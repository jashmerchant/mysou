import { FiLogOut } from 'react-icons/fi';
import { setCookie } from 'nookies';
import Router from 'next/router';

const Navbar = () => {
    function handleLogout() {
        setCookie(null, 'jwt', '', {
            maxAge: 1,
            path: '/',
        })
        setCookie(null, 'id', '', {
            maxAge: 1,
            path: '/',
        })
        console.log('deleting cookies!')
        Router.push('/login');
    }
    function handleHover(e) {
        e.target.style.cursor = "pointer"
    }
    return (
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Silver Oak University</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            {/* <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" onMouseEnter={(e) => handleHover(e)} onClick={() => handleLogout()}><FiLogOut /> Sign out</a>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;