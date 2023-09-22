import { useState } from "react";
function App() {
  const [name, setName] = useState("Фёдор");
  const [surn, setSurn] = useState("Макаров");
  return (
    <div>
      <p>{name}</p>
      <p>{surn}</p>
      <div>
        <button onClick={() => {setName('Анатолий')}}>Имя</button>
        <button onClick={() => {setSurn('Никитин')}}>Фамилия</button>
      </div>
    </div>
  );
}

export default App;
