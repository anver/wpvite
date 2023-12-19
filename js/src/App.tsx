import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import { useState } from 'react';
import './App.css';

function App() {
	const [ count, setCount ] = useState( 0 );

	const increment = () => setCount( count => count + 1 );

	return (
		<div className="App">
			<div className="logos">
				<a href="https://vitejs.dev" target="_blank">
					<img src={ viteLogo } className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={ reactLogo } className="logo react" alt="React logo" />
				</a>
			</div>
			<h2>Vite + React + WordPress = Awesomeness</h2>
			<div className="card">
				<button onClick={ increment }>count is { count }</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;
