// import reactLogo from "./assets/react.svg";
// import "./App.css";

import SearchForm from "./components/SearchForm";
// import Context from "./components/context";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <HomePage />
      {/* <p>HomePage</p> */}
    </div>
  );
}

export default App;
