import "./App.css";
import { TimelineStoneAge } from "./pages/dashboard/Timeline";
import { TimelineBronzeAge } from "./pages/dashboard/Timeline1";
import { TimelineIronAge } from "./pages/dashboard/Timeline2";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/layout";
import { Dino } from "./pages/dinos/Dino";
import { Quiz } from "./pages/quiz/Quiz";

function App() {
  const isAuthenticated = false;
  return (
    <Router>
      <Layout isAuthenticated={isAuthenticated}>
        <Switch>
          <Route exact path="/stoneage">
            <TimelineStoneAge />
          </Route>
          <Route exact path="/login">
            <TimelineStoneAge />
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
  );
}

export default App;
