function App() {
  let text;
  const isAdmin = false;

  if (isAdmin) {
    text = (
      <div>
        <p>fdhfjdshf</p>
        <p>fdhfjdshf</p>
      </div>
    );
  } else {
    text = "";
  }

  return text;
}

export default App;
