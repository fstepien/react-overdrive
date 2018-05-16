import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import left from './caret-square-left.svg';
// import right from './caret-square-right.svg';
import './App.css';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import References from './References';
import Welcome from './Welcome';
import Animations from './Animations';
import JavaScript from './JavaScript';
import React3D from './React';
import OverdriveOne from './OverdriveOne';
import OverdriveTwo from './OverdriveTwo';
import OverdriveThree from './OverdriveThree';
import OverdriveFour from './OverdriveFour';
import OverdriveFive from './OverdriveFive';
import Why from './Why';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<ul className="App-header-list">
							<li className="App-header-list-item">
								<Link to="/">01.Welcome</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/Animations">02.Animations</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/JavaScript">03.JavaScript</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/React3D">04.React</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/OverdriveOne">05.SameSame</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/OverdriveTwo">06.NewImg</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/OverdriveThree">07.NowADiv</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/OverdriveFour">08.Easy</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/OverdriveFive">09.Slow</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/Why">10.Why</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/MDB">11.MDB</Link>
							</li>
							<li className="App-header-list-item">
								<Link to="/References">12. References</Link>
							</li>
						</ul>
					</header>
					<main className="main-section">
						<Switch>
							<Route exact path="/" component={Welcome} />
							<Route exact path="/Animations" component={Animations} />
							<Route exact path="/JavaScript" component={JavaScript} />
							<Route exact path="/React3D" component={React3D} />
							<Route exact path="/OverdriveOne" component={OverdriveOne} />
							<Route exact path="/OverdriveTwo" component={OverdriveTwo} />
							<Route exact path="/OverdriveThree" component={OverdriveThree} />
							<Route exact path="/OverdriveFour" component={OverdriveFour} />
							<Route exact path="/OverdriveFive" component={OverdriveFive} />
							<Route exact path="/Why" component={Why} />
							<Route exact path="/MDB" component={MovieList} />
							<Route path="/MDB/:id" component={MovieDetail} />
							<Route path="/References" component={References} />
						</Switch>
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
