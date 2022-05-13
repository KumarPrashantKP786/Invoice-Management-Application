import React from "react"
import './App.css';
import DataGrid from "./components/DataGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      
        <Header/>
        <div className="Grid">
        <DataGrid/>
        </div>
        
        <Footer/>
        
       
     
    </div>
  );
}

export default App;
