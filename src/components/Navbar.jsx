import { Component } from 'react'
import '../styles/Navbar.css'
import '../styles/ThemeSwitch.css'

export default class Navbar extends Component {
  render() {
    let {theme, toggleTheme} = this.props;
    return (
      <div className="navbar-container" data-theme={theme}>
        <div className="left-side">
            <span className="brand">NewsMonk</span>
            <span className="home">Home</span>
            <span className="about">About</span>
        </div>

        <div className="right-side">
          <span>Toggle Mode</span>
          <label className="theme-switch" htmlFor="checkbox">
            <input onClick={toggleTheme} type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
        </div>
      </div>
    )
  }
}
