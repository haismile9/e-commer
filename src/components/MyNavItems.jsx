import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/02_logo-removebg.png'

const MyNavItems = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className='container'>
                {/* logo*/}
                <Link to={"/"} className='navbar-brand'>
                    <img src={logo} alt="" width="150" />
                </Link>
                {/* nút toggle */}
                <button 
                className='navbar-toggler bg-dark'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNavDropdown'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                {/* menu */}
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link to={"/"} className='nav-link fw-semibold'>Trang chủ</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/shop"} className='nav-link fw-semibold'>Cửa hàng</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/blog"} className='nav-link fw-semibold'>Bài viết</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/about"} className='nav-link fw-semibold'>Về chúng tôi</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/contact"} className='nav-link fw-semibold'>Liên hệ</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/signup"} className='nav-link btn btn-outline-light fw-semibold px-1 mb-1 mx-1'>Tài khoản</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/login"} className='nav-link btn btn-outline-light fw-semibold px-1 mb-1 mx-1'>Đăng nhập</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>

    </header>
  )
}

export default MyNavItems