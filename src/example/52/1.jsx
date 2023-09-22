import { useState } from "react";
function App() {
  const [name, setName] = useState("user1");
  const [surn, setSurn] = useState("surn1");
  const [age, setAge] = useState(18);
  return (
    <ul>
      <li>Имя: {name} </li>
      <li>Фамилия: {surn} </li>
      <li>Возраст: {age} </li>
    </ul>
  );
}

export default App;
