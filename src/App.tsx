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
import Footer from "./components/Footer";
import Profile from "./components/Profile"
import { ReadArticle } from "./components/ReadArticle"
import Contact from "./components/Contact"
function App() {




  return (
    <Router>
      <Header />
      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/headline' exact component={Articles} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/article/:AuthorId/:id' component={ReadArticle} />

      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
