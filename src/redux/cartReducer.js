import Product1 from '../../images/product1.png'
import Product2 from '../../images/product2.png'
import Product3 from '../../images/product3.png'
import Product4 from '../../images/product4.png'
import Product5 from '../../images/product5.png'


const initState = {
    addedItems: [
        {id:1,title:'Jacket', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:200,img:Product1},
        {id:2,title:'Shirt', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:100,img: Product2},
        {id:3,title:'Suit', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:260,img: Product3},
        {id:4,title:'Short', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:200,img:Product4},
        {id:5,title:'Nike shoes', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Product5},
    ],
    total: 920

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;