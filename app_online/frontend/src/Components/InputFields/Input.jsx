import "../Post/post.css"

const Input = (props) => {
  const {tag, label, data, setData } = props;
  return (
    <>
      <label> {label}</label>
      {tag==='textarea' ? (<textarea
        placeholder={data}
        onChange={(e) => setData(e.target.value)}
      />):(
          <input
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
      
    </>
  );
};

export default Input;
