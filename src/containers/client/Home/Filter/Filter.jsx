import React, { useState } from 'react'
import JSONDATA from '../ShoesList/data.json'
import './Filter.scss'
export default function Filter() {
    const [searchTerm, setSearchTerm] = useState([])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navFilter">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse navContent" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Male
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Shoes</a>
                                <a className="dropdown-item" href="#">Shirt</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Accessories</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Female
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Shoes</a>
                                <a className="dropdown-item" href="#">Shirt</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Accessories</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Kids
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Shoes</a>
                                <a className="dropdown-item" href="#">Shirt</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Accessories</a>
                            </div>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <div className="filter">
                            <input className="form-control mr-sm-2r " type="search" placeholder="Find shoes" aria-label="Search" onChange={event => { setSearchTerm(event.target.value) }} />
                            <div className="filter-result">
                                {JSONDATA.filter((val) => {
                                    if (searchTerm == "") {

                                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val
                                    }
                                }).map((val, key) => {
                                    return (
                                        <div className="filter-item" key={key}>
                                            <a>
                                                <p>{val.name}</p>
                                            </a>
                                        </div>
                                    )

                                })}
                            </div>
                        </div>

                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}

