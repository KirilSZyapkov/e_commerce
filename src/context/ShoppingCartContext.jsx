import React, {useContext, createContext} from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext();

export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}){

    const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
    

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id){
        setCartItems(currItems => {
            if(currItems.find(item => item?.id === id) == null){
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                })
            }
        })
    }
    console.log(cartItems);

    function decreaseCartQuantity(id){
        setCartItems(curCartItems=>{
            if(curCartItems.find(item => item.id === id)?.quantity === 1){
                return curCartItems.filter(item=> item.id !== id)
            } else {
                return curCartItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }            
        })
    }

    function removeFromCart(id) {
        setCartItems(curCartItems => {
            return curCartItems.filter(item=> item.id !== id)    
        })
    }



    return <ShoppingCartContext.Provider value={{
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity
        }}>
        {children}
    </ShoppingCartContext.Provider>
}