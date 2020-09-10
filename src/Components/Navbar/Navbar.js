import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-info navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item active">
        <Link className="nav-link" to="/">COVID 19</Link>
      
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/india">India</Link>
      {/* <a className="nav-link" href="#">India</a> */}
    </li>
    <li className="nav-item">
      {/* <a className="nav-link" href="#">Uae</a> */}
      <Link className="nav-link" to="/uae">Uae</Link>
    </li>
    <li className="nav-item">
      {/* <a className="nav-link" href="#">World</a> */}
      <Link className="nav-link" to="/world">World</Link>
    </li>
    {/* <li className="nav-item">
      <a className="nav-link disabled" href="#">Disabled</a>
    </li> */}
  </ul>
</nav>
            </div>
        )
    }
}
