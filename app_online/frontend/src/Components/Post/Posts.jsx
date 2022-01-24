import { useSelector } from "react-redux";
import "./post.css"
const Posts = () => {
    const posts = useSelector(state => state.post.posts)
    const tags = ["None", "NSFW", "Mood", "Meme", "Shitpost"];
    return (  
        <section className="post-container">
            {posts.map((post,idx) => {
                return(
                    <div className="posts" key={idx}>
                        <p className="post-title">{post.title}</p>
                        <p className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</p>
                        <p className="post-description">{post.description}</p>
                    </div>
                )
            })}
        </section>
    );
}
 
export default Posts;