function App() {
	const arr = [];
	
	for (let i = 1; i <= 5; i++) {
		arr.push(<li>{i}</li>);
	}
	
	return <div>
		{arr}
	</div>;
}

export default App
