import { nanoid } from 'nanoid/non-secure'
function App() {
  function id() {
    return nanoid();
  }

  const prods = [
    {name: 'user1', surn: "surn1", age:20},
    {name: 'user2', surn: "surn2", age:25},
    {name: 'user3', surn: "surn3", age:18},
  ];

  const users = prods.map((item) => {
    return {id: id(), ...item}
  })

  const res = users.map((item) => {
    return (
      <li key={item.id}>
        <span>{item.name} </span>
        <span>{item.surn} </span>
        <span>{item.age} </span>
      </li>
    )
  });
  
  return (
    <ul>
      {res}
    </ul>
  )
}

export default App
