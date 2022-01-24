const User = (...kwagr) => {
    return (
        {
            name: kwagr[0]?kwagr[0]:"",
            age: kwagr[1]?kwagr[1]:"",
            about: kwagr[2]?kwagr[2]:"",
            avaUrl: kwagr[3]?kwagr[3]:"",
            theme: kwagr[4]?kwagr[4]:"",
        }
    );
  };
  
  export default User;
  