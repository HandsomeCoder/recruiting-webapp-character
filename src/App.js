import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { store } from "./store";

import WebappCharacter from "./pages/WebappCharacter";

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>React Coding Exercise</h1>
          </header>
          <WebappCharacter />
        </div>
      </Provider>
    </>
  );
}

export default App;
