import { Component } from 'react'
import '../styles/Navbar.css'
import '../styles/ThemeSwitch.css'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  constructor () {
    super();

    this.state = {
      menuOpen: false
    };
  }

  toggleMenu = () => {
    console.log("menuOpned")

    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    let { toggleTheme } = this.props;

    return (
      <div className={`navbar-container ${this.state.menuOpen ? 'open' : ''}`} >
        <div className="left-side">
          <span className="logo">NewsMonk</span>
        </div>

        <ul className="nav-links">
          <li className="nav-item"><Link className='nav-link' to='/'>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/'>General</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/business'>Business</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/entertainment'>Entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/health'>Health</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/science'>Science</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/sports'>Sports</Link></li>
        </ul>

        <div className="right-side">
          <span>Toggle Mode</span>

          <label className="theme-switch" htmlFor="checkbox">
            <input onChange={toggleTheme} type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>

          <button className='menu-btn' onClick={this.toggleMenu}>&#9776;</button>
        </div>
      </div>
    )
  }
}
