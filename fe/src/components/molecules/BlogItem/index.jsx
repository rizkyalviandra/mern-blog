import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import "./blogItem.scss";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="blog-img" />
      <div className="content-detail">
        <p className="title">Blog Item</p>
        <p className="author">Author - Date Post</p>
        <p className="blog">
          Ex mollit Lorem sunt dolor magna irure amet et fugiat. Quis et
          occaecat magna sint anim veniam irure adipisicing aute sunt. Occaecat
          aliqua proident nulla cupidatat in.
        </p>
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
