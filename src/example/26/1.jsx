function App() {
	const isAdult = false;
  let text;
  if(isAdult) {
    text = "взлослый"
  } else {
    text = "невзлослый"
  }
	
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default App
