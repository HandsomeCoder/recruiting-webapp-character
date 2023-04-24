import { Provider } from "react-redux";
import './App.css';
import { store } from './store';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import WebappCharacter from './pages/WebappCharacter';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <WebappCharacter />
    </div>
    </Provider>
  );
}

export default App;