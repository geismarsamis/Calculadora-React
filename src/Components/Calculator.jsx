import React, { useState } from 'react'
import './Calculator.css'
import { Box, Container, Hidden } from '@mui/material'


export default function Calculator() {
  const [num, setNum] = useState(0)
  const [oldnum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()


  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function allClear() {
    setNum(0);
  }

  function OperatorHandler(e){
    var operatorInput = e.target.value;
    setOperator (operatorInput);
    setOldNum (num);
    setNum(0);
  }

  function Calculate(){
    if (operator === "/"){
      setNum ((parseFloat(oldnum) / parseFloat(num)).toLocaleString("pt-BR"));
    }
    if (operator === "*"){
      setNum ((parseFloat(oldnum) * parseFloat(num)).toLocaleString("pt-BR"));
    }
    if (operator === "-"){
      setNum ((parseFloat(oldnum) - parseFloat(num)).toLocaleString("pt-BR"));
    }
    if (operator === "+"){
      setNum ((parseFloat(oldnum) + parseFloat(num)).toLocaleString("pt-BR"));
    }
  }

  return (
    <div>
      <Box m={26} />
      <Container maxWidth="xs">
        <div className='Case'>
          <div className='title'><h1>Calculator</h1></div>
          <div className='result'><h2>{num}</h2></div>
          <button onClick={inputNum} value={7}>7</button>
          <button onClick={inputNum} value={8}>8</button>
          <button onClick={inputNum} value={9}>9</button>
          <button onClick={OperatorHandler} value="/">/</button>
          <button onClick={inputNum} value={4}>4</button>
          <button onClick={inputNum} value={5}>5</button>
          <button onClick={inputNum} value={6}>6</button>
          <button onClick={OperatorHandler} value="*">*</button>
          <button onClick={inputNum} value={1}>1</button>
          <button onClick={inputNum} value={2}>2</button>
          <button onClick={inputNum} value={3}>3</button>
          <button onClick={OperatorHandler} value="-">-</button>
          <button style={{ visibility: "Hidden" }}>none</button>
          <button onClick={inputNum} value={0}>0</button>
          <button onClick={inputNum} value={"."}>,</button>
          <button onClick={OperatorHandler} value="+">+</button>
          <button onClick={allClear}>AC</button>
          <button style={{ visibility: "Hidden" }}>none</button>
          <button style={{ visibility: "Hidden" }}>none</button>
          <button onClick={Calculate}>=</button>
        </div>
      </Container>
    </div>
  )
}
