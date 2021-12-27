import React from 'react'
import './Footer.scss'
export default function Footer() {
    return (
        <div className="footer">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-dark bg-dark">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="">| Privacy Policy | </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Terms and Conditions | </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">About | </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
