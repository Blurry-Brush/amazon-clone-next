import React from 'react'
import {Rating} from "@mui/material";
import {useStateValue} from "@/Context/StateProvider";

function CheckoutProduct({product}) {
    const [{user,basket},dispatch] = useStateValue();


    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item: {
                id: product?.id
            }

        })
    }


  return (
      <div className={'flex items-center gap-2 grow border p-2 mt-4'}>
      <div>
        <img className={'h-36 w-auto'} src={product?.image} alt={'product'}/>
      </div>
        <div className={'flex flex-col'}>
            <h1 className={'text-md font-semibold'}> {product?.title} </h1>
            <h1>$<span className={'font-bold'}>{product?.price}</span>  </h1>
            <Rating name="read-only" value={product?.rating} readOnly />
            <button onClick={removeFromBasket} className="mt-4 bg-yellow-500 cursor-pointer hover:bg-yellow-600 w-fit py-1 px-1 rounded">Remove From Basket</button>
        </div>
    </div>


  )
}

export default CheckoutProduct