import CartContext from "./cart-context";
import { useState,useReducer, createContext } from "react";

const CartProvider = props => {

    const DispathFn = (state,action)=>{
        if(action.type==="ADD"){
            const existingCartIndex = state.items.findIndex((item)=>item.id===action.item.id)
            const existingCartItem = state.items[existingCartIndex]
            if(existingCartItem){
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount+action.item.amount
                }
                const updatedItems = [...state.items]
                updatedItems[existingCartIndex] = updatedItem
                return {items:updatedItems,amount:state.amount+action.item.price*action.item.amount}
            }
            return {items:[...state.items,action.item],amount:state.amount+action.item.price*action.item.amount}
        }
        else if(action.type==="REMOVE"){
            const itemIndex = state.items.findIndex((item)=>item.id===action.id)
            const itemToRemove = state.items[itemIndex]
            const updatedItem = {...itemToRemove,amount:itemToRemove.amount-1}
            if(updatedItem.amount===0){
                const UpdatedItems = state.items.filter(item => item.id !== action.id)
                return {items:UpdatedItems,amount:state.amount-itemToRemove.price}
            }
            else{
                const UpdatedItems = [...state.items]
                UpdatedItems[itemIndex] = updatedItem
                return {items:UpdatedItems,amount:state.amount-itemToRemove.price}
            }
        }
        else if(action.type==="CLEAR"){
            return {items:[],amount:0}
        }
    }

    const [cartState,cartStateDispatch] = useReducer(DispathFn,{items:[],amount:0})

    // const [items,setItems] = useState([])
    // const [amount,setAmount] = useState(0)

    const addItemHandler = (item)=>{
        cartStateDispatch({type:'ADD',item})
    }
    const removeItemHandler = (id)=>{
        cartStateDispatch({type:"REMOVE",id})
    }

    const clearCartHandler = () => {
        cartStateDispatch({type:"CLEAR"})
    }

    let Cart_Context = {
        items:cartState.items,
        totalAmount:cartState.amount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler
    }
    return (
        <CartContext.Provider value={Cart_Context}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;