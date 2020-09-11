import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-info navbar-dark">
  <ul className="navbar-nav">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png" style={imagestyle}></img>
    <li className="nav-item active">
        <Link className="nav-link" to="/"><h4>COVID 19</h4></Link>
      
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/india">INDIA</Link>
      {/* <a className="nav-link" href="#">India</a> */}
    </li>
    <li className="nav-item">
      {/* <a className="nav-link" href="#">Uae</a> */}
      <Link className="nav-link" to="/uae">UAE</Link>
    </li>
    <li className="nav-item">
      {/* <a className="nav-link" href="#">World</a> */}
      <Link className="nav-link" to="/world">WORLD</Link>
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

const imagestyle={
  height:"40px",
  weight:"40px"
}