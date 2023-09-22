function App() {
  function showEvent(event) {
    console.log(event.target)
  }
  return (
    <div>
      <button onClick={showEvent}>Кнопка</button>
    </div>
  )
}

export default App
