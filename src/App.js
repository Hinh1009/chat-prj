import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from './components/Login'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./components/StateProvinder";

function App() {
  // const [user, setUser] = useState(null);
const [{user}]= useStateValue()
  return (
    <div className="App">
      <Router>
        {!user ? (
         <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
