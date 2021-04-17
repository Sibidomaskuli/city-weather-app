import React from "react"; 


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
                  <a
                    href="#"
                    className="list-group-item list-group-item-action active"
                    aria-current="true"
                    rel="noreferrer"
                  />
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
