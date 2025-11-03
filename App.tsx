import React from 'react'

const App = () => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e)
  }

  return (
    <>
      <button onClick={clickHandler}>클릭</button>
    </>
  )
}

export default App

// 화살표 함수란 특정한 상황에서만 가동되어야할때
// 일반 함수 형태로만들면 무조건 실행이 되어버린다
// 화살표 함수는 무조건실행이 아니고 특정한 상황에서만 가동할수있도록 하는것이다
