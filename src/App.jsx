import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Conteudo from './Components/Conteudo/Conteudo'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Conteudo/>
      <Footer/>
      
    </div>
  )
}

export default App
