import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import Input from "../InputFields/Input";
import "./post.css";
const Post = (props) => {
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("This is Descriptions");
  const tags = ["None", "NSFW", "Mood", "Meme", "Shitpost"];
  const [selectIdx, setSelectIdx] = useState(0);
  const {setPost} = props
  const dispatch = useDispatch()


  const handlePost = () => {
    setPost(false)
    const newPost = {
        title: title,
        description: desc,
        tag: selectIdx,
    };
    dispatch(createPost(newPost))
  };

  return (
    <>
      <section className="makepost-container">
        <div className="makepost-navigation">
          <p className="makepost-save" onClick={handlePost}>
            Post
          </p>
        </div>
        <Input
          data={title}
          tag="textarea"
          setData={setTitle}
          label="Title"
          classStyle="makepost-title"
        />
        <Input
          data={desc}
          tag="textarea"
          setData={setDesc}
          label="Description"
          classStyle="makepost-desc"
        />
        <label> Tags </label>
        <div className="makepost-tags">
          {tags.map((tag, idx) => {
            return (
                <button
                key={idx}
                className={`${
                  selectIdx === idx
                    ? `makepost-tags-selected-${tag}`
                    : `makepost-tags-${tag}`
                }`}
                onClick={() => setSelectIdx(idx)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Post;
