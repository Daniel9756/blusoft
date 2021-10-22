import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css"
// @ts-ignore

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Articles } from "./components/Articles"
function App() {




  return (
    <Router>
      <Header />
      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/headline' exact component={Articles} />



      </Switch>
    </Router>

  );
}

export default App;
