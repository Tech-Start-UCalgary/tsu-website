import "./Navbar.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "images/tech-start-logo-white.png";
import { Link as LinkScroll } from "react-scroll";

function Header(props: any) {

    const [navbarExpanded, setNavbarExpanded] = useState(false)
    function toggleNavbarExpanded() {
        setNavbarExpanded(!navbarExpanded)

    }
    function hideNavbar() {
        setNavbarExpanded(false)
        console.log("mouse")
    }

    function NavbarLink(props: any) {

        return (
            <li ><a href="#">
                <LinkScroll
                    to={props.top}
                    spy={true}
                    offset={-80}
                    duration={500}>
                    <Link onClick={hideNavbar} to={props.link}> {props.name} </Link>
                </LinkScroll></a>
            </li>)

    }

    return <header className="navbar__container">
        <div className="navbar">
            <input type="checkbox" checked={navbarExpanded} onClick={toggleNavbarExpanded} id="navbar__nav-toggle" className="navbar__nav-toggle" />
            <a href="#">
                <LinkScroll
                    to="homePageTop"
                    spy={true}
                    offset={-70}
                    duration={500}>
                    <Link to="/" ><img src={logo} alt="logo" className="navbar__logo" /></Link>
                </LinkScroll>
            </a>
            <nav className="navbar__content " >
                <ul>
                    <NavbarLink
                        top="homePageTop"
                        link="/"
                        name="About"
                    />
                    <NavbarLink
                        top="applyPageTop"
                        link="/apply"
                        name="Apply"
                    />
                    <NavbarLink
                        top="docsPageTop"
                        link="/resources"
                        name="Resources"
                    />
                    <NavbarLink
                        top="sparkPageTop"
                        link="/community"
                        name="Community"
                    />
                </ul>
            </nav>
            <label htmlFor="navbar__nav-toggle" className="navbar__nav-toggle-label">
                <span></span>
            </label>

        </div>
        <div className="navbar__placeholder"></div>
    </header>
}
export default Header;