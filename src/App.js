import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute";

import Dashboard from "./pages/dashboard/Dashboard";
import EntryPage from "./pages/entry/EntryPage";
import Registration from "./pages/registration/RegistrationPage";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketList from "./pages/ticket-list/TicketList";
import Ticket from "./pages/ticket/Ticket";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <EntryPage />
          </Route>
          <Route path="/registration" exact>
            <Registration />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute path="/tickets">
            <TicketList />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
