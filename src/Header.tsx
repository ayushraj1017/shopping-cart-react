import { AddShoppingCart } from "@material-ui/icons";
import { useState } from "react";

interface headerProps{
    count:number,
    openSidebar():void
    
}

const Header = ({count,openSidebar}:headerProps) => {

   

   

    return (
        <div>
        <div className="flex justify-end p-4  bg-yellow-500 fixed w-full ">
          <div className=" p-2">
              <p className="absolute top-2 right-3 bg-blue-500 rounded-full text-blue-100 p-1">{count}</p>
          <AddShoppingCart 
            className="cursor-pointer"
            onClick={()=>openSidebar()}
            />
          </div>
        </div>
       

        </div>
    )
}

export default Header
