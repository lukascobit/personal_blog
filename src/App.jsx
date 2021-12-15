
import Home from "./components/Home";
import pfp from "./components/imgs/pfp.jpg"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import SpecificBlog from "./components/SpecificBlog";
const userLang = navigator.language || navigator.userLanguage;


function App() {
  return (
    <>
    <div className="homeDiv">
      <a className="homeButton" href="/"><h1><img className="pfp" src={pfp} alt="" />Lukáš Odehnal</h1></a>
    </div>
    <div className="pagesLinks">  
      <a className='pagesLink' href="/blog">blog</a>
      <a className='pagesLink' href="/projects">projekty</a>
    </div>
    <Router>
      <Switch>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/blog" exact>
          <Blog/>
        </Route>
        <Route path="/blog/:id">
          <SpecificBlog/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;