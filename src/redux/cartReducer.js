import Product1 from '../images/product1.png'
import Product2 from '../images/product2.png'
import Product3 from '../images/product3.png'
import Product4 from '../images/product4.png'
import Product5 from '../images/product5.png'
import { REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from './ActionTypes'

const initState = {
    addedProducts: [
        { id: 1, title: 'Jacket', code: "#594786", price: 200, img: Product1, quantity: 1 },
        { id: 2, title: 'T Shirt', code: "#364251", price: 100, img: Product2, quantity: 1 },
        { id: 3, title: 'Suit', code: "#956784", price: 260, img: Product3, quantity: 1 },
        { id: 4, title: 'Short', code: "#125496", price: 200, img: Product4, quantity: 1 },
        { id: 5, title: 'Nike shoes', code: "#836542", price: 160, img: Product5, quantity: 1 },
    ],
    total: 920

}
const cartReducer = (state = initState, action) => {

    switch (action.type) {

        //remove products from cart
        case REMOVE_ITEM: {

            let itemToRemove = state.addedProducts.find(item => action.id === item.id)
            let new_items = state.addedProducts.filter(item => action.id !== item.id)

            //calculating the total after delete the product
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            return {
                ...state,
                addedProducts: new_items,
                total: newTotal
            }
        }

        //Increase quanity of the product and calc the new total
        case ADD_QUANTITY: {

            let addedItem = state.addedProducts.find(item => item.id === action.id)
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

        //Decrease quanity of the product and calc the new total
        case SUB_QUANTITY: {

            let addedItem = state.addedProducts.find(item => item.id === action.id)
            //if the qt == 0 then it should be removed
            if (addedItem.quantity === 1) {
                let new_items = state.addedProducts.filter(item => item.id !== action.id)
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    addedProducts: new_items,
                    total: newTotal
                }
            }
            else {
                addedItem.quantity -= 1
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    total: newTotal
                }
            }
        }
        default:
            return state;
    }


}
export default cartReducer;