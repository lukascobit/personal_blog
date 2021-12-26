
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
import AddComment from "./components/AddComment";
const userLang = navigator.language || navigator.userLanguage;


function App() {
  console.log(window.location.pathname);
  return (
    <>
    <div className="homeDiv">
      <a className="homeButton" href="/"><h1><img className="pfp" src={pfp} alt="" />Lukáš Odehnal</h1></a>
    </div>
    <div className="pagesLinks">  
      <a className={ window.location.pathname === "/blog" ? 'currentPagesLink' : 'pagesLink'} href="/blog">blog</a>
      <a className={ window.location.pathname === "/projects" ? 'currentPagesLink' : 'pagesLink'} href="/projects">projekty</a>
    </div>
    <Router>
      <Switch>
        <Route path="/projekty">
          <Projects/>
        </Route>
        <Route path="/blog" exact>
          <Blog/>
        </Route>
        <Route path="/blog/:id" exact>
          <SpecificBlog/>
        </Route>
        <Route path="/blog/:id/addcomment">
          <AddComment/>
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