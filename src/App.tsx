import React from 'react';
import './App.css';
import AppBarComponent from './Components/AppBar';
import Products from './Pages/Products';

function App() {
  return (
    <React.Fragment>
      <AppBarComponent/>
      <Products />
    </React.Fragment>
  );
}

export default App;
