import './App.css';
// components
import Home from './components/home';
import DataPrawer from './context/dataContext';

function App() {
  return (
    <>
      <DataPrawer>
        <Home />
      </DataPrawer>
    </>
  );
}

export default App;
