import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./components/movies/Movies";
import TvShows from "./components/tvshows/TvShows";
import Movie from "./components/movies/Movie";
import Actors from "./components/actors/Actors";
import Actor from "./components/actors/Actor";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Movies} />
				<Route exact path="/tv" component={TvShows} />
				<Route path="/:type/:id" component={Movie} />
				<Route exact path="/actors" component={Actors} />
				<Route path="/:id" component={Actor} />
			</Switch>
		</Router>
	);
}

export default App;
