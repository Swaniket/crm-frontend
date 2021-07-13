import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import EntryPage from './pages/entry/EntryPage';
import AddTicket from './pages/new-ticket/AddTicket';
import TicketList from "./pages/ticket-list/TicketList";
import Ticket from './pages/ticket/Ticket';

function App() {
  return (
    <div className="App">
      {/* <EntryPage/> */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        {/* <AddTicket/> */}
        {/* <TicketList/> */}
        <Ticket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
