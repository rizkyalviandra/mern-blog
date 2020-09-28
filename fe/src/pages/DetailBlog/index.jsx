import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Link, WhiteSpace } from "../../components";
import "./detailblog.scss";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-post-wrapper">
      <img className="img-cover" src={RegisterBg} alt="blog img" />
      <p className="blog-title">Title post</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Ex mollit Lorem sunt dolor magna irure amet et fugiat. Quis et occaecat
        magna sint anim veniam irure adipisicing aute sunt. Occaecat aliqua
        proident nulla cupidatat in.
      </p>
      <WhiteSpace />
      <div className="button-back-wrapper">
        <Link title="back to home" onClick={() => history.push("/")} />
      </div>
      <WhiteSpace height={50} />
    </div>
  );
};

export default DetailBlog;
