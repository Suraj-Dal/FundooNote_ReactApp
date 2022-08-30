import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import TakeNoteThree from './Components/TakeNoteThree/TakeNoteThree';
import RouterComponent from './Router/Router';
import store from './Redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <Signin /> */}
      {/* <HeaderComp /> */}
      {/* <TakeNoteOne /> */}
      {/* <TakeNoteTwo /> */}
      {/* <Dashboard /> */}
      {/* <TakeNoteThree /> */}
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    </div>
  );
}

export default App;
