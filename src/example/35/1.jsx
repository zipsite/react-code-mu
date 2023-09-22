function App() {
  function showEvent(event) {
    console.log(event)
  }
  return (
    <div>
      <button onClick={showEvent}>Кнопка</button>
    </div>
  )
}

export default App
