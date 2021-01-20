import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <h1>I am chatpage</h1>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      {/* Tinder Cards */}
      {/* Button below tinder cards */}

      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
