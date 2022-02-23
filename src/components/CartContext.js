import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (props, contador) => {

        const productFinded= cartList.find((item) => item.id === props.item.id)
        console.log("encontrado");
        console.log(productFinded);
    
        if ( typeof productFinded === "undefined" ) {
            console.log("NO encontrado");
            setCartList([
                ...cartList, //spread operator
                {
                id: props.item.id,
                name: props.item.name,
                image: props.item.image,
                price: props.item.price,
                qty: contador
                }
            ]);          
        } else {
            console.log("ENCONTRADO");
            const productUpdate = cartList.map((item) => {
                if(item.id === props.item.id) {   
                  let newQty = item.qty + contador;     
                  return {
                    ...item,                              
                    qty: newQty
                  }        
                }
                return item
              });
              
              console.log("productUpdate=");
              console.log(productUpdate);

              setCartList(productUpdate);
              
              console.log("cartList=");
              console.log(cartList);

        }
    }

    const removeItem = (itemId) => {
        const newCartList = cartList.filter((item) => item.id !== itemId);
        setCartList(newCartList);
    }

    const clearCart = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;