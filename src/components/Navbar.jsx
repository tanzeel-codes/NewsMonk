import { Component } from 'react'
import '../styles/Navbar.css'
import '../styles/ThemeSwitch.css'

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
          <li className="nav-item"><a className='nav-link'>Home</a></li>
          <li className="nav-item"><a className="nav-link">About</a></li>
          <li className="nav-item"><a className="nav-link">Business</a></li>
          <li className="nav-item"><a className="nav-link">Entertainment</a></li>
          <li className="nav-item"><a className="nav-link">Health</a></li>
          <li className="nav-item"><a className="nav-link">Science</a></li>
          <li className="nav-item"><a className="nav-link">Sports</a></li>
          <li className="nav-item"><a className="nav-link">General</a></li>
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
