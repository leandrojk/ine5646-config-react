import React, { useState, useEffect } from 'react'

function useModelo() {

  const estadoInicial = {
    n1: 0,
    n2: 0
  }

  function setN1(v) {
    let numero = parseInt(v)
    if (!isNaN(numero))
      setEstado({...estado, n1: numero})
    else
      setEstado(estadoInicial)
  }

  function setN2(v) {
    let numero = parseInt(v)
    if (!isNaN(numero))
      setEstado({...estado, n2: numero})
    else
      setEstado(estadoInicial)
  }
  
  const [estado, setEstado] = useState(estadoInicial)

  useEffect(() => { setEstado({n1: 10, n2: 20}) }, [])

  return [ estado, {setN1, setN2} ]
}


function App () {
  const [ estado, {setN1, setN2} ] = useModelo()

  return (
    <div className='container is-fluid'>
      <div className='message'>
        <div className='message-header'>
            UFSC - CTC - INE - INE5646 :: Config React
        </div>
        <div className='message-body'>
          <input type='number' onChange={ev => setN1(ev.target.value)} value={estado.n1}/> +
          <input type='number' onChange={ev => setN2(ev.target.value)} value={estado.n2}/> =
          <span>{estado.n1 + estado.n2}</span>
        </div>
      </div>
    </div>
  )  
}


export default App
