import { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import './styles/Global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
      <BrowserRouter>
        <div data-theme={this.state.theme}>
          <Navbar
            toggleTheme={this.toggleTheme}
          />

          <Routes>
            <Route 
              exact path='/'
              element={
                <News
                  key="general"
                  pageSize={20}
                  category="general"
                />
              }
            />
            <Route 
              exact path='/business'
              element={
                <News 
                  key="business"
                  pageSize={20}
                  category="business"
                />
              }
            />
            <Route 
              exact path='/entertainment'
              element={
                <News
                  key="entertainment"
                  pageSize={20}
                  category="entertainment"
                />
              }
            />
            <Route 
              exact path='/health'
              element={
                <News
                  key="health"
                  pageSize={20}
                  category="health"
                />
              }
            />
            <Route 
              exact path='/science'
              element={
                <News
                  key="science" 
                  pageSize={20}
                  category="science"
                />
              }
            />
            <Route 
              exact path='/sports'
              element={
                <News
                  key="sports" 
                  pageSize={20}
                  category="sports"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      </>
    )
  }
}