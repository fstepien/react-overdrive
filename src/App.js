import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import References from './References';
import Welcome from './Welcome';

const App = () => (
	<Router>
		<div className="App">
			<header className="App-header">
				<ul className="App-header-list">
					<li className="App-header-list-item">
						<Link to="/">Welcome</Link>
					</li>
					<li className="App-header-list-item">
						<Link to="/MDB">10. MDB</Link>
					</li>
					<li className="App-header-list-item">
						<Link to="/References">11. References</Link>
					</li>
				</ul>
			</header>
			<main className="main-section">
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/MDB" component={MovieList} />
					<Route path="/MDB/:id" component={MovieDetail} />
					<Route path="/References" component={References} />
				</Switch>
			</main>
		</div>
	</Router>
);

export default App;
