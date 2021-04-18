import React from "react"; 
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header"
import Temperature from "./Temperature"
import Search from "./Search"
import Submit from "./Submit"
import ColumnOne from "./ColumnOne"
import ColumnTwo from "./ColumnTwo"
import ColumnThree from "./ColumnThree"
import ColumnFour from "./ColumnFour"
import ColumnFive from "./ColumnFive"
import ColumnSix from "./ColumnSix"
import Footer from "./Footer"


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">   
      <div className="container">
        <div className="weather-app">
          <div className="card">
            <div className="card-body">
              <div className="list-group">
                <span className="border border-primary">                  
                  <Header />
                  <Temperature />
                  <Search />
                  <Submit />
                  <div className="row">
                    <ColumnOne />
                    <ColumnTwo />
                    <ColumnThree />
                  </div>
                  <div className="row">
                    <ColumnFour />
                    <ColumnFive />
                    <ColumnSix />
                  </div>
                  <Footer />
                  <br />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
