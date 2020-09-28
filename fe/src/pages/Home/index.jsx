import React from "react";
import { Button, WhiteSpace } from "../../components/atoms";
import { BlogItem } from "../../components/molecules";
import "./home.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <WhiteSpace />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <WhiteSpace height={0} width={20} />
        <Button title="Next" />
      </div>
      <WhiteSpace />
    </div>
  );
};

export default Home;
