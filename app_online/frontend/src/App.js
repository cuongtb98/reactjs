import Header from "./Components/Header/Header"
import "./App.css"
import { useState } from "react"
import EditPage from "./Components/Edit/EditPage"
import { useSelector } from "react-redux"
import Footer from "./Components/Footer/Footer"
import Post from "./Components/Post/MakePost"
import Posts from "./Components/Post/Posts"
const App = () => {
    const [edit, setEdit] = useState(false)
    const [post, setPost] = useState(false)
    const pending = useSelector(state => state.user.pending)
    const error = useSelector(state => state.user.error)

    return (
        <>
            {edit ? (
                <EditPage setEdit={setEdit} />
            ) : !edit && !post ? (
                <>
                    <Header setEdit={setEdit} />
                    <div className="post-container">
                        <Posts />
                    </div>
                    <Footer post={post} setPost={setPost} />
                </>
            ) : (
                <>
                    <Header setEdit={setEdit} />
                    <Post setPost={setPost} />
                </>
            )

            }
        </>
    )
}
export default App