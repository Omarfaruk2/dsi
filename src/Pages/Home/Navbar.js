import { Icon } from '@iconify/react'
import React from 'react'
import "./Navbar.css"

const Navbar = () => {

    return (
        <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
        >
            <div className="navbar bg-base-100 py-6 shadow ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Services</a></li>
                            <li><a>Product</a></li>
                            <li><a>Technology</a></li>


                            <li tabIndex={0}>
                                <a className="justify-between">
                                    About
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>

                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Client
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Partner</a></li>



                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src="https://i.ibb.co/4tQQYdC/Group-1317.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Services</a></li>
                        <li><a>Product</a></li>
                        <li><a>Technology</a></li>


                        <li tabIndex={0}>
                            <a className="justify-between">
                                About
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>

                        <li tabIndex={0}>
                            <a className="justify-between">
                                Client
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Partner</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='flex gap-x-6 sm:hidden'>
                        <li><Icon className='text-3xl' icon="ci:home-alt-outline" /></li>
                        <li><Icon className='text-3xl' icon="bx:mail-send" /></li>
                        <li><Icon className='text-3xl' icon="akar-icons:arrow-shuffle" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar