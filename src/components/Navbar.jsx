import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/logo.svg"
import menuIcon from "../assets/images/icon-menu.svg"
import menuCloseIcon from "../assets/images/icon-menu-close.svg"

const Navbar = () => {
    const navItems = [
        { name: "home", path: "/" },
        { name: "new", path: "/new" },
        { name: "popular", path: "/popular" },
        { name: "trending", path: "/trending" },
        { name: "categories", path: "/categories" }
    ]

    const navItemClass = ({ isActive }) =>
        isActive
            ? "capitalize font-medium text-very-dark-grayish-blue"
            : "capitalize text-dark-grayish-blue hover:text-soft-red transition-colors duration-200 ease-linear"

    // mobile menu toggle
    const [showMobileNavMenu, setShowMobileNavMenu] = useState(false)
    let menuBtn = menuCloseIcon
    if (!showMobileNavMenu) {
        menuBtn = menuIcon
    }
    // mobile menu toggle

    return (
        <div className="container relative py-6 flex gap-6 items-center justify-between">
            <Link>
                <img src={logo} alt="logo" />
            </Link>

            {/* larger screens */}
            <nav className="hidden sm:flex gap-3 w-[75%] max-w-[450px] items-center justify-between">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={navItemClass}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            {/* small screens */}
            <div className="sm:hidden">
                <img
                    src={menuBtn}
                    onClick={() =>
                        setShowMobileNavMenu((prevState) => !prevState)
                    }
                    className={`z-30 ${
                        showMobileNavMenu ? "fixed" : "absolute"
                    } top-8 right-6`}
                />

                <div
                    className={`fixed z-10 inset-0 bg-very-dark-blue w-screen h-screen opacity-50 ${
                        showMobileNavMenu || "hidden"
                    }`}
                    onClick={() => setShowMobileNavMenu(false)}
                ></div>

                <div
                    className={`fixed z-20 top-0 right-0 min-h-screen w-[60%] bg-off-white px-8 flex items-center justify-start ${
                        showMobileNavMenu || "hidden"
                    }`}
                >
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className="capitalize text-lg text-very-dark-blue"
                                onClick={() => setShowMobileNavMenu(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
