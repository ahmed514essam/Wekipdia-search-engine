import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
    
            <nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto w-75">
  <div className="container-fluid d-flex justify-content-around">
          <Link className="nav-link active fw-bolder text-info-emphasis fs-3" aria-current="page" to={"/"}>Home</Link>
          <Link className="nav-link active fw-bold text-info-emphasis fs-3" aria-current="page" to={"/favourites"}>Favourites</Link>
  </div>
</nav>
    )
}
