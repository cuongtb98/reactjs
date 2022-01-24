import "./footer.css"

const Footer = (props) => {
    const {post, setPost} = props
    const handlePost = () => {
        setPost(!post)
    }
    return (
        <footer className="footer">
          <div className="footer-title" onClick={handlePost}>
            {post ? "x" : "+"}
          </div>
        </footer>
      );
}
 
export default Footer;