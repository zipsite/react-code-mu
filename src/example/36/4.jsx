function App() {
	function func(arg1, event, arg2) {
		console.log(arg1, arg2, event);
	}
	
	return <div>
		<button onClick={event => func('eee', event, "yyy")}>act</button>
	</div>;
}

export default App
