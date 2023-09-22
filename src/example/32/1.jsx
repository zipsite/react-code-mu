function App() {

  function getDigitSum(num) {
    let numStr = String(num);
    let result = 0;
    for (let item of numStr) {
      result += parseInt(item)
    }

    return result
  }

  return (
    <p>
      {getDigitSum(12345)}
    </p>
  )
}

export default App
