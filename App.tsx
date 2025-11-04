// import { useReducer, useState } from 'react'

// function simpleCounterReducer(
//   state: { count: number },
//   action: { type: string }
// ) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 }
//     case 'DECREMENT':
//       return { count: state.count - 1 }
//     default:
//       throw new Error('무슨말이니?')
//   }
// }

// const App = () => {
//   const initalState = { count: 0 }
//   const [state, dispatch] = useReducer(simpleCounterReducer, initalState)

//   return (
//     <>
//       <h3>숫제 카운트</h3>
//       <p>현재숫자:{state.count}</p>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>하나 늘려</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>하나 줄려</button>
//     </>
//   )
// }
// export default App

import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>숫자 카운트</h3>
      <p>현재 숫자: {count}</p>
      <button onClick={() => setCount(count + 1)}>하나 늘려</button>
      <button onClick={() => setCount(count - 1)}>하나 줄여</button>
    </>
  )
}
export default App
