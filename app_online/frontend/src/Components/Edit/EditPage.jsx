import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../InputFields/Input";
import "./edit.css";
// import { updateStart, updateError, updateSuccess } from "../../redux/userSlice";
import { updateUser } from "../../redux/api";
import User from "../../model/user";
const EditPage = (props) => {
  
  const avaUrl = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://i.redd.it/7ipyf6pvqac61.png",
    "https://i.redd.it/ksmb0m02ppy51.png",
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
  ];

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(user.avaUrl);
  const { setEdit } = props;


  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false)
    // const updateInfoUser = User(name,age,about,url,theme)
    const updateInfoUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      theme: theme
    }
    updateUser(updateInfoUser, dispatch)
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <div className="close-container">
            <p className="close-x">X</p>
            <button className="close">SAVE</button>
          </div>
          <div className="edit-profile"> Edit Profile </div>
          <div className="input-container">
            <Input label="Name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input
              tag="textarea"
              label="About"
              data={user.about}
              setData={setAbout}
            />

            <label> Profile Picture </label>
            <section className="input-image-container">
              <>
                {avaUrl.map((url, idx) => {
                  return (
                    <img
                      key={idx}
                      src={url}
                      alt=""
                      onClick={(e) => setUrl(e.target.src)}
                    />
                  );
                })}
              </>
            </section>

            <div className="theme-container">
              <label> Theme </label>
              <input
                className="theme-color"
                type="color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
