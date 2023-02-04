import React from 'react'
import { useStateValue } from "@/Context/StateProvider";
import CheckoutProduct from "@/components/CheckoutProduct";
import Navbar from "@/components/Navbar";
import SubTotal from "@/components/SubTotal";


function Checkout() {
    const [{user,basket},dispatch] = useStateValue();
  return (
      <>
          <Navbar></Navbar>

    <div className={'px-10 py-2'}>

        <div className={'flex relative flex-col sm:flex-row'}>

        <div className={'sm:w-[70%] w-full'}>
            <div >
                <h1 className={'text-lg font-bold'}> Hello <span>{user?.email}</span> </h1>
                <h1 className={'text-xl font-bold'}>Your Shopping Basket</h1>
            </div>
            {basket.length !== 0 ? basket?.map((product) => (<CheckoutProduct key={product.id} product={product} />)) : <div className={'mt-4'}>No items</div> }
        </div>
        <div className={'sm:w-[30%] w-full'}>
            <SubTotal></SubTotal>
        </div>
        </div>
    </div>
      </>
  )
}

export default Checkout