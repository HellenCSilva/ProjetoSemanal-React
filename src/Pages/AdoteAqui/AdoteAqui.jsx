import Header from './Components/Header/Header'
import Descricao from './Components/Descricao/Descricao'
import Forms from './Components/Forms/Forms'
import Footer from './Components/Footer/Footer'

function AdoteAqui() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="App">
        <Header/>
        <Descricao/>
        <Forms/>
        <Footer/>
      </div>
    )
  }
  
  export default AdoteAqui

