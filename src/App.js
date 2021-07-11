import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import EntryPage from './pages/entry/EntryPage';
import AddTicket from './pages/new-ticket/AddTicket';

function App() {
  return (
    <div className="App">
      {/* <EntryPage/> */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        <AddTicket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
