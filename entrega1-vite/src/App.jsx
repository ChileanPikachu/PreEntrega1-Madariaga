import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer saludo={'Te esperamos'}/>
    </>
  )
}

export default App