import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  const [numero,setNumero] = useState (0)
  const Incrementar =() =>{
    if (numero < 10){
      setNumero (numero +1)
    }
  }
  
  const Diminuir =() =>{
    if (numero > 0){
      setNumero (numero - 1)
    }
  }
  
  return (
    <section className='primeiraSessao'>
    <section className='segundaSessao'>
    <h2>{numero}</h2>
     <button className='primeiroBotao' onClick={Incrementar}>+</button>
    <button className='segundoBotao' onClick={Diminuir}>-</button>
 </section>
    </section>
  )
}

export default App
