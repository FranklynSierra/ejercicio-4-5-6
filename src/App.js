
import './App.css';
import {Clock,ClockFunction} from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Clock></Clock> */}
       <ClockFunction></ClockFunction>
      </header>
    </div>
  );
}

export default App;
