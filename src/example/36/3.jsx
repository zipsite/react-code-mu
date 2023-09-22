function App() {
	function func(event, arg1, arg2) {
		console.log(arg1, arg2, event);
	}
	
	return <div>
		<button onClick={event => func(event, 'eee', "yyy")}>act</button>
	</div>;
}

export default App
