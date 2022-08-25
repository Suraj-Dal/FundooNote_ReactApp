import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import TakeNoteThree from './Components/TakeNoteThree/TakeNoteThree';

function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
     {/* <HeaderComp /> */}
      {/* <TakeNoteOne /> */}
      {/* <TakeNoteTwo /> */}
      <Dashboard />
      {/* <TakeNoteThree /> */}
    </div>
  );
}

export default App;
