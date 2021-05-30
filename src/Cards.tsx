import { useState } from "react";
import {cartItemType} from './App'




interface cardProps {
    id: number,
    price: number,
    title: string,
    category: string,
    description: string,
    image: string,
    amount: number,
    handleAddToCart:(clickedItem:cartItemType)=>void
    addItems(myId:number):void
    item:cartItemType


}



const Cards = ({id, title, price,item, image,handleAddToCart, description,addItems }: cardProps) => {

    





    return (



        <div className="border px-3 rounded-2xl text-yellow-900 bg-yellow-100 m-4 mt-24">
            <div className="object-fit mt-2 rounded-3xl  border-4 border-yellow-300">
                <img className="rounded-3xl"
                    src={image} />
            </div>
            <div className="">
                <h4 className="py-2 font-extrabold">{title}</h4>
                <p className="py-2">{description}</p>
                <p className="py-2 font-bold">Rs.{price}</p>
            </div>
           <div className="flex items-center justify-center">
           <button onClick={()=>handleAddToCart(item)}
           className="p-2 rounded-lg 
           bg-yellow-500 text-yellow-100"
            >Add To Cart</button>
           </div>


        </div>

    )
}

export default Cards
