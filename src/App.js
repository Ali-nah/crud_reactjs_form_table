// important imports
import React from 'react'
import { BrowserRouter as Router,Route, Routes }from 'react-router-dom';
import './App.css';
import Create from './Create';
import Edit from './Edit';
import Home from './Home';

function App() {
return (
	<div className='App'>

	<Router>
	<Routes>
		<Route path='/home' element={<Home/>}/>
		<Route exact path='/' element={<Create/>}/>
		<Route path='/edit' element={<Edit/>}/>
	</Routes>
	</Router>
</div>
);

}

export default App;
