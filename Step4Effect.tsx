import { useEffect, useState } from 'react'

function Step4Effect() {
  const [second, setSecond] = useState<number>(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecond(prevSecounds => prevSecounds + 1)
      console.log('현재시간:${new Date().toLocaleTimeString()}')
    }, 1000)
    return () => {
      console.log('클릭함수')

      clearInterval(timerId)
    }
  }, [])

  return (
    <>
      <h3>클린업(청소)</h3>

      <p>현재 카운트: {second}</p>
      <p>나는</p>
    </>
  )
}

export default Step4Effect
