import React from "react";


export default function Header() {
    return (
        <header>
            <nav className='nav-bar'>
                <img className='nav-logo' src="logo192.png" alt="logo" />
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}