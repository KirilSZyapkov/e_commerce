import React, {useState, useEffect, useContext, createContext} from "react";

const ShoppingCartContext = createContext();

export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}){

    const [cartItems, setCartItems] = useState([]);

    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id){
        setCartItems(curCartItems=>{
            if(curCartItems.find(item => item.id === id) == null){
                return [...curCartItems, {id, quantity: 1}]
            } else {
                return curCartItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    return <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity}}>
        {children}
    </ShoppingCartContext.Provider>
}