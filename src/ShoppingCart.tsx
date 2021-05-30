

import { useEffect, useState } from 'react'
import {cartItemType} from './App'

interface sidebarProps {
    showSidebar: boolean,
    closeSidebar(): void,
    myCart:cartItemType[],
    total:number
    handleAddToCart:(clickedItem:cartItemType)=>void
    handleDeleteToCart:(clickedItem:cartItemType)=>void
    
    
    
}





const ShoppingCart = ({ showSidebar, closeSidebar,myCart,handleAddToCart,handleDeleteToCart,total }: sidebarProps) => {

   





    const calculateTotal=()=>{
      return  myCart.reduce((sum:number,current)=>sum+(current.price*current.amount),0)
    }

 



    return (

        
            <div className={`fixed overflow-y-scroll bottom-0 top-0 right-0  pb-48 w-80 bg-yellow-700 ${showSidebar ? 'visible' : 'hidden'}`}>

                <button onClick={() => closeSidebar()}
                    className="absolute top-0 right-0 bg-red-100 m-2 text-4xl outline-none text-red-600"
                >x</button>

                <div className="flex flex-col text-yellow-100 justify-center items-center">

                    <h1 className="font-bold text-2xl py-6 underline">Your Shopping Cart</h1>
                    <div className="px-4 ">
                      {myCart.map((item)=>{
                          return <div key={item.id}>
                              <h5 className="font-bold mt-6 underline">{item.title}</h5>
                              <div className="flex mt-6 justify-center items-center text-center">
                                  <img src={item.image} className="object-fit w-16 h-auto rounded-xl" />
                              </div>
                              <div className="flex pt-4 font-bold text-yellow-200 justify-between">
                                  <p>Price:${item.price}</p>
                                  <p>Amount:${item.price*(item.amount)}</p>
                              </div>
                              <div className="flex  border-b-4 border-red-500 pb-2  justify-between pt-2">
                                  <button onClick={()=>handleDeleteToCart(item)}
                                  className="bg-yellow-500 text-yellow-100 p-3">-</button>
                                  <p className="text-yellow-300 mt-4">{item.amount}</p>
                                  <button onClick={()=>handleAddToCart(item)}
                                   className="bg-yellow-500 text-yellow-100 p-3">+</button>
                              </div>
                              
                          </div>
                      })}
                     <hr className="mt-4" />
                    </div>
                    
                    <div className="flex pt-4 font-bold text-yellow-200 justify-start">
                    
                    <p className="font-bold text-red-200">Total:Rs.{calculateTotal()}</p>

                    </div>
                </div>
            </div>
       


    )
}

export default ShoppingCart
