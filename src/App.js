import "./App.css";
import React, { useState } from "react";
import { TimelineStoneAge } from "./pages/dashboard/Timeline";
import { TimelineBronzeAge } from "./pages/dashboard/Timeline1";
import { TimelineIronAge } from "./pages/dashboard/Timeline2";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/layout";
import { Dino } from "./pages/dinos/Dino";
import { Quiz } from "./pages/quiz/Quiz";
import { Login } from "./pages/loginsignup/login";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const isAuthenticated = false;
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Layout isAuthenticated={user}>
          <Switch>
            <Route exact path="/stoneage">
              <TimelineStoneAge />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/bronzeage">
              <TimelineBronzeAge />
            </Route>
            <Route exact path="/ironage">
              <TimelineIronAge />
            </Route>
            <Route exact path="/dino">
              <Dino />
            </Route>
            <Route exact path="/quiz">
              <Quiz />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
