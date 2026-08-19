import { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import './styles/Global.css'

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      theme :"light"
    };

  }

  toggleTheme = () => {
    if(this.state.theme === "light") {
      this.setState({
        theme : "dark"
      });
      document.body.style.backgroundColor= "var(--dark-theme)"
    }
    else {
      this.setState({
        theme : "light"
        
      });
      document.body.style.backgroundColor= "var(--light-theme)"
    }
  };
  
  render() {

    return (
      <>
        <div data-theme={this.state.theme}>
          <Navbar
            toggleTheme={this.toggleTheme}
            />

          <News 
            pageSize={20}
            category="science"
          />
        </div>
      </>
    )
  }
}