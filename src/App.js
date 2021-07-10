import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import EntryPage from './pages/entry/EntryPage';

function App() {
  return (
    <div className="App">
      {/* <EntryPage/> */}
      <DefaultLayout>
        <Dashboard/>
      </DefaultLayout>
    </div>
  );
}

export default App;
