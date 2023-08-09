import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import DetailsPage from "./DetailsPage/DetailsPage";
import Search from "./NavBar/SearchPage/Search";
import Profile from "./AccountPage/Profile";
import Login from "./LoginPage/Login";
import Register from "./LoginPage/Register";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:movieId">
            <DetailsPage />
          </Route>
          <Route path="/search/:movieKeyword">
            <Search />
          </Route>
          <Route path="/profile/:userId">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
