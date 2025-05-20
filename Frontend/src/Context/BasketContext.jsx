import React, { createContext, useEffect, useState } from 'react'
 export let BasketContext = createContext()
function BasketProvider({children}) {
    let localeBasket = localStorage.getItem("basket")
    let [ basket ,setBasket] = useState(localeBasket ? JSON.parse(localeBasket):[])
    useEffect(()=>{
        localStorage.setItem("basket", JSON.stringify(basket))
    },[basket])
    let value ={
        basket,setBasket
    }
  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider