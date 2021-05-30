import { Badge, Card, Drawer, Grid, LinearProgress } from "@material-ui/core";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import Cards from "./Cards";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";





export interface cartItemType {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number

}







const App: FC = () => {


  const getProducts = async (): Promise<cartItemType[]> => {
    return await axios(`https://fakestoreapi.com/products`)
      .then(res => res.data)
  }

  const { data, isLoading, error } = useQuery<cartItemType[]>(
    "products",
    getProducts)



  const [count, setCount] = useState(0);
  const [myCart, setMyCart] = useState([] as cartItemType[]);
  const[showSidebar,setShowSidebar]=useState<boolean>(false)
  const[total,setTotal]=useState(10)

 


  const handleAddToCart=(clickedItem:cartItemType)=>{
   
      setCount(count+1)
     
      setMyCart(prev => {
        const isItemInCart = prev.find(item => item.id === clickedItem.id);
  
        if (isItemInCart) {
          return prev.map(item =>
            item.id === clickedItem.id
              ? { ...item, amount: item.amount + 1 }
              : item
          );
        }
        // First time the item is added
        return [...prev, { ...clickedItem, amount: 1 }];
      });

  }

  const handleDeleteToCart=(clickedItem:cartItemType)=>{
   
    setCount(count-1)
   
    setMyCart(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount -1 }
            : item
        ).filter((item)=>item.amount>0)
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
   
}






  const addItems = (myId: number): void => {
    // setCount(count + 1)
    // const itemInCart = data?.find(item => item.id === myId);
    // setMyCart([...myCart,{...itemInCart}])
  }


  const closeSidebar=():void=>{
    setShowSidebar(false)
    
}

const openSidebar=():void=>{
  setShowSidebar(true)
}

  



  if (isLoading) {
    return <LinearProgress />
  }

  if (error) {
    return <h1>Something went Wrong</h1>
  }






  return (
    



    <div className=" ">
      <Header count={count} openSidebar={openSidebar} />
      {}


      <ShoppingCart closeSidebar={closeSidebar}
        showSidebar={showSidebar} 
        myCart={myCart}
        handleAddToCart={handleAddToCart}
      handleDeleteToCart={handleDeleteToCart}
      total={total}
        
           />


      <section className="grid
    sm:grid-cols-3 
  sm:grid-rows-3 sm:gap-4">
        {data?.map((item: cartItemType) => (
          <Cards key={item.id}
            addItems={addItems}
            handleAddToCart={handleAddToCart}
           item={item} {...item} />
        ))}
      </section>
    </div>





  );
};

export default App;
