import React from 'react'

const App = () => {
  const data = fetch("http://localhost:3000").then(res => res.json());
  console.log(data)

  return (
    <div></div>
  )
}

export default App