function App() {

  function getDigitSum(num) {
    let numStr = String(num);
    let result = 0;
    for (let item of numStr) {
      result += parseInt(item)
    }

    return result
  }

  const num = getDigitSum(123);

  return (
    <div>
      {num}
    </div>
  )
}

export default App
