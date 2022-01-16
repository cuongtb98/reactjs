import { useState, useContext } from "react"
import { cartContext } from "../../App";

const List = ({ dog }) => {
  const [isAdded, setIsAdded] = useState(false);
  const {setCart}  = useContext(cartContext)

  const handleClick = () => {
    setIsAdded(true)
    const newItem = {
        name: dog.name,
        price: dog.price,
        imageUrl: dog.imageUrl
    }
    setCart(itm => [...itm, newItem])
    
  }
  return (
    <>
      <div key={dog.id} className="card col-3 m-2 mx-auto" style={{ width: "18rem" }}>
              <img src={dog.imageUrl} className="card-img-top mx-auto mt-1"
                style={{
                  overflow: "hidden",
                  width: 260,
                  height: 200,
                  objectFit: 'cover',
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{dog.name}  <sup>{dog.price} $</sup> </h5>
               
                <p className="card-text"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {dog.description}
                </p>
                {
                  isAdded ? (<a className="btn btn-primary">Added</a>
                  ):(
                    <a onClick={handleClick} className="btn btn-primary">Add To Cart</a>
                  )
                }
                
              </div>
            </div>
    </>
  );
}

export default List;