import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/layout";

function App() {
  const isAuthenticated = true;
  return (
    <Router>
      <Layout isAuthenticated={isAuthenticated}>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
