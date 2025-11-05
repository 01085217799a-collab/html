import { useState } from 'react'

const App = () => {
  const [state, setState] = useState({
    currentNumber: '0',
    previousNumber: '',
    operation: null,
    isNewNumber: true,
  })
  const handleClear = () => {
    console.log('clear')
  }

  const handleDot = () => {
    console.log('dot')
  }

  const handleNumberClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    console.log(event.currentTarget.value)
    const value = event.currentTarget.value
    if (state.isNewNumber) {
      setState({
        ...state,
        currentNumber: value,
        isNewNumber: false,
      })
    } else {
      setState({
        ...state,
        currentNumber: state.currentNumber + value,
      })
    }
  }
  const handleOperatorClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    console.log(event.currentTarget.value)
  }
  return (
    <article className="calculator">
      <form name="forms">
        <input type="text" name="output" value={state.currentNumber} readOnly />

        <input
          type="button"
          className="clear"
          value="c"
          onClick={handleClear}
        />
        <input
          type="button"
          className="operator "
          value="/"
          onClick={handleOperatorClick}
        />
        <input type="button" value="1" onClick={handleNumberClick} />
        <input type="button" value="2" onClick={handleNumberClick} />
        <input type="button" value="3" onClick={handleNumberClick} />
        <input
          type="button"
          className="operator "
          value="*"
          onClick={handleOperatorClick}
        />
        <input type="button" value="4" onClick={handleNumberClick} />
        <input type="button" value="5" onClick={handleNumberClick} />
        <input type="button" value="6" onClick={handleNumberClick} />
        <input
          type="button"
          className="operator"
          value="+"
          onClick={handleOperatorClick}
        />
        <input type="button" value="7" onClick={handleNumberClick} />
        <input type="button" value="8" onClick={handleNumberClick} />
        <input type="button" value="9" onClick={handleNumberClick} />
        <input
          type="button"
          className="operator"
          value="-"
          onClick={handleOperatorClick}
        />
        <input type="button" className="dot" value="." onClick={handleDot} />
        <input type="button" value="0" onClick={handleNumberClick} />
        <input
          type="button"
          className="operator result"
          value="="
          onClick={handleOperatorClick}
        />
      </form>
    </article>
  )
}

export default App
// handleClick(value)	숫자·연산자 버튼 클릭	기존 입력에 클릭한 값을 이어 붙임
// handleClear()	C 버튼 클릭	입력 초기화
// handleCalculate(
// event.target.value는 눌린 버튼의 value 값을 나타냅니다.
