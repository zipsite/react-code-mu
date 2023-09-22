import {useState} from 'react'
function App() {
	const [isBanned, setIsBanned] = useState(false);
	
  const variantButton = {
    banned: <button onClick={() => setIsBanned(true)}>Забанить</button>,
    unBanned: <button onClick={() => setIsBanned(false)}>Разбанить</button>
  }

	return <div>
		<span>{isBanned ? 'Забанен' : 'Разбанен'}</span>
		{isBanned ? variantButton.unBanned : variantButton.banned}
		
	</div>;
}

export default App
