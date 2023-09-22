import { nanoid } from 'nanoid/non-secure'
function App() {
  function id() {
    return nanoid();
  }
  return (
    <div>
      {id()}
    </div>
  )
}

export default App
