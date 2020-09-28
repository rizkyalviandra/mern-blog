import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import "./mainapp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create-blog" component={CreateBlog} />
            <Route path="/detail-blog" component={DetailBlog} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
