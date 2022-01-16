import List from "./List";
const Dogs = ({ dogs }) => {
  return (
    <>
      <h3 className="text-center p-3">choose for yourself a dog</h3>
      <div className="row">
        {dogs.map(dog => {
          return (

            <List dog={dog} />
          )
        })}
      </div>
    </>
  );
}

export default Dogs;