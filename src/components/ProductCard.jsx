import { Rating } from "@mui/material";
import React,{useState} from "react";
import { useStateValue } from "@/Context/StateProvider";

function ProductCard({title,id,image,price,rating}) {
  const [{basket},dispatch] = useStateValue();
  const [added,setAdded] = useState(false);
  
  const addToBasket = () => {
    setAdded(true);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }
  const removeFromBasket = () => {
    setAdded(false);
    dispatch({
      type:"REMOVE_FROM_BASKET",
      item: {
        id: id,
      }
    })
  }


  return (
    <div className="bg-white rounded-sm shadow-lg container w-[30%] sm:min-w-0 min-w-fit">
      <div className="px-8 py-2 flex flex-col">
        <h1 className="text-sm font-semibold">
          {title}
        </h1>
        <h1 className="mt-1"> $ <span className="font-bold">{price}</span> </h1>
        <Rating name="read-only" value={rating} readOnly />
        <div className="mx-auto flex flex-col gap-2 items-center">
            <div>
                <img className="object-contain w-auto h-56" src={image} alt="product" />
            </div>
            
            {added ? <button onClick={removeFromBasket} className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 w-fit py-1 px-1 rounded">Remove</button> : <button onClick={addToBasket} className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 w-fit py-1 px-1 rounded">Add to Basket</button> }
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
