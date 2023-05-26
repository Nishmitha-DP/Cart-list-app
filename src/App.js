import logo from './logo.svg';
import './App.css';
import ProductsListHandle from './Components/ProductsListHandle';
import { useState } from 'react';


function App() {

  return (
    <div className="App">
      {/* <UseContext> */}
        <ProductsListHandle />
      {/* </UseContext> */}
    </div>
  );
}

export default App;