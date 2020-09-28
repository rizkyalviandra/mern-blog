import React from "react";
import {
  Button,
  Input,
  Link,
  TextArea,
  Upload,
  WhiteSpace,
} from "../../components";
import "./createblog.scss";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <Link title="back to home" onClick={() => history.push("/")} />
      <p className="title">Create New Blog</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <WhiteSpace />
      <div className="button-action">
        <Button title="Save" onClick={() => history.push("/")} />
      </div>
      <WhiteSpace height={50} />
    </div>
  );
};

export default CreateBlog;
