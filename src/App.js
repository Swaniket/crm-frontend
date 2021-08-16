import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute";

import Dashboard from "./pages/dashboard/Dashboard";
import EntryPage from "./pages/entry/EntryPage";
import Registration from "./pages/registration/RegistrationPage";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketList from "./pages/ticket-list/TicketList";
import Ticket from "./pages/ticket/Ticket";
import UserVerification from "./pages/user-verification/UserVerificationPage";
import PasswordResetPage from "./pages/password-reset/PasswordResetPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <EntryPage />
          </Route>
          <Route path="/password-reset" exact>
            <PasswordResetPage />
          </Route>
          <Route path="/registration" exact>
            <Registration />
          </Route>
          <Route path="/verification/:_id/:email" exact>
            <UserVerification />
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
