import React from 'react';
import {Checkbox} from "@mui/material";
import {useStateValue} from "@/Context/StateProvider";
import {getBasketTotal} from '@/Context/reducer';

function SubTotal() {
    const [{user,basket},dispatch] = useStateValue();

    const itemCount = basket?.length;
    const priceTotal = getBasketTotal(basket);

    return ( itemCount > 0 &&
        <div className={'p-4 flex flex-col border gap-4 ml-2'}>
            <h1 className={'font-semibold'}> {`subtotal (${itemCount} items) : `} <span className={'font-bold'}> {`$${priceTotal}`} </span>  </h1>
            <div className={'flex gap-1 items-center'}>

            <Checkbox
                className={'mx-0 px-0'}
                inputProps={{ 'aria-label': 'controlled' }}
            />
                <h1>This order contains a gift.</h1>
            </div>

            <button className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 w-full py-1 px-1 rounded">Proceed to Checkout</button>
        </div>
    );
}

export default SubTotal;