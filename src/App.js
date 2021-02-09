
import React from 'react'
let n = 0
function App() {
  return (
    <div className="App">
      <span>{n}</span>
        <Component/>
    </div>
  );
}
const Component = () => {
  return (
      <div>
        <button
            onClick={() => {
              n+=1
              console.log(n)
            }}
        >+1</button>
      </div>
  )
}

export default App

