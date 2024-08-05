import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Input from "./components/Input";
import SignUp from "./Register/SignUp";
import LogIn from "./Register/LogIn";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Advanced from "./components/Advanced";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>URL Shortener</title>
        <meta
          name="Description"
          content="Enjoy unlimited access to URL Shortener App"
        />
      </Helmet>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Hero />
            <div>
              <Input />
            </div>
            <div>
              <Advanced />
            </div>
            <div>
              <Faq />
            </div>
          </Route>
        </Switch>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
